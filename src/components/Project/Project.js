// Animación de entrada del título background
const titleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

const titleBackground = document.querySelector(".project-title-background");
if (titleBackground) {
  titleObserver.observe(titleBackground);
}

// Animación de entrada de la sección
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

const textContainer = document.querySelector(".project-text-container");
if (textContainer) {
  observer.observe(textContainer);
}

// Funcionalidad del Modal
const modal = document.getElementById("projectModal2");
const openBtn = document.getElementById("openModalBtn2");
const closeBtn = document.getElementById("closeModalBtn2");

// Abrir modal
if (openBtn) {
  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevenir scroll del body
  });
}

// Cerrar modal con botón X
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Restaurar scroll
  });
}

// Cerrar modal haciendo clic fuera del contenido
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Cerrar modal con tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Prevenir cierre al hacer clic dentro del modal
const modalContainer = document.querySelector(".modal-container");
if (modalContainer) {
  modalContainer.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}