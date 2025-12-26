// 1. LÓGICA DE ANIMACIÓN (IntersectionObserver)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  { threshold: 0.3 }
);

const textContainer = document.querySelector(".working-text-container");
if (textContainer) {
  observer.observe(textContainer);
}

// 2. LÓGICA DE DESCARGA DINÁMICA (ES / EN)
const downloadBtn = document.getElementById("workButton");

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    // Detectamos el idioma desde la URL (ej: /es/ o /en/)
    const isEnglish = window.location.pathname.includes("/en");
    
    // Definimos la ruta y el nombre del archivo según el idioma
    const pdfPath = isEnglish 
      ? "/assets/portafolio/en/Professional_Portfolio_EN.pdf" 
      : "/assets/portafolio/es/Portafolio_Profesional_ES.pdf";
      
    const fileName = isEnglish 
      ? "Professional_Portfolio_EN.pdf" 
      : "Portafolio_Profesional_ES.pdf";

    // Ejecutamos la descarga
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}