import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* ==========================
   SWIPER
========================== */
document.addEventListener("DOMContentLoaded", () => {
  const swiperContainer = document.querySelector(".SwiperProject");
  if (!swiperContainer) return;

  if (swiperContainer.swiper) {
    swiperContainer.swiper.destroy(true, true);
  }

  const swiper = new Swiper(".SwiperProject", {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 20,
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

  swiperContainer.swiper = swiper;

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

/* ==========================
   ANIMACIONES EN SCROLL
========================== */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const delay = Number(entry.target.dataset.delay || 0);
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, delay);

      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
);

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      ".fade-in-up, .fade-in-left, .fade-in-right, .slide-in-up, .bounce-in, .zoom-in, .rotate-in"
    )
    .forEach((el) => observer.observe(el));
});

/* ==========================
   SHAPE FLOTANTE
========================== */
document.addEventListener("DOMContentLoaded", () => {
  const shape = document.querySelector(".shape");
  if (!shape) return;

  const shapeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("start-floating");
        shapeObserver.unobserve(entry.target);
      }
    });
  });

  shapeObserver.observe(shape);
});

/* ==========================
   HOVER CARDS
========================== */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card-wrapper").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)";
      const img = card.querySelector("img");
      img && (img.style.transform = "scale(1.05)");
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
      const img = card.querySelector("img");
      img && (img.style.transform = "scale(1)");
    });
  });
});
