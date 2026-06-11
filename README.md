# Tarjeta Digital Profesional

**Plataforma multi-tenant de tarjetas de presentación digitales.** Una sola aplicación React desplegada en Vercel que soporta múltiples clientes mediante rutas dinámicas. Agregar un nuevo cliente toma menos de 10 minutos y no requiere tocar el código.

---

## Demo

| Cliente | URL | Tema |
|---------|-----|------|
| Mario Marquez — Full Stack Developer | [`/mario`](https://tarjeta-digital-bspl.vercel.app/mario) | Tech (oscuro) |
| Electricista Carlos — Demo | [`/electricista-carlos`](https://tarjeta-digital-bspl.vercel.app/electricista-carlos) | Comercial (cálido) |

---

## ¿Cómo funciona?

```
URL visitada                  Archivo cargado
────────────────────────      ──────────────────────────────
/mario                  →     src/clients/mario.json
/dra-sofia-garcia       →     src/clients/dra-sofia-garcia.json
/barberia-el-corte      →     src/clients/barberia-el-corte.json
```

Cada JSON define **todo** el contenido, tema visual, layout y SEO de esa tarjeta. Los componentes nunca se modifican.

---

## Arquitectura

```
┌─────────────────────────────────────────────────────────────────┐
│                    React Router v6                              │
│                    /:slug  →  ClientCard                        │
└──────────────────────────┬──────────────────────────────────────┘
                           │
              useClientConfig(slug)
                           │
              import.meta.glob('../clients/*.json')
              [lazy load solo el JSON del cliente ~2KB]
                           │
              ┌────────────▼────────────┐
              │      ClientConfig       │
              │  theme / layout / data  │
              └────┬──────────┬────────┘
                   │          │
          useTheme()    layouts[layout]
                   │          │
         CSS vars ─┘          │
         en container         ▼
                    ┌─────────────────┐
                    │  TechLayout     │
                    │  SaludLayout    │  → Secciones relevantes
                    │  BellezaLayout  │    al sector
                    │  ...            │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │   Componentes   │
                    │  HeroSection    │
                    │  ServicesSection│
                    │  GallerySection │
                    │  ...            │
                    └─────────────────┘
```

### Principio de aislamiento

Cada cliente es un **chunk independiente** en el bundle de producción. Al visitar `/mario`, solo se descarga `mario.js` (~2KB). Al visitar `/dra-sofia`, solo se descarga `dra-sofia.js`. Los demás clientes nunca se cargan.

---

## Stack tecnológico

| Tecnología | Versión | Rol |
|------------|---------|-----|
| React | 18.3 | UI framework |
| Vite | 5.4 | Build tool + `import.meta.glob` |
| TypeScript | 5.5 | Tipado de configuraciones |
| Tailwind CSS | 3.4 | Estilos con CSS custom properties |
| React Router | 6.26 | Enrutamiento `/:slug` |
| Framer Motion | 11.3 | Animaciones hero + stagger |
| React Icons | 5.3 | Íconos de redes sociales y UI |

**Sin backend. Sin base de datos. Sin autenticación.** Costo mensual: $0.

---

## Estructura del proyecto

```
tarjeta-digital/
│
├── src/
│   │
│   ├── clients/                    ← UN ARCHIVO POR CLIENTE
│   │   ├── _template.json          ← Plantilla documentada
│   │   ├── mario.json
│   │   └── electricista-carlos.json
│   │
│   ├── config/
│   │   └── types.ts                ← Interfaces TypeScript de ClientConfig
│   │
│   ├── themes/
│   │   └── index.ts                ← 5 temas (CSS custom properties)
│   │
│   ├── hooks/
│   │   ├── useClientConfig.ts      ← import.meta.glob + lazy load
│   │   ├── useTheme.ts             ← Retorna CSS vars del tema
│   │   └── useSEO.ts               ← Actualiza <head> dinámicamente
│   │
│   ├── utils/
│   │   ├── vcf.ts                  ← Genera y descarga archivo .vcf
│   │   └── share.ts                ← Web Share API + fallback clipboard
│   │
│   ├── components/
│   │   ├── HeroSection.tsx         ← Avatar, nombre, bio, acciones
│   │   ├── ContactButtons.tsx      ← Barra sticky inferior (CTA)
│   │   ├── SocialLinks.tsx         ← Íconos de redes sociales
│   │   ├── ServicesSection.tsx     ← Grid de servicios con Framer Motion
│   │   ├── GallerySection.tsx      ← Galería masonry + lightbox
│   │   ├── PortfolioSection.tsx    ← Cards de proyectos
│   │   ├── TestimonialsSection.tsx ← Scroll horizontal con estrellas
│   │   └── LoadingScreen.tsx       ← Spinner de carga
│   │
│   ├── layouts/
│   │   ├── TechLayout.tsx          ← Hero → Servicios → Portafolio → Testimonios
│   │   ├── ProfesionalLayout.tsx   ← Hero → Especialidades → Servicios → Testimonios
│   │   ├── ComercialLayout.tsx     ← Hero → Mapa → Servicios → Galería → Testimonios
│   │   ├── SaludLayout.tsx         ← Hero → Credenciales → Servicios → Horario → Testimonios
│   │   └── BellezaLayout.tsx       ← Hero → Social → Servicios → Galería → Testimonios
│   │
│   ├── pages/
│   │   ├── Home.tsx                ← Landing de la plataforma
│   │   ├── ClientCard.tsx          ← Orchestrator: slug → config → layout
│   │   └── NotFound.tsx
│   │
│   ├── App.tsx                     ← BrowserRouter + Routes
│   ├── main.tsx
│   └── index.css
│
├── public/
│   └── favicon.svg
│
├── index.html                      ← Fuentes Google Fonts
├── vercel.json                     ← SPA rewrite: /* → /index.html
├── vite.config.ts                  ← Manual chunks: vendor, motion
├── tailwind.config.js              ← Colores brand.* con CSS vars
├── tsconfig.json
├── package.json
├── MANUAL.md                       ← Manual operativo para agregar clientes
└── README.md
```

---

## Temas disponibles

| Tema | Sector | Fondo | Color primario | Fuente |
|------|--------|-------|----------------|--------|
| `tech` | Desarrolladores, IT | Oscuro `#0F172A` | Azul `#3B82F6` | Inter |
| `profesional` | Abogados, Contadores | Claro `#F8FAFC` | Marino `#1D4ED8` | Playfair Display |
| `comercial` | Tiendas, Técnicos | Cálido `#FFF7ED` | Naranja `#EA580C` | Nunito |
| `salud` | Médicos, Salud | Menta `#F0FDFA` | Teal `#0D9488` | DM Sans |
| `belleza` | Spa, Estilistas | Rosa `#FFF1F2` | Pink `#BE185D` | Playfair + Raleway |

Cada tema define: color primario, secundario, acento, fondo, superficies, texto, bordes, fuentes y radio de bordes.

---

## Layouts disponibles

| Layout | Secciones que muestra |
|--------|----------------------|
| `tech` | Hero · Social · Servicios · **Portafolio** · Testimonios |
| `profesional` | Hero · Dirección/Horario · Social · Servicios · **Especialidades** · Testimonios |
| `comercial` | Hero · **Mapa + Horario prominente** · Servicios · **Galería** · Testimonios · Social |
| `salud` | Hero · **Credenciales** · Servicios · **Info contacto detallada** · Testimonios · Social |
| `belleza` | Hero · **Social primero** · Servicios · **Galería de trabajos** · Testimonios |

---

## Instalación y uso

### Requisitos

- Node.js 20 o superior
- Git

### Configuración inicial

```bash
git clone https://github.com/TU_USUARIO/tarjeta-digital.git
cd tarjeta-digital
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

### Agregar un cliente nuevo

```bash
# 1. Copiar la plantilla
cp src/clients/_template.json src/clients/nombre-cliente.json

# 2. Editar con los datos del cliente
# (Ver MANUAL.md para instrucciones detalladas de cada campo)

# 3. Probar localmente
npm run dev
# → http://localhost:5173/nombre-cliente

# 4. Publicar
git add src/clients/nombre-cliente.json
git commit -m "Add nombre-cliente"
git push
# → https://tu-dominio.com/nombre-cliente ✅
```

### Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo con hot reload
npm run build    # Build de producción (verificar antes de publicar)
npm run preview  # Preview del build de producción localmente
```

---

## Despliegue en Vercel

### Primer deploy

1. Subir el repositorio a GitHub
2. Ir a [vercel.com](https://vercel.com) → **New Project**
3. Importar el repositorio
4. Framework preset: **Vite** (se detecta automáticamente)
5. Click en **Deploy**

El archivo `vercel.json` incluido ya configura el rewrite necesario para el SPA:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Deploys automáticos

Cada `git push` a la rama principal dispara un redeploy automático en Vercel. Tiempo aproximado: 60-90 segundos.

### Dominio personalizado (opcional)

En Vercel → tu proyecto → **Settings** → **Domains** → agregar `tutarjetadigital.com`.

---

## Modelo de datos

```typescript
interface ClientConfig {
  slug: string          // ID único y URL del cliente
  theme: ThemeId        // Paleta visual
  layout: LayoutId      // Estructura de secciones

  profile: {
    name: string        // Nombre completo
    title: string       // Cargo/profesión
    company?: string    // Empresa (opcional)
    avatar?: string     // URL foto de perfil
    cover?: string      // URL imagen de portada
    bio?: string        // Descripción breve
    certifications?: string[]  // Títulos/certificaciones
    yearsExperience?: number
  }

  contact: {
    phone?: string      // Botón "Llamar"
    whatsapp?: string   // Botón "WhatsApp"
    email?: string      // Botón "Email"
    address?: string
    city?: string
    schedule?: string
    mapUrl?: string     // Botón "Ubicación"
  }

  social: {
    linkedin?: string
    instagram?: string
    facebook?: string
    twitter?: string
    github?: string
    tiktok?: string
    youtube?: string
    website?: string
  }

  services?: Service[]          // Grid de servicios
  gallery?: GalleryItem[]       // Galería con lightbox
  portfolio?: PortfolioItem[]   // Proyectos (solo layout tech)
  testimonials?: Testimonial[]  // Scroll horizontal

  seo: {
    title: string        // Pestaña del navegador + Google
    description: string  // Meta description
    keywords?: string[]
    ogImage?: string     // Imagen al compartir en WhatsApp
  }
}
```

---

## Performance

Output del build de producción:

```
dist/assets/vendor.js              161 KB │ gzip: 52 KB  ← React (cacheado)
dist/assets/motion.js              112 KB │ gzip: 37 KB  ← Framer (cacheado)
dist/assets/index.js                43 KB │ gzip: 12 KB  ← App
dist/assets/mario.js                 3 KB │ gzip: 1.7 KB ← Cliente (lazy)
dist/assets/electricista-carlos.js   3 KB │ gzip: 1.6 KB ← Cliente (lazy)
```

Cada cliente nuevo agrega ~2-4 KB al bundle total. Con 100 clientes, el bundle base sigue siendo igual de rápido porque cada config solo se carga cuando se visita esa URL específica.

---

## Funcionamiento técnico

### Carga dinámica de configuraciones

```typescript
// Vite genera un mapa de todos los archivos al momento del build
const modules = import.meta.glob('../clients/*.json')
// {
//   '../clients/mario.json': () => import('../clients/mario.json'),
//   '../clients/dra-sofia.json': () => import('../clients/dra-sofia.json'),
// }

// Solo se carga el archivo del cliente solicitado
const config = await modules[`../clients/${slug}.json`]()
```

### Sistema de temas con CSS Custom Properties

```typescript
// Cada tema es un objeto de CSS variables
const themes = {
  tech: { '--color-primary': '#3B82F6', '--color-bg': '#0F172A', ... }
}

// Se aplican como inline style en el container
<div style={themes[config.theme]}>
  {/* Todos los hijos usan var(--color-primary), etc. */}
</div>
```

```js
// Tailwind lee las variables → clases como bg-brand-primary funcionan dinámicamente
colors: {
  brand: { primary: 'var(--color-primary)', bg: 'var(--color-bg)', ... }
}
```

---

## Licencia

Uso privado — todos los derechos reservados.
