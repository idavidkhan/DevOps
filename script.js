// ============================================================
// DATA
// ============================================================
const testimonials = [
  {
    quote:
      "Working with Dawood has been an excellent experience. He has a real talent for simplifying complex DevSecOps processes into clear, actionable steps that everyone can follow. His expertise in cloud and DevOps has often been my go-to resource, and what sets him apart is his patience and willingness to share knowledge. Dawood not only solves problems but also helps elevate the entire team's skills.",
    author: "Umair Amjad",
    title: "Position: Software Engineer at TechCreator",
    date: "Date: November 26, 2024",
  },
  {
    quote:
      "Dawood's approach to building and maintaining reliable systems impressed us from the very beginning. He implemented a robust monitoring and alerting setup that gave us full visibility into our applications, resulting in improved performance and stability. Beyond his technical depth, he communicates clearly and works well with others, which makes collaboration easy. Dawood is a true professional we'd be more than happy to work with again.",
    author: "Zaheer Abbas",
    title: "Position: Web Developer (Self-Employed)",
    date: "Date: February 02, 2025",
  },
  {
    quote:
      "Dawood consistently delivers beyond expectations and has been a key asset to our projects. He automated our deployment pipelines, reducing release times from hours to just minutes, which had a huge impact on productivity. What stands out is his calmness under pressure and ability to collaborate seamlessly across teams. Dawood combines technical excellence with professionalism, making him a truly reliable and standout DevOps engineer.",
    author: "Hamdan Ahmad",
    title: "Position: Project Manager at TechCreator",
    date: "Date: December 30, 2024",
  },
];

const projects = [
  {
    id: 0,
    title: "3-Tier App on K8s (Minikube)",
    description:
      "A fully containerized real-time chat app using Node.js, React, and MongoDB, deployed with Kubernetes. It showcases my skills in cloud-native deployment, DevOps workflows, Docker, Secrets, ConfigMaps, and persistent storage for scalable infrastructure.",
    skills: ["Nginx", "Docker", "DockerHub", "Kubernetes", "MiniKube"],
    githubUrl: "https://github.com/idavidkhan/3-tier-app-on-k8s-minikube",
    liveDemoUrl: null,
  },
  {
    id: 1,
    title: "3 Tier App K8s(Kind) with Prometheus & Grafana",
    description:
      "A hands-on Kubernetes project where I deployed a complete three-tier application on a Kind cluster, configured using Docker and kubectl. The setup includes full monitoring with Prometheus and Grafana installed via Helm. This project demonstrates practical DevOps skills in container orchestration, observability, and real-world infrastructure deployment.",
    skills: ["Kubernetes", "Helm", "Kind", "Prometheus", "Grafana"],
    githubUrl:
      "https://github.com/idavidkhan/3-tier-App-K8s-KIND-with-Prometheus-and-Grafana/",
    liveDemoUrl: null,
  },
  {
    id: 2,
    title: "Ansible Web Server Configuration Management",
    description:
      "Developed a set of idempotent Ansible playbooks to automate the setup and configuration of Apache and Nginx web servers across multiple Linux virtual machines (provisioned with Vagrant). This ensures configuration consistency and speeds up environment setup.",
    skills: ["Ansible", "Linux", "Vagrant", "Apache", "Nginx", "YAML"],
    githubUrl: "https://github.com/idavidkhan/ansible-config",
    liveDemoUrl: null,
  },
];

// ============================================================
// 1. SMOOTH SCROLL — Enhanced via JS for better feel
// ============================================================
function initSmoothScroll() {
  // CSS scroll-behavior: smooth is set, but we enhance with momentum
  // Intercept anchor clicks for smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ============================================================
// 2. PARALLAX EFFECT — requestAnimationFrame based
// ============================================================
function initParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const profilePhoto = document.querySelector(".parallax-element");
  const parallaxHeaders = document.querySelectorAll(".parallax-header");

  let ticking = false;
  let lastScrollY = window.scrollY;

  const onScroll = () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(() => {
        updateParallax(lastScrollY);
        ticking = false;
      });
      ticking = true;
    }
  };

  const updateParallax = (scrollY) => {
    // Profile photo — subtle upward float
    if (profilePhoto) {
      const rect = profilePhoto.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const viewH = window.innerHeight;
      const offset = ((centerY - viewH / 2) / viewH) * 14;
      profilePhoto.style.transform = `translateY(${offset}px)`;
    }

    // Section headers — very gentle parallax
    parallaxHeaders.forEach((header) => {
      const rect = header.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const viewH = window.innerHeight;
      const offset = ((centerY - viewH / 2) / viewH) * 8;
      // Only apply if AOS has already animated it
      if (header.classList.contains("aos-animate")) {
        header.style.transform = `translateY(${offset}px)`;
      }
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}

// ============================================================
// 3. MAGNETIC BUTTONS
// ============================================================
function initMagneticButtons() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const magneticBtns = document.querySelectorAll(".magnetic-btn");

  magneticBtns.forEach((btn) => {
    let rafId = null;

    btn.addEventListener("mousemove", (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.28;
        const deltaY = (e.clientY - centerY) * 0.28;
        btn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
    });

    btn.addEventListener("mouseleave", () => {
      if (rafId) cancelAnimationFrame(rafId);
      btn.style.transform = "";
    });
  });
}

// ============================================================
// 4. LOADER & AOS OBSERVER
// ============================================================
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  const counters = document.querySelectorAll(".stat-number");
  const aosElements = document.querySelectorAll("[data-aos]");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 700);

  // AOS: Animate on Scroll
  const aosObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.getAttribute("data-aos-delay") || 0);
          setTimeout(() => {
            el.classList.add("aos-animate");
          }, delay);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.1 },
  );

  aosElements.forEach((el) => aosObserver.observe(el));

  // Stats counter observer
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute("data-target"));
            animateCounter(entry.target, target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    counters.forEach((c) => counterObserver.observe(c));
  }

  // Init enhancements
  initSmoothScroll();
  initParallax();
  initMagneticButtons();
});

// ============================================================
// 5. STATS COUNTER
// ============================================================
function animateCounter(element, target, duration = 1500) {
  let start = 0;
  const increment = target / (duration / 16);
  const startTime = performance.now();

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(easedProgress * target);

    element.textContent = formatShortNumber(value);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = formatShortNumber(target) + "+";
    }
  };

  requestAnimationFrame(update);
}

function formatShortNumber(num) {
  return num >= 1000 ? (num / 1000).toFixed(0) + "k" : num.toString();
}

// ============================================================
// 6. THEME TOGGLE
// ============================================================
const themeToggleBtn = document.getElementById("mode-toggle");
const icon = document.getElementById("mode-icon");
const currentTheme = localStorage.getItem("theme");

const applyTheme = (isDark) => {
  if (isDark) {
    document.body.classList.add("dark-mode");
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    document.body.classList.remove("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }
};

applyTheme(currentTheme === "dark");

themeToggleBtn.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  applyTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ============================================================
// 7. SHOW MORE / SHOW LESS SKILLS
// ============================================================
const wrapper = document.querySelector(".minor-skills-wrapper");
const showMoreBtn = document.querySelector(".show-more-btn");
const btnContainer = document.querySelector(".show-more-btn-container");
let isExpanded = false;

if (showMoreBtn) {
  showMoreBtn.addEventListener("click", () => {
    wrapper.classList.toggle("expanded");
    isExpanded = !isExpanded;
    showMoreBtn.textContent = isExpanded ? "Show Less" : "Show More";
    showMoreBtn.setAttribute("aria-expanded", isExpanded.toString());

    if (!isExpanded) {
      btnContainer.classList.add("contracting");
      setTimeout(() => btnContainer.classList.remove("contracting"), 700);
    }
  });
}

// ============================================================
// 8. MODAL HELPERS
// ============================================================
const lockBodyScroll = (lock) => {
  document.body.style.overflow = lock ? "hidden" : "";
};

const openModal = (modal) => {
  const content = modal.querySelector(".modal-content");
  modal.style.display = "block";
  content.classList.remove("closing");
  modal.removeAttribute("aria-hidden");
  setTimeout(() => modal.classList.add("show"), 10);
  lockBodyScroll(true);
  // Focus first focusable element
  const focusable = modal.querySelector(
    "button, [href], input, select, textarea",
  );
  if (focusable) setTimeout(() => focusable.focus(), 100);
};

const closeModal = (modal, duration = 380) => {
  const content = modal.querySelector(".modal-content");
  modal.classList.remove("show");
  content.classList.add("closing");
  modal.setAttribute("aria-hidden", "true");
  setTimeout(() => {
    modal.style.display = "none";
    content.classList.remove("closing");
    lockBodyScroll(false);
  }, duration);
};

// ============================================================
// 9. TESTIMONIAL CAROUSEL + MODAL
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const dots = document.querySelectorAll(".carousel-dot");

  if (slider && slides.length > 0 && prevBtn && nextBtn) {
    let currentIndex = 0;
    const slideCount = slides.length;
    let autoplayInterval = null;

    const updateCarousel = (index) => {
      currentIndex = (index + slideCount) % slideCount;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;

      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
        dot.setAttribute(
          "aria-selected",
          i === currentIndex ? "true" : "false",
        );
      });

      // Update aria-live for screen readers
      slides.forEach((slide, i) => {
        slide.setAttribute(
          "aria-hidden",
          i !== currentIndex ? "true" : "false",
        );
      });
    };

    const startAutoplay = () => {
      autoplayInterval = setInterval(() => {
        updateCarousel(currentIndex + 1);
      }, 5000);
    };

    const resetAutoplay = () => {
      clearInterval(autoplayInterval);
      startAutoplay();
    };

    nextBtn.addEventListener("click", () => {
      updateCarousel(currentIndex + 1);
      resetAutoplay();
    });

    prevBtn.addEventListener("click", () => {
      updateCarousel(currentIndex - 1);
      resetAutoplay();
    });

    // Dot navigation
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        updateCarousel(parseInt(dot.dataset.index));
        resetAutoplay();
      });
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    slider.parentElement.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    slider.parentElement.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
          updateCarousel(diff > 0 ? currentIndex + 1 : currentIndex - 1);
          resetAutoplay();
        }
      },
      { passive: true },
    );

    // Initialize
    updateCarousel(0);
    startAutoplay();

    // Pause autoplay on hover
    const carouselEl = document.querySelector(".carousel");
    carouselEl.addEventListener("mouseenter", () =>
      clearInterval(autoplayInterval),
    );
    carouselEl.addEventListener("mouseleave", startAutoplay);

    // ---- Testimonial Modal ----
    const tModal = document.getElementById("testimonial-modal");
    const tModalText = document.getElementById("modal-text");
    const tModalAuthorInfo = document.getElementById("modal-author-info");
    const tCloseBtn = document.getElementById("modal-close-btn");

    const openTModal = (testimonialId) => {
      const testimonial = testimonials[testimonialId];
      if (!testimonial) return;
      tModalText.textContent = testimonial.quote;
      tModalAuthorInfo.innerHTML = `
        <p><strong>${testimonial.author}</strong></p>
        <p>${testimonial.title}</p>
        <p>${testimonial.date}</p>
      `;
      openModal(tModal);
    };

    // Open via slide click or Read More button
    slides.forEach((slide) => {
      slide.addEventListener("click", (e) => {
        // Don't open modal if clicking the Read More button (it handles its own click)
        if (e.target.classList.contains("read-more-link")) {
          openTModal(parseInt(slide.dataset.testimonialId));
          return;
        }
        openTModal(parseInt(slide.dataset.testimonialId));
      });

      // Keyboard accessibility
      slide.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openTModal(parseInt(slide.dataset.testimonialId));
        }
      });
    });

    tCloseBtn.addEventListener("click", () => closeModal(tModal));
    tModal.addEventListener("click", (e) => {
      if (e.target === tModal) closeModal(tModal);
    });

    // ---- Project Modal ----
    const projectCards = document.querySelectorAll(".project-card");
    const pModal = document.getElementById("project-modal");
    const pCloseBtn = document.getElementById("project-modal-close-btn");
    const pTitle = document.getElementById("project-modal-title");
    const pDescription = document.getElementById("project-modal-description");
    const pTags = document.getElementById("project-modal-tags");
    const pGithubBtn = document.getElementById("project-github-btn");
    const pLiveDemoBtn = document.getElementById("project-live-demo-btn");

    const openPModal = (projectId) => {
      const project = projects.find((p) => p.id === parseInt(projectId));
      if (!project) return;

      pTitle.textContent = project.title;
      pDescription.textContent = project.description;
      pTags.innerHTML = project.skills
        .map((skill) => `<div class="skill major-skill">${skill}</div>`)
        .join("");

      pGithubBtn.href = project.githubUrl;
      pGithubBtn.setAttribute(
        "aria-label",
        `View ${project.title} source code on GitHub (opens in new tab)`,
      );

      if (project.liveDemoUrl) {
        pLiveDemoBtn.href = project.liveDemoUrl;
        pLiveDemoBtn.style.display = "inline-flex";
        pLiveDemoBtn.setAttribute(
          "aria-label",
          `View live demo of ${project.title} (opens in new tab)`,
        );
      } else {
        pLiveDemoBtn.style.display = "none";
      }

      openModal(pModal);
    };

    projectCards.forEach((card) => {
      card.addEventListener("click", () => {
        openPModal(card.dataset.projectId);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openPModal(card.dataset.projectId);
        }
      });
    });

    pCloseBtn.addEventListener("click", () => closeModal(pModal));
    pModal.addEventListener("click", (e) => {
      if (e.target === pModal) closeModal(pModal);
    });

    // Global Escape key
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (pModal.classList.contains("show")) closeModal(pModal);
        if (tModal.classList.contains("show")) closeModal(tModal);
      }
    });
  }
});
