// This script manages the portfolio's dynamic features, including the loading screen,
// a stat counter animation, theme toggling, a "show more" skills section,
// a testimonials carousel with a modal for full text, and scroll-based animations.

// --- Full testimonial data ---
const testimonials = [
  {
    quote:
      "Working with Dawood has been an excellent experience. He has a real talent for simplifying complex DevSecOps processes into clear, actionable steps that everyone can follow. His expertise in cloud and DevOps has often been my go-to resource, and what sets him apart is his patience and willingness to share knowledge. Dawood not only solves problems but also helps elevate the entire team’s skills.",
    author: "Umair Amjad",
    title: "Position: Software Engineer at TechCreator",
    date: "Date: November 26, 2024",
  },
  {
    quote:
      "Dawood's approach to building and maintaining reliable systems impressed us from the very beginning. He implemented a robust monitoring and alerting setup that gave us full visibility into our applications, resulting in improved performance and stability. Beyond his technical depth, he communicates clearly and works well with others, which makes collaboration easy. Dawood is a true professional we’d be more than happy to work with again.",
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

// --- Project Data for Modal ---
const projects = [
  {
    id: 0,
    title: "3-Tier App on K8s (Minikube)",
    description:
      "A fully containerized real-time chat app using Node.js, React, and MongoDB, deployed with Kubernetes. It showcases my skills in cloud-native deployment, DevOps workflows, Docker, Secrets, ConfigMaps, and persistent storage for scalable infrastructure.",
    skills: ["Nginx", "Docker", "DockerHub", "Kubernetes", "MiniKube"],
    githubUrl: "https://github.com/idavidkhan/3-tier-app-on-k8s-minikube",
    liveDemoUrl: null, // Set to a URL if you have a live demo
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

// --- 1. LOADER & INITIAL ANIMATIONS & SCROLL OBSERVER (AOS) ---
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  const counters = document.querySelectorAll(".stat-number");
  const aosElements = document.querySelectorAll("[data-aos]");

  // Fade out the loader after a short delay
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 700);

  // --- AOS: Animate on Scroll Intersection Observer ---
  const aosObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const delay = element.getAttribute("data-aos-delay") || 0;

          // Apply AOS animation after the specified delay
          setTimeout(() => {
            element.classList.add("aos-animate");
          }, delay);

          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.1 } // Start animation when 10% of the element is visible
  );

  // Observe all elements with the data-aos attribute
  aosElements.forEach((element) => {
    aosObserver.observe(element);
  });

  // Intersection Observer for Stats Counter Animation
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
      { threshold: 0.5 }
    );

    counters.forEach((counter) => counterObserver.observe(counter));
  }
});

// --- 2. STATS COUNTER ANIMATION ---
function animateCounter(element, target, duration = 1500) {
  let start = 0;
  const increment = target / (duration / 20);

  const update = () => {
    start += increment;
    if (start >= target) {
      element.textContent = formatShortNumber(target) + "+";
    } else {
      element.textContent = formatShortNumber(Math.floor(start));
      requestAnimationFrame(update);
    }
  };
  update();
}

function formatShortNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "k";
  } else {
    return num.toString();
  }
}

// --- 3. THEME (DARK/LIGHT MODE) TOGGLE ---
const themeToggleBtn = document.getElementById("mode-toggle");
const icon = document.getElementById("mode-icon");
const currentTheme = localStorage.getItem("theme");

// Apply the saved theme on page load
if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
} else {
  document.body.classList.remove("dark-mode");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

// Toggle theme on button click
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  let theme = "light";
  if (document.body.classList.contains("dark-mode")) {
    theme = "dark";
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
  localStorage.setItem("theme", theme);
});

// --- 4. "SHOW MORE" SKILLS TOGGLE ---
const wrapper = document.querySelector(".minor-skills-wrapper");
const showMoreBtn = document.querySelector(".show-more-btn");
const btnContainer = document.querySelector(".show-more-btn-container");
let isExpanded = false;

showMoreBtn.addEventListener("click", () => {
  wrapper.classList.toggle("expanded");
  isExpanded = !isExpanded;

  if (isExpanded) {
    // Show More
    showMoreBtn.textContent = "Show Less";
    btnContainer.classList.remove("contracting");
  } else {
    // Show Less
    showMoreBtn.textContent = "Show More";
    btnContainer.classList.add("contracting");
    // Remove the class after the wrapper transition is done (0.7s) to restore the slower transition for next "Show More"
    setTimeout(() => {
      btnContainer.classList.remove("contracting");
    }, 700);
  }
});

// --- 5. MODAL LOGIC (COMMON SETUP) ---
const lockBodyScroll = (lock) => {
  document.body.style.overflow = lock ? "hidden" : "auto";
};

// --- 6. TESTIMONIALS CAROUSEL & MODAL ---
document.addEventListener("DOMContentLoaded", () => {
  // Carousel Logic
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (slider && slides.length > 0 && prevBtn && nextBtn) {
    let currentIndex = 0;
    const slideCount = slides.length;
    const transitionDuration = 300; // Match CSS transition for modal content

    const updateCarousel = () => {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateCarousel();
    });

    // Testimonial Modal Logic
    const tModal = document.getElementById("testimonial-modal");
    const tModalContent = tModal.querySelector(".modal-content");
    const tModalText = document.getElementById("modal-text");
    const tModalAuthorInfo = document.getElementById("modal-author-info");
    const tCloseModalBtn = document.getElementById("modal-close-btn");

    const openTModal = (testimonialId) => {
      const testimonial = testimonials[testimonialId];
      if (testimonial) {
        tModalText.textContent = testimonial.quote;
        tModalAuthorInfo.innerHTML = `
                <p><strong>${testimonial.author}</strong></p>
                <p>${testimonial.title}</p>
                <p>${testimonial.date}</p>
              `;
        tModal.style.display = "block";
        // Ensure 'closing' class is removed before showing
        tModalContent.classList.remove("closing");
        // Use a timeout to ensure the browser registers the display:block before applying 'show'
        setTimeout(() => {
          tModal.classList.add("show");
        }, 10);
        lockBodyScroll(true);
      }
    };

    const closeTModal = () => {
      tModal.classList.remove("show"); // Trigger fade-out (opacity)
      tModalContent.classList.add("closing"); // Trigger zoom-out (scale)

      // Wait for the CSS transition to finish before hiding the modal entirely
      setTimeout(() => {
        tModal.style.display = "none";
        tModalContent.classList.remove("closing"); // Clean up
        lockBodyScroll(false);
      }, transitionDuration);
    };

    // Open modal on slide click
    slides.forEach((slide) => {
      slide.addEventListener("click", () => {
        const testimonialId = slide.getAttribute("data-testimonial-id");
        openTModal(testimonialId);
      });
    });

    // Close modal on button click
    tCloseModalBtn.addEventListener("click", closeTModal);

    // Close Testimonial modal when clicking outside
    window.addEventListener("click", (event) => {
      if (event.target === tModal) closeTModal();
    });

    // --- 7. PROJECT MODAL LOGIC (NEW) ---
    const projectCards = document.querySelectorAll(".project-card");
    const pModal = document.getElementById("project-modal");
    const pModalContent = pModal.querySelector(".modal-content");
    const pCloseBtn = document.getElementById("project-modal-close-btn");
    const pTitle = document.getElementById("project-modal-title");
    const pDescription = document.getElementById("project-modal-description");
    const pTags = document.getElementById("project-modal-tags");
    const pGithubBtn = document.getElementById("project-github-btn");
    const pLiveDemoBtn = document.getElementById("project-live-demo-btn");

    const openPModal = (projectId) => {
      const project = projects.find((p) => p.id === parseInt(projectId));

      if (project) {
        pTitle.textContent = project.title;
        pDescription.textContent = project.description;

        // Load Tags
        pTags.innerHTML = project.skills
          .map((skill) => `<div class="skill major-skill">${skill}</div>`)
          .join("");

        // Load Buttons
        pGithubBtn.href = project.githubUrl;

        if (project.liveDemoUrl) {
          pLiveDemoBtn.href = project.liveDemoUrl;
          pLiveDemoBtn.style.display = "inline-block";
        } else {
          pLiveDemoBtn.style.display = "none";
        }

        pModal.style.display = "block";
        pModalContent.classList.remove("closing");
        setTimeout(() => {
          pModal.classList.add("show");
        }, 10);
        lockBodyScroll(true);
      }
    };

    const closePModal = () => {
      pModal.classList.remove("show"); // Trigger fade-out (opacity)
      pModalContent.classList.add("closing"); // Trigger zoom-out (scale)

      // Wait for the CSS transition to finish before hiding the modal entirely
      setTimeout(() => {
        pModal.style.display = "none";
        pModalContent.classList.remove("closing"); // Clean up
        lockBodyScroll(false);
      }, transitionDuration);
    };

    // Open project modal on card click
    projectCards.forEach((card) => {
      card.addEventListener("click", () => {
        const projectId = card.getAttribute("data-project-id");
        openPModal(projectId);
      });
    });

    // Close project modal on button click
    pCloseBtn.addEventListener("click", closePModal);

    // Close project modal when clicking outside
    window.addEventListener("click", (event) => {
      if (event.target === pModal) closePModal();
    });

    // Close both modals when pressing the Escape key
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (pModal.classList.contains("show")) closePModal();
        if (tModal.classList.contains("show")) closeTModal();
      }
    });
  }
});
