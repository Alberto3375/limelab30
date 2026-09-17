/* ============================================================
   HEADER / PROGRESS BAR / BACK TO TOP
============================================================ */
const header = document.getElementById("header");
const progressBar = document.getElementById("progressBar");
const backTop = document.getElementById("backTop");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const cursorGlow = document.querySelector(".cursor-glow");

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;

  progressBar.style.width = `${height > 0 ? (scrollTop / height) * 100 : 0}%`;

  header.classList.toggle("scrolled", scrollTop > 20);
  backTop.classList.toggle("visible", scrollTop > 600);
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

/* ============================================================
   MOBILE MENU
============================================================ */
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  document.body.classList.toggle("menu-open");
  menuToggle.innerHTML = navLinks.classList.contains("open")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

/* ============================================================
   BACK TO TOP
============================================================ */
backTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

/* ============================================================
   REVEAL ON SCROLL
============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ============================================================
   CURSOR GLOW
============================================================ */
if (window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });
} else {
  cursorGlow.style.display = "none";
}

/* ============================================================
   SERVICES TABS
============================================================ */
const tabs = document.querySelectorAll(".service-tabs .tab");
const panels = document.querySelectorAll(".service-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    panels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === target);
    });

    const activePanel = document.querySelector(
      `.service-panel[data-panel="${target}"]`
    );
    if (activePanel) {
      activePanel.querySelectorAll(".service-card").forEach((card, i) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";
        setTimeout(() => {
          card.style.transition = ".45s ease";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 60 * i);
      });
    }
  });
});

/* ============================================================
   PORTFOLIO FILTERS
============================================================ */
const filters = document.querySelectorAll(".portfolio-filters .filter");
const projects = document.querySelectorAll(".portfolio-grid .project");
const portfolioGrid = document.getElementById("portfolioGrid");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;

    filters.forEach((f) => f.classList.remove("active"));
    filter.classList.add("active");

    const oldEmpty = portfolioGrid.querySelector(".portfolio-empty");
    if (oldEmpty) oldEmpty.remove();

    let visibleCount = 0;

    projects.forEach((project, i) => {
      const match = category === "all" || project.dataset.category === category;

      if (match) {
        visibleCount++;
        project.classList.remove("hidden");
        project.style.display = "";
        project.style.opacity = "0";
        project.style.transform = "translateY(15px) scale(.98)";
        setTimeout(() => {
          project.style.transition = ".4s ease";
          project.style.opacity = "1";
          project.style.transform = "translateY(0) scale(1)";
        }, 40 * i);
      } else {
        project.style.display = "none";
      }
    });

    if (visibleCount === 0) {
      const empty = document.createElement("div");
      empty.className = "portfolio-empty";
      empty.textContent =
        document.documentElement.lang === "en"
          ? "No projects in this category yet. Coming soon!"
          : "Aún no hay proyectos en esta categoría. ¡Pronto subiremos más!";
      portfolioGrid.appendChild(empty);
    }
  });
});

/* ============================================================
   GALLERY MODAL
============================================================ */
const galleryModal = document.getElementById("galleryModal");
const galleryMedia = document.getElementById("galleryMedia");
const galleryCaption = document.getElementById("galleryCaption");
const galleryClose = document.getElementById("galleryClose");

function openGalleryModal(project) {
  const type = project.dataset.type;
  const src = project.dataset.src;
  const poster = project.dataset.poster || "";
  const title = project.querySelector("h3")?.textContent || "";
  const description = project.querySelector(".project-info p")?.textContent || "";

  galleryMedia.innerHTML = "";

  if (type === "video") {
    const video = document.createElement("video");
    video.src = src;
    if (poster) video.poster = poster;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    galleryMedia.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = src;
    img.alt = title;
    galleryMedia.appendChild(img);
  }

  galleryCaption.innerHTML = `<strong>${title}</strong> — ${description}`;

  galleryModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeGalleryModal() {
  galleryModal.classList.remove("open");
  document.body.style.overflow = "";
  galleryMedia.innerHTML = "";
}

projects.forEach((project) => {
  project.addEventListener("click", () => openGalleryModal(project));
});

galleryClose.addEventListener("click", closeGalleryModal);
galleryModal.addEventListener("click", (e) => {
  if (e.target === galleryModal) closeGalleryModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && galleryModal.classList.contains("open")) {
    closeGalleryModal();
  }
});

/* ============================================================
   CONTACT FORM → WHATSAPP
============================================================ */
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const lang = document.documentElement.lang || "es";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const textES = `Hola LIMELAB 👋

Mi nombre es: ${name}
Mi correo: ${email}
Me interesa: ${service}

Mi proyecto:
${message}

Me gustaría conocer más información y una cotización.`;

  const textEN = `Hi LIMELAB 👋

My name is: ${name}
My email: ${email}
I'm interested in: ${service}

My project:
${message}

I'd like more information and a quote.`;

  const text = lang === "en" ? textEN : textES;

  window.open(
    `https://wa.me/523324464894?text=${encodeURIComponent(text)}`,
    "_blank"
  );
});

/* ============================================================
   SMOOTH SCROLL PARA ANCLAS
============================================================ */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#" || href.length < 2) return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
