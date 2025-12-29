import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

let swiperInstance = null;
let isLightboxTransitioning = false;


document.addEventListener("DOMContentLoaded", () => {
  const swiperContainer = document.querySelector(".SwiperProject");

  if (!swiperContainer) return;

  // Destruir instancia previa de forma segura
  if (swiperInstance && typeof swiperInstance.destroy === "function") {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }

  swiperInstance = new Swiper(swiperContainer, {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        allowTouchMove: true,
      },
    },
  });

  const handleResize = () => {
    const nextBtn = document.querySelector(".custom-next");
    const prevBtn = document.querySelector(".custom-prev");
    const pagination = document.querySelector(".swiper-pagination");

    if (window.innerWidth >= 1024) {
      nextBtn && (nextBtn.style.display = "none");
      prevBtn && (prevBtn.style.display = "none");
      pagination && (pagination.style.display = "block");
    } else {
      nextBtn && (nextBtn.style.display = "flex");
      prevBtn && (prevBtn.style.display = "flex");
      pagination && (pagination.style.display = "none");
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
});


// Intersection Observer para animaciones
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -30px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      const delay = element.getAttribute("data-delay") || 0;

      setTimeout(() => {
        element.classList.add("visible");
      }, parseInt(String(delay)));

      observer.unobserve(element);
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".fade-in-up, .fade-in-left, .fade-in-right, .slide-in-up, .bounce-in, .zoom-in, .rotate-in"
  );
  animatedElements.forEach((el) => observer.observe(el));
});

// Animación flotante para shapes
document.addEventListener("DOMContentLoaded", () => {
  const shape = document.querySelector(".shape");
  if (shape) {
    const shapeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("start-floating");
          shapeObserver.unobserve(entry.target);
        }
      });
    });
    shapeObserver.observe(shape);
  }
});

// Cargar datos de proyectos
let projectsData = {};
try {
  const projectsScript = document.getElementById("projects-data");
  if (projectsScript) {
    projectsData = JSON.parse(projectsScript.textContent);
    
  }
} catch (error) {
  console.error("Error loading projects data:", error);
}

// Efectos hover para cards
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".card-wrapper");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      if (card instanceof HTMLElement) {
        card.style.transform = "translateY(-10px) scale(1.02)";
      }

      const projectImage = card.querySelector("img");
      if (projectImage instanceof HTMLElement) {
        projectImage.style.transform = "scale(1.05)";
      }
    });

    card.addEventListener("mouseleave", () => {
      if (card instanceof HTMLElement) {
        card.style.transform = "translateY(0) scale(1)";
      }

      const projectImage = card.querySelector("img");
      if (projectImage instanceof HTMLElement) {
        projectImage.style.transform = "scale(1)";
      }
    });
  });
});

// Variables globales para el lightbox
let currentLightboxImages = [];
let currentImageIndex = 0;

// Inicialización
document.addEventListener("DOMContentLoaded", function () {
  initializeModalEvents();
  initializeLightboxEvents();
  addSmoothScrolling();
  initializeLazyLoading();
  initializeScrollAnimations();
});

// *** FUNCIÓN PRINCIPAL - Abrir modal del proyecto ***
function openModal(projectId) {
  

  const project = projectsData[projectId];
  if (!project) {
    console.error("Project not found:", projectId);
    return;
  }

  const modal = document.getElementById("projectModal");
  if (!modal) {
    console.error("Modal element not found");
    return;
  }

  // Rellenar información del modal
  const modalClient = document.getElementById("modalClient");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalLocation = document.getElementById("modalLocation");
  const modalDuration = document.getElementById("modalDuration");
  const modalType = document.getElementById("modalType");
  const modalPersonnel = document.getElementById("modalPersonnel");

  if (modalClient) modalClient.textContent = project.client || "";
  if (modalTitle) modalTitle.textContent = project.title || "";
  if (modalDescription) modalDescription.textContent = project.description || "";
  if (modalLocation) modalLocation.textContent = project.location || "";
  if (modalDuration) modalDuration.textContent = project.duration || "";
  if (modalType) modalType.textContent = project.type || "";
  if (modalPersonnel) modalPersonnel.textContent = project.personnel || "";

  // Rellenar tags
  const tagsContainer = document.getElementById("modalTags");
  if (tagsContainer) {
    tagsContainer.innerHTML = "";
    if (project.tags && Array.isArray(project.tags)) {
      project.tags.forEach((tag) => {
        const tagElement = document.createElement("span");
        tagElement.className = "modal-tag";
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
      });
    }
  }

 // *** FUNCIÓN CLAVE - Rellenar galería con imágenes y videos ***
const galleryContainer = document.getElementById("modalGallery");
if (galleryContainer) {
  galleryContainer.innerHTML = "";

  if (project.media && Array.isArray(project.media)) {

    // 👉 Solo imágenes para el lightbox
    const imageSources = project.media
      .filter(item => item.type === "image")
      .map(item => item.src);
    
      let imageCounter = 0;
    project.media.forEach((item) => {

      // 🖼️ IMAGEN
      if (item.type === "image") {
        const imgElement = document.createElement("img");
        imgElement.src = item.src;
        imgElement.alt = item.alt || `${project.title} - Imagen`;
        imgElement.className = "gallery-image";
        imgElement.loading = "lazy";

        const imageIndex = imageSources.indexOf(item.src);

        imgElement.addEventListener("click", () => {
          openLightbox(imageSources, imageIndex);
        });

        galleryContainer.appendChild(imgElement);
        imageCounter++;
      }

      // 🎬 VIDEO
 if (item.type === "video") {
  // Contenedor del video
  const videoWrapper = document.createElement("div");
  videoWrapper.className = "video-wrapper";

  const videoElement = document.createElement("video");
  videoElement.className = "gallery-video";

  // 🔒 Sin controles nativos
  videoElement.controls = false;
  videoElement.setAttribute(
    "controlsList",
    "nodownload nofullscreen noremoteplayback"
  );
  videoElement.setAttribute("disablePictureInPicture", "");
  videoElement.playsInline = true;

  if (item.poster) {
    videoElement.poster = item.poster;
  }

  const source = document.createElement("source");
  source.src = item.src;
  source.type = "video/mp4";
  videoElement.appendChild(source);

  // 🎬 Botón Play
  const playButton = document.createElement("button");
  playButton.className = "video-play-btn";
  playButton.innerHTML = "▶";

  // 👉 Play / Pause exclusivo
  const togglePlay = () => {
    const allVideos = document.querySelectorAll(".gallery-video");

    allVideos.forEach((vid) => {
      if (vid !== videoElement) {
        vid.pause();
        vid.currentTime = 0;

        const btn = vid
          .closest(".video-wrapper")
          ?.querySelector(".video-play-btn");
        if (btn) btn.classList.remove("hidden");
      }
    });

    if (videoElement.paused) {
      videoElement.play();
      playButton.classList.add("hidden");
    } else {
      videoElement.pause();
      playButton.classList.remove("hidden");
    }
  };

  playButton.addEventListener("click", togglePlay);
  videoElement.addEventListener("click", togglePlay);

  // Eventos nativos
  videoElement.addEventListener("pause", () => {
    playButton.classList.remove("hidden");
  });

  videoElement.addEventListener("play", () => {
    playButton.classList.add("hidden");
  });

  videoWrapper.appendChild(videoElement);
  videoWrapper.appendChild(playButton);
  galleryContainer.appendChild(videoWrapper);
  // ⛶ Botón expandir
const expandButton = document.createElement("button");
expandButton.className = "video-expand-btn";
expandButton.innerHTML = "⛶";

expandButton.addEventListener("click", (e) => {
  e.stopPropagation();
  videoWrapper.classList.toggle("expanded");
});

// Agregar botón al wrapper
videoWrapper.appendChild(expandButton);

}


    });
  }
}


  // Mostrar modal
  modal.classList.add("active");
  document.body.classList.add("modal-open");
  
  // Mejora de accesibilidad
  modal.setAttribute("aria-hidden", "false");
  modal.focus();
}

// *** FUNCIÓN - Cerrar modal ***
function closeModal() {
  const modal = document.getElementById("projectModal");

  // ⏸️ Detener TODOS los videos del modal
  modal?.querySelectorAll("video").forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });

  if (modal) {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
    modal.setAttribute("aria-hidden", "true");
  }
}


// *** FUNCIÓN PRINCIPAL - Abrir lightbox ***
function openLightbox(images, startIndex = 0) {
 
 
  currentLightboxImages = images;
  currentImageIndex = startIndex;
  
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");

  if (!lightbox || !lightboxImage) {
    console.error("Lightbox elements not found");
    return;
  }

  // Configurar imagen inicial
  lightboxImage.src = images[startIndex];
  lightboxImage.alt = `Imagen ${startIndex + 1} de ${images.length}`;
  
  // Mostrar lightbox
  lightbox.classList.add("active");
  document.body.classList.add("lightbox-open");
  
  // Mejora de accesibilidad
  lightbox.setAttribute("aria-hidden", "false");
  lightbox.focus();
  
  
}

// *** FUNCIÓN - Cerrar lightbox ***
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
    document.body.classList.remove("lightbox-open");
    lightbox.setAttribute("aria-hidden", "true");
  }
}

function changeLightboxImage(direction) {
  if (isLightboxTransitioning) {
    
    return;
  }

  const total = currentLightboxImages.length;
  if (total <= 1) return;

  isLightboxTransitioning = true;

  const prevIndex = currentImageIndex;

  currentImageIndex =
    (currentImageIndex + direction + total) % total;



  const lightboxImage = document.getElementById("lightboxImage");
  if (!lightboxImage) {
    isLightboxTransitioning = false;
    return;
  }

  const newSrc = currentLightboxImages[currentImageIndex];

  lightboxImage.style.opacity = "0";

  setTimeout(() => {
    lightboxImage.src = newSrc;
    lightboxImage.alt = `Imagen ${currentImageIndex + 1} de ${total}`;
    lightboxImage.style.opacity = "1";

    // 🔓 liberar lock
    isLightboxTransitioning = false;
  }, 200);
}




// *** INICIALIZAR EVENTOS DEL MODAL ***
function initializeModalEvents() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  // Cerrar modal al hacer clic fuera del contenido
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Prevenir propagación de clicks dentro del contenido del modal
  const modalContent = modal.querySelector(".modal-content");
  if (modalContent) {
    modalContent.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  // Botón de cerrar modal
  const closeButton = document.querySelector(".modal-close");
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }
}


function initializeLightboxEvents() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;


  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });


  const lightboxContent = lightbox.querySelector(".lightbox-content");
  if (lightboxContent) {
    lightboxContent.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  document.addEventListener("keydown", function (e) {
    const isLightboxActive = lightbox.classList.contains("active");
    const isModalActive = document.getElementById("projectModal")?.classList.contains("active");

    if (isLightboxActive) {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          changeLightboxImage(-1);
          break;
        case "ArrowRight":
          e.preventDefault();
          changeLightboxImage(1);
          break;
        case "Escape":
          e.preventDefault();
          closeLightbox();
          break;
      }
    } else if (isModalActive && e.key === "Escape") {
      e.preventDefault();
      closeModal();
    }
  });

  // Eventos para botones de navegación
  const prevButton = lightbox.querySelector(".lightbox-prev");
  const nextButton = lightbox.querySelector(".lightbox-next");
  const closeButton = lightbox.querySelector(".lightbox-close");

  if (prevButton) {
    prevButton.addEventListener("click", () => changeLightboxImage(-1));
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => changeLightboxImage(1));
  }

  if (closeButton) {
    closeButton.addEventListener("click", closeLightbox);
  }
}


function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

function initializeLazyLoading() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
            img.classList.remove("lazy");
          }
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".project-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
}


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".btn-open-modal").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const projectId = this.getAttribute("data-project-id");
      if (projectId) {
        openModal(projectId);
      } else {
        console.error("No se encontró el ID del proyecto");
      }
    });
  });
});


window.openModal = openModal;
window.closeModal = closeModal;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.changeLightboxImage = changeLightboxImage;