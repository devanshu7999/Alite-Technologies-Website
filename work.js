/**
 * Work Page — Alite Technologies
 * ================================
 * Handles portfolio rendering, filtering, modal, URL state, and animations.
 * Depends on: portfolio-data.js (portfolioData array), script.js (navbar, reveal observer)
 */

(function () {
  "use strict";

  /* ─── DOM References ─── */
  const featuredGrid   = document.getElementById("featuredGrid");
  const portfolioGrid  = document.getElementById("portfolioGrid");
  const portfolioEmpty = document.getElementById("portfolioEmpty");
  const filterBtns     = document.querySelectorAll(".filter-btn");
  const modalOverlay   = document.getElementById("projectModal");
  const modalPanel     = document.getElementById("modalPanel");
  const modalClose     = document.getElementById("modalClose");
  const modalHero      = document.getElementById("modalHero");
  const modalHeroInner = document.getElementById("modalHeroInner");
  const modalBody      = document.getElementById("modalBody");

  /* ─── Category Icon Map ─── */
  const categoryIcons = {
    websites: "◎",
    reels:    "▶",
    social:   "♡",
    branding: "◇",
    growth:   "↗"
  };

  /* ─── Helper: Build Thumbnail HTML ─── */
  function thumbHTML(project, size) {
    if (project.thumbnail) {
      return `<img src="${project.thumbnail}" alt="${project.name} preview" loading="lazy" />`;
    }
    // Fallback: gradient placeholder with icon
    const iconSize = size === "large" ? "modal-icon" : "";
    return `<span class="placeholder-icon ${iconSize}">${categoryIcons[project.category] || "✦"}</span>`;
  }

  /* ─── Render Featured Cards ─── */
  function renderFeatured(filter) {
    let featured = portfolioData.filter(p => p.featured);
    if (filter && filter !== "all") {
      featured = featured.filter(p => p.category === filter);
    }

    if (featured.length === 0) {
      featuredGrid.innerHTML = "";
      featuredGrid.style.display = "none";
      return;
    }

    featuredGrid.style.display = "";
    featuredGrid.innerHTML = featured.map(p => `
      <article class="featured-card reveal" data-id="${p.id}">
        <div class="featured-img ${p.thumbnail ? 'has-image' : ''}" data-category="${p.category}">
          <div class="featured-img-inner">
            ${thumbHTML(p, "large")}
          </div>
        </div>
        <div class="featured-content">
          <span class="featured-badge">${p.categoryLabel}</span>
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          ${p.caseStudy.results ? `<div class="featured-result">✦ ${p.caseStudy.results}</div>` : ""}
          <a href="#" class="featured-cta" data-project="${p.id}" role="button">Explore Project <span>→</span></a>
        </div>
      </article>
    `).join("");

    // Re-observe for scroll reveal
    observeNew(featuredGrid);
    // Attach click handlers
    attachFeaturedClicks();
  }

  /* ─── Render Portfolio Grid ─── */
  function renderPortfolio() {
    const items = portfolioData.filter(p => !p.featured);

    portfolioGrid.innerHTML = items.map(p => `
      <article class="project-card fade-in" data-id="${p.id}" data-category="${p.category}" tabindex="0" role="button" aria-label="View project: ${p.name}">
        <div class="card-thumb ${p.thumbnail ? 'has-image' : ''}" data-category="${p.category}">
          <div class="card-thumb-inner">
            ${thumbHTML(p, "small")}
          </div>
          <span class="card-category">${p.categoryLabel}</span>
        </div>
        <div class="card-body">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          ${p.client ? `<div class="card-client">${p.client}</div>` : ""}
          <span class="card-cta">View Project <span>→</span></span>
        </div>
      </article>
    `).join("");

    observeNew(portfolioGrid);
  }

  /* ─── Filter Projects ─── */
  let currentFilter = "all";

  function filterProjects(category) {
    currentFilter = category;

    // Update active button
    filterBtns.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.filter === category);
    });

    // Update URL
    const url = new URL(window.location);
    if (category === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", category);
    }
    history.replaceState(null, "", url);

    // Render featured
    renderFeatured(category);

    // Animate cards
    const cards = portfolioGrid.querySelectorAll(".project-card");
    let visibleCount = 0;

    cards.forEach((card, i) => {
      const match = category === "all" || card.dataset.category === category;

      if (match) {
        card.classList.remove("hidden");
        // Stagger fade-in
        card.classList.remove("fade-in");
        card.classList.add("fade-out");
        setTimeout(() => {
          card.classList.remove("fade-out");
          card.classList.add("fade-in");
        }, 50 + visibleCount * 60);
        visibleCount++;
      } else {
        card.classList.add("fade-out");
        setTimeout(() => {
          card.classList.add("hidden");
          card.classList.remove("fade-out");
        }, 300);
      }
    });

    // Empty state
    setTimeout(() => {
      const anyVisible = portfolioGrid.querySelector(".project-card:not(.hidden)");
      portfolioEmpty.hidden = !!anyVisible;
    }, 350);
  }

  /* ─── Filter Event Listeners ─── */
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterProjects(btn.dataset.filter);
    });
  });

  /* ─── Read URL State on Load ─── */
  function readUrlFilter() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && ["websites", "reels", "social", "branding", "growth"].includes(cat)) {
      return cat;
    }
    return "all";
  }

  /* ─── Modal ─── */
  let previousFocus = null;

  function openModal(projectId) {
    const project = portfolioData.find(p => p.id === projectId);
    if (!project) return;

    previousFocus = document.activeElement;
    const cs = project.caseStudy;

    // Set hero
    modalHero.setAttribute("data-category", project.category);
    modalHeroInner.setAttribute("data-category", project.category);

    if (project.thumbnail) {
      modalHeroInner.classList.add("has-image");
      modalHeroInner.innerHTML = `<img src="${project.thumbnail}" alt="${project.name} hero" />`;
    } else {
      modalHeroInner.classList.remove("has-image");
      modalHeroInner.innerHTML = `<span class="placeholder-icon modal-icon">${categoryIcons[project.category] || "✦"}</span>`;
    }

    // Build body
    let html = `
      <span class="modal-badge">${project.categoryLabel}</span>
      <h2>${project.name}</h2>
      ${project.client ? `<div class="modal-client">Client: ${project.client}</div>` : ""}
    `;

    if (cs.overview) {
      html += `
        <div class="modal-section-title">Project Overview</div>
        <p class="modal-text">${cs.overview}</p>
      `;
    }

    if (cs.objective) {
      html += `
        <div class="modal-section-title">Client Objective</div>
        <p class="modal-text">${cs.objective}</p>
      `;
    }

    if (cs.solution) {
      html += `
        <div class="modal-section-title">Our Solution</div>
        <p class="modal-text">${cs.solution}</p>
      `;
    }

    if (cs.services && cs.services.length) {
      html += `
        <div class="modal-section-title">Services Provided</div>
        <div class="modal-tags">
          ${cs.services.map(s => `<span class="modal-tag">${s}</span>`).join("")}
        </div>
      `;
    }

    // Video
    if (project.videoUrl) {
      html += `
        <div class="modal-section-title">Project Video</div>
        <div class="modal-video-wrap">
          <video class="modal-video" controls preload="metadata" playsinline>
            <source src="${project.videoUrl}" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      `;
    }

    // Gallery
    if (project.gallery && project.gallery.length) {
      html += `
        <div class="modal-section-title">Project Gallery</div>
        <div class="modal-gallery">
          ${project.gallery.map((img, i) => `
            <div class="modal-gallery-item">
              <img src="${img}" alt="${project.name} screenshot ${i + 1}" loading="lazy" />
            </div>
          `).join("")}
        </div>
      `;
    }

    if (cs.results) {
      html += `
        <div class="modal-section-title">Results</div>
        <div class="modal-result">✦ ${cs.results}</div>
      `;
    }

    if (cs.technologies && cs.technologies.length) {
      html += `
        <div class="modal-section-title">Technologies & Tools</div>
        <div class="modal-tags">
          ${cs.technologies.map(t => `<span class="modal-tag tech-tag">${t}</span>`).join("")}
        </div>
      `;
    }

    if (cs.projectUrl) {
      html += `
        <div style="margin-top:32px">
          <a class="btn btn-primary modal-project-link" href="${cs.projectUrl}" target="_blank" rel="noopener">
            Visit Live Project <span>↗</span>
          </a>
        </div>
      `;
    }

    modalBody.innerHTML = html;

    // Show modal
    modalOverlay.hidden = false;
    // Force reflow before adding .open for transition
    void modalOverlay.offsetHeight;
    modalOverlay.classList.add("open");
    document.body.classList.add("body-no-scroll");

    // Focus the close button
    setTimeout(() => modalClose.focus(), 100);
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.classList.remove("body-no-scroll");

    // Pause any playing videos
    const videos = modalPanel.querySelectorAll("video");
    videos.forEach(v => { v.pause(); v.currentTime = 0; });

    setTimeout(() => {
      modalOverlay.hidden = true;
      modalBody.innerHTML = "";
    }, 350);

    if (previousFocus) {
      previousFocus.focus();
      previousFocus = null;
    }
  }

  // Close handlers
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });

  // Focus trap inside modal
  modalOverlay.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const focusable = modalPanel.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* ─── Card Click Handlers ─── */
  function attachCardClicks() {
    portfolioGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".project-card");
      if (card) {
        e.preventDefault();
        openModal(card.dataset.id);
      }
    });

    portfolioGrid.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const card = e.target.closest(".project-card");
        if (card) {
          e.preventDefault();
          openModal(card.dataset.id);
        }
      }
    });
  }

  function attachFeaturedClicks() {
    featuredGrid.querySelectorAll(".featured-cta").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(link.dataset.project);
      });
    });

    featuredGrid.querySelectorAll(".featured-card").forEach(card => {
      card.addEventListener("click", (e) => {
        // Don't double-trigger if they clicked the CTA
        if (e.target.closest(".featured-cta")) return;
        openModal(card.dataset.id);
      });
    });
  }

  /* ─── Scroll Reveal for Dynamic Elements ─── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  function observeNew(container) {
    container.querySelectorAll(".reveal:not(.visible)").forEach(el => {
      revealObserver.observe(el);
    });
  }

  /* ─── Initialize ─── */
  function init() {
    renderPortfolio();
    attachCardClicks();

    const initialFilter = readUrlFilter();
    filterProjects(initialFilter);
  }

  // Run on DOM ready (script is at bottom of body, so DOM is ready)
  init();

})();
