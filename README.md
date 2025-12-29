# Documentación ARO Ingeniería - Landing Page Corporativa

## Índice

1. Configuración Inicial
2. Estructura del Proyecto
3. Sistema Multiidioma
4. Gestión de Contenido
5. Secciones del Sitio
6. Gestión de Proyectos
7. Gestión de Productos
8. Sectores que Impulsamos
9. Diferenciales ARO Ingeniería
10. Sobre Nosotros
11. Aliados Estratégicos
12. Configuración de Redes Sociales
13. Configuración de Email y Formularios
14. Manejo de Imágenes
15. Desarrollo y Deployment

---

## Configuración Inicial

### Requisitos del Sistema

* Node.js 18 o superior
* npm o yarn
* Git

### Instalación del Proyecto

```bash
git clone [URL_DEL_REPOSITORIO]
cd aro-ingenieria
npm install
npm run dev
```

### Scripts Disponibles

```json
{
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview"
}
```

---

## Estructura del Proyecto

```
aro-ingenieria/
├── public/
│   └── assets/
│       ├── blog/
│       ├── icons/
│       ├── images/
│       ├── members/
│       └── projects/
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   ├── pages/
│   └── ui/
│       └── index.ts
├── astro.config.mjs
└── package.json
```

---

## Sistema Multiidioma

La web de **ARO Ingeniería** maneja español e inglés desde `src/ui/index.ts`.

```ts
export const languages = {
  es: "Español",
  en: "English",
};

export const labels = {
  es: {
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",
  },
};
```

Uso en componentes Astro:

```astro
<h1>{translateLabels("nav.home")}</h1>
```

---

## Gestión de Contenido

Todos los textos se administran desde `src/ui/index.ts`.

Convenciones por sección:

* nav.* → navegación
* hero.* → sección principal
* about.* → sobre ARO Ingeniería
* services.* → servicios
* projects.* → proyectos
* team.* → equipo
* reviews.* → clientes
* blog.* → blog
* footer.* → pie de página

---

## Secciones del Sitio

La landing page de **ARO Ingeniería** está estructurada en las siguientes secciones principales, visibles desde el menú de navegación:

* **Inicio**: Presentación general de la empresa y propuesta de valor.
* **Servicios**: Soluciones de ingeniería civil, automatización y ejecución de proyectos.
* **Proyectos**: Obras y desarrollos realizados por ARO Ingeniería.
* **Productos**: Sistemas y soluciones comercializadas (ej. portones automáticos, control de acceso).
* **Sectores**: Sectores económicos que ARO Ingeniería impulsa.
* **Diferenciales**: Ventajas competitivas de la empresa.
* **Sobre Nosotros**: Historia, enfoque y valores de ARO Ingeniería.
* **Aliados**: Empresas y marcas aliadas.

⚠️ El proyecto **no incluye sistema de blogs** actualmente.

---

title: "Título del artículo"
description: "Descripción SEO"
author: "ARO Ingeniería"
date: 2025-01-01T00:00:00.000Z
image: "/assets/blog/articulo-aro.webp"
tags: ["ingeniería", "construcción", "proyectos"]
lang: "es"
----------

````

---

## Gestión de Proyectos

Los proyectos representan los trabajos ejecutados por **ARO Ingeniería** y se gestionan de forma estática desde el componente correspondiente.

Archivo principal:

`src/components/Projects.astro`

Cada proyecto debe reflejar una obra real o representativa de la empresa.

Archivo: `src/components/Projects.astro`

```js
const projects = [
  {
    title: translateLabels("project.aro-portones.title"),
    description: translateLabels("project.aro-portones.description"),
    image: "/assets/projects/portones-inteligentes.webp",
    imageAlt: translateLabels("project.aro-portones.alt"),
  },
];
````

Traducciones:

```ts
"project.aro-portones.title": "Sistemas Inteligentes para Portones",
"project.aro-portones.description": "Automatización y control de accesos para proyectos residenciales e industriales.",
"project.aro-portones.alt": "Portón automatizado instalado por ARO Ingeniería",
```

---

## Gestión de Miembros del Equipo

Archivo: `src/components/Members.astro`

```js
const members = [
  {
    image: "/assets/members/ingeniero-aro.webp",
    imageAlt: translateLabels("team.aro.ceo.alt"),
    name: "Equipo ARO Ingeniería",
    occupation: translateLabels("team.aro.ceo.role"),
  },
];
```

---

## Gestión de Testimonios

Archivo: `src/components/Reviews.astro`

```js
const reviews = [
  {
    image: "/assets/images/reviews-aro-cliente.webp",
    imageAlt: translateLabels("reviews.aro.client.alt"),
    name: "Cliente Corporativo",
    occupation: "Proyecto Industrial",
    review: translateLabels("reviews.aro.client.text"),
  },
];
```

---

## Redes Sociales

Archivo: `src/components/footer.js`

```js
redirectTo("https://www.facebook.com/aroingenieria");
redirectTo("https://www.instagram.com/aroingenieria");
redirectTo("https://www.linkedin.com/company/aro-ingenieria");
```

---

## Email y Formularios

Archivo `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@aroingenieria.com
SMTP_PASS=contraseña_aplicacion
RECIPIENT_EMAIL=info@aroingenieria.com
```

---

## Manejo de Imágenes

### Formatos

* WebP (principal)
* SVG (iconos)

### Dimensiones Recomendadas

* Hero: 1920x1080
* Proyectos: 600x400
* Blog: 1200x630
* Equipo: 400x400

---

## Deployment

```bash
npm run build
npm run preview
```

El proyecto puede desplegarse en **Vercel**, **Netlify** o **hosting propio** compatible con Astro.

---

© ARO Ingeniería Civil – Documentación Técnica del Proyecto
