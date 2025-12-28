import type { projectsData } from "../types/videoServices";

export const getProjectsData = (
  translateLabels: ReturnType<typeof import("../i18n/util")["useTranslations"]>
): projectsData => {
  return {
    project1: {
      client: translateLabels("New-project-name"),
      title: translateLabels("New-project1-title"),
      description: translateLabels("New-project1-description"),
      
      media: [
        {
          type: "image",
          src: "/assets/videoServices/services1/motor1.webp",
          alt: translateLabels("New-project1-image1-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services1/motor2.webp",
          alt: translateLabels("New-project1-image2-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services1/motor3.webp",
          alt: translateLabels("New-project1-image3-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services1/motor4.webp",
          alt: translateLabels("New-project1-image4-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services1/motor5.webp",
          alt: translateLabels("New-project1-image5-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services1/motor6.webp",
          alt: translateLabels("New-project1-image6-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services1/motor7.webp",
          alt: translateLabels("New-project1-image7-alt"),
        },
        {
          type: "video",
          src: "/assets/videoServices/services1/motor-puertas.mp4",
          alt: translateLabels("New-project1-video1-alt"),
          poster: "/assets/videoServices/services1/poster-motor.webp",

        },
      ],
    },
    project2: {
      client: translateLabels("New-project-name"),
      title: translateLabels("New-project2-title"),
      description: translateLabels("New-project2-description"),
      
      media: [
        {
          type: "image",
          src: "/assets/videoServices/services2/seguridad1.webp",
          alt: translateLabels("New-project2-image1-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services2/seguridad2.webp",
          alt: translateLabels("New-project2-image2-alt"),
        },
        
      ],
    },
    project3: {
      client: translateLabels("New-project-name"),
      title: translateLabels("New-project3-title"),
      description: translateLabels("New-project3-description"),
    
      media: [
        {
          type: "image",
          src: "/assets/videoServices/services3/rampa1.webp",
          alt: translateLabels("New-project3-image1-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services3/rampa2.webp",
          alt: translateLabels("New-project3-image2-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services3/rampa-neveladora1.webp",
          alt: translateLabels("New-project3-image3-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services3/rampa-neveladora2.webp",
          alt: translateLabels("New-project3-image4-alt"),
        },
        {
          type: "video",
          src: "/assets/videoServices/services3/rampa.niveladora.mp4",
          alt: translateLabels("New-project3-video1-alt"),
          poster: "/assets/videoServices/services3/teacer-rampa-niveladora1.webp",
        },
        {
          type: "video",
          src: "/assets/videoServices/services3/nivelador-hidraulico.mp4",  
          alt: translateLabels("New-project3-video2-alt"),
          poster: "/assets/videoServices/services3/teacer-rampa-niveladora2.webp",
        },
      ],
    },
    project4: {
      client: translateLabels("New-project-name"),
      title: translateLabels("New-project4-title"),
      description: translateLabels("New-project4-description"),
   
      media: [
        
        {
          type: "image",
          src: "/assets/videoServices/services4/puertas-metalica1.webp",
          alt: translateLabels("New-project4-image1-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services4/puertas-metalica2.webp",
          alt: translateLabels("New-project4-image2-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services4/estela-metalica.webp",
          alt: translateLabels("New-project4-image3-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services4/estela-metalica2.webp",
          alt: translateLabels("New-project4-image4-alt"),
        },
        {
          type: "video",
          src: "/assets/videoServices/services4/cortina-enrollable.mp4",
          alt: translateLabels("New-project4-video2-alt"),
          poster: "/assets/videoServices/services4/teacer-puertas-rapidas2.webp",
        },
        {
          type: "video",
          src: "/assets/videoServices/services4/puertas-rapida.mp4",
          alt: translateLabels("New-project4-video1-alt"),
          poster: "/assets/videoServices/services4/teacer-puertas-rapidas.webp",
        },
        {
          type: "video",
          src: "/assets/videoServices/services4/abrigo-retractil.mp4",
          alt: translateLabels("New-project4-video3-alt"),
          poster: "/assets/videoServices/services4/teacer-abrigo-retractil.webp",
        },
        {
          type: "video",
          src: "/assets/videoServices/services4/abrigo-inflable.mp4",
          alt: translateLabels("New-project4-video4-alt"),
          poster: "/assets/videoServices/services4/teacer-abrigo-inflable.webp",
        }
      ],
    },
    project5: {
      client: translateLabels("New-project-name"),
      title: translateLabels("New-project5-title"),
      description: translateLabels("New-project5-description"),

      media: [
        {
          type: "image",
          src: "/assets/videoServices/services5/mezzaminer1.webp",
          alt: translateLabels("New-project5-image1-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services5/mezzaminer2.webp",
          alt: translateLabels("New-project5-image2-alt"),
        },
        {
          type: "video",
          src: "/assets/videoServices/services5/estructuras-metalicas.mp4",
          alt: translateLabels("New-project5-video1-alt"),
          poster: "/assets/videoServices/services5/teacer-estructura.webp",
        }
      ],
    },
    project6: {
      client: translateLabels("New-project-name"),
      title: translateLabels("New-project6-title"),
      description: translateLabels("New-project6-description"),

      media: [
        {
          type: "image",
          src: "/assets/videoServices/services6/hvac1.webp",
          alt: translateLabels("New-project6-image1-alt"),
        },
        {
          type: "image",
          src: "/assets/videoServices/services6/hvac2.webp",
          alt: translateLabels("New-project6-image2-alt"),
        },
        {
          type: "video",
          src: "/assets/videoServices/services6/conducto-ventilacion.mp4",
          alt: translateLabels("New-project6-video1-alt"),
          poster: "/assets/videoServices/services6/teacer-conducto-ventilacion.webp",
        }
      ],
    },

  };
};