# Manual Operativo — Tarjeta Digital Profesional

> **Para quién es este manual:** Para ti, el operador del negocio, cuando contraten una nueva tarjeta digital.  
> **Regla de oro:** Solo tocas archivos en `src/clients/`. Nunca modificas componentes ni layouts.

---

## Índice

1. [Configuración inicial (una sola vez)](#1-configuración-inicial-una-sola-vez)
2. [Crear una nueva tarjeta digital](#2-crear-una-nueva-tarjeta-digital)
3. [Elegir tema y layout según el tipo de negocio](#3-elegir-tema-y-layout-según-el-tipo-de-negocio)
4. [Llenar cada sección del JSON](#4-llenar-cada-sección-del-json)
5. [Gestión de imágenes](#5-gestión-de-imágenes)
6. [Probar localmente antes de publicar](#6-probar-localmente-antes-de-publicar)
7. [Publicar en producción](#7-publicar-en-producción)
8. [Actualizar una tarjeta existente](#8-actualizar-una-tarjeta-existente)
9. [Qué NUNCA debes modificar](#9-qué-nunca-debes-modificar)
10. [Checklist de entrega al cliente](#10-checklist-de-entrega-al-cliente)
11. [Solución de errores comunes](#11-solución-de-errores-comunes)
12. [Referencia rápida de campos](#12-referencia-rápida-de-campos)

---

## 1. Configuración inicial (una sola vez)

Esto solo lo haces la primera vez en una computadora nueva.

### Requisitos previos

| Herramienta | Descarga | Para qué sirve |
| ----------- | -------- | -------------- |

| Node.js 20+ | nodejs.org | Ejecutar el proyecto localmente |
| Git | git-scm.com | Control de versiones |
| VS Code | code.visualstudio.com | Editor de código (recomendado) |

### Clonar y preparar el proyecto

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/tarjeta-digital.git
cd tarjeta-digital

# 2. Instalar dependencias (solo la primera vez)
npm install

# 3. Verificar que todo funciona
npm run dev
# Abre: http://localhost:5173
```

Si ves la página de inicio en el navegador, todo está correcto.

---

## 2. Crear una nueva tarjeta digital

### Paso 1 — Definir el slug (la URL del cliente)

El **slug** es la última parte de la URL. Es permanente, así que elige bien.

**Reglas del slug:**

- Solo letras minúsculas, números y guiones
- Sin espacios, tildes ni caracteres especiales
- Debe ser descriptivo y fácil de compartir

**Buenos ejemplos:**
`dra-sofia-garcia       → tutarjetadigital.com/dra-sofia-garcia
barberia-el-corte      → tutarjetadigital.com/barberia-el-corte
abogado-andres-ruiz    → tutarjetadigital.com/abogado-andres-ruiz
clinica-dental-sonrisa → tutarjetadigital.com/clinica-dental-sonrisa`

**Evitar:**
`❌ DraSofiaGarcia     (mayúsculas)
❌ dra sofia garcia   (espacios)
❌ dra_sofia_garcia   (guiones bajos)
❌ dra-sofía-garcía   (tildes)`

### Paso 2 — Copiar la plantilla

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
# Reemplaza SLUG por el slug real del cliente
cp src/clients/_template.json src/clients/SLUG.json

# Ejemplo:
cp src/clients/_template.json src/clients/dra-sofia-garcia.json
```

También puedes hacerlo manualmente:

1. Abrir VS Code
2. Ir a `src/clients/`
3. Click derecho en `_template.json` → **Copy**
4. Click derecho en la carpeta `clients/` → **Paste**
5. Renombrar el archivo con el slug del cliente

### Paso 3 — Abrir el archivo en VS Code

```bash
code src/clients/dra-sofia-garcia.json
```

### Paso 4 — Llenar los datos

Ver la sección [4. Llenar cada sección del JSON](#4-llenar-cada-sección-del-json) para instrucciones detalladas de cada campo.

### Paso 5 — Probar localmente

```bash
npm run dev
# Abre: http://localhost:5173/dra-sofia-garcia
```

### Paso 6 — Publicar

```bash
git add src/clients/dra-sofia-garcia.json
git commit -m "Add dra-sofia-garcia"
git push
# Vercel redeploya automáticamente en ~60 segundos
```

---

## 3. Elegir tema y layout según el tipo de negocio

Esta es **la decisión más importante**. Define el look completo de la tarjeta.

### Tabla de selección rápida

| Tipo de cliente | `theme` | `layout` | Apariencia |

|----------------|---------|----------|------------|
| Desarrollador web | `tech` | `tech` | Oscuro, azul/cyan, moderno |
| Ingeniero de sistemas | `tech` | `tech` | Oscuro, azul/cyan, moderno |
| Empresa de software | `tech` | `tech` | Oscuro, azul/cyan, moderno |
| Contratista técnico | `comercial` | `comercial` | Cálido, naranja/verde |
| Electricista | `comercial` | `comercial` | Cálido, naranja/verde |
| Plomero | `comercial` | `comercial` | Cálido, naranja/verde |
| Abogado | `profesional` | `profesional` | Claro, azul marino/dorado, serif |
| Contador | `profesional` | `profesional` | Claro, azul marino/dorado, serif |
| Consultor de negocios | `profesional` | `profesional` | Claro, azul marino/dorado, serif |
| Médico | `salud` | `salud` | Blanco limpio, teal/verde |
| Odontólogo | `salud` | `salud` | Blanco limpio, teal/verde |
| Psicólogo | `salud` | `salud` | Blanco limpio, teal/verde |
| Nutricionista | `salud` | `salud` | Blanco limpio, teal/verde |
| Barbería | `belleza` | `belleza` | Rosa/dorado, elegante, cursiva |
| Estilista | `belleza` | `belleza` | Rosa/dorado, elegante, cursiva |
| Spa | `belleza` | `belleza` | Rosa/dorado, elegante, cursiva |
| Tienda / Comercio | `comercial` | `comercial` | Cálido, naranja/verde |
| Carnicería | `comercial` | `comercial` | Cálido, naranja/verde |
| Restaurante | `comercial` | `comercial` | Cálido, naranja/verde |

> **Nota:** Los valores de `theme` y `layout` **siempre son iguales** en la configuración actual. Si un cliente quiere un look diferente al estándar de su sector, puedes combinarlos libremente.

### Qué secciones muestra cada layout

| Sección | tech | profesional | comercial | salud | belleza |

|---------|:----:|:-----------:|:---------:|:-----:|:-------:|
| Hero (foto, nombre, bio) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Redes sociales | ✅ | ✅ | ✅ | ✅ | ✅ |
| Servicios | ✅ | ✅ | ✅ | ✅ | ✅ |
| Portafolio de proyectos | ✅ | ❌ | ❌ | ❌ | ❌ |
| Galería de fotos | ❌ | ❌ | ✅ | ❌ | ✅ |
| Dirección / Mapa prominente | ❌ | ✅ parcial | ✅ | ✅ | ❌ |
| Horario de atención | ❌ | ✅ | ✅ | ✅ | ❌ |
| Credenciales / Títulos | ❌ | ✅ lista | ✅ | ✅ detallado | ❌ |
| Testimonios | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## 4. Llenar cada sección del JSON

### Estructura completa con explicaciones

```jsonc
{
  // ─── IDENTIFICACIÓN ───────────────────────────────────────────────

  "slug": "dra-sofia-garcia",
  // OBLIGATORIO. Debe ser idéntico al nombre del archivo (sin .json).
  // Define la URL: tutarjetadigital.com/dra-sofia-garcia

  "theme": "salud",
  // OBLIGATORIO. Paleta de colores y fuentes.
  // Opciones: "tech" | "profesional" | "comercial" | "salud" | "belleza"

  "layout": "salud",
  // OBLIGATORIO. Qué secciones se muestran y en qué orden.
  // Opciones: "tech" | "profesional" | "comercial" | "salud" | "belleza"

  // ─── PERFIL ───────────────────────────────────────────────────────

  "profile": {
    "name": "Dra. Sofía García",
    // OBLIGATORIO. Nombre completo tal como debe aparecer en la tarjeta.
    // Incluye título si aplica: "Dr.", "Dra.", "Abg.", "Ing.", etc.

    "title": "Médica General y Medicina Familiar",
    // OBLIGATORIO. Cargo, profesión o especialidad.
    // Mantenerlo en máximo 2 líneas.

    "company": "Centro Médico El Bosque",
    // Opcional. Nombre de la empresa, clínica, bufete, etc.
    // Si trabaja independiente, omite este campo o déjalo vacío ("").

    "avatar": "https://...",
    // Foto de perfil. Recomendado: imagen cuadrada, mínimo 300x300px.
    // Ver sección 5 para cómo manejar imágenes.
    // Si se omite, se muestra la inicial del nombre con fondo de color.

    "cover": "https://...",
    // Imagen de portada (banda superior de la tarjeta).
    // Recomendado: 800x300px o superior, relación 3:1.
    // Si se omite, se muestra un fondo sólido con el color secundario del tema.

    "bio": "Médica con 10 años de experiencia en medicina familiar y preventiva. Atención personalizada para toda la familia.",
    // Descripción breve. Máximo 2-3 oraciones.
    // Opcional pero muy recomendado.

    "certifications": [
      "Universidad Nacional de Colombia",
      "Especialista en Medicina Familiar - U. Javeriana",
      "Miembro Sociedad Colombiana de Medicina Familiar",
    ],
    // Lista de títulos, certificaciones o especialidades.
    // En layout "profesional" y "salud" se muestran como lista destacada.
    // En layout "tech" aparecen como tags en el hero.
    // Opcional.

    "yearsExperience": 10,
    // Número entero. Aparece como "10+ años de experiencia" bajo el cargo.
    // Opcional. Omitir si el cliente prefiere no mostrarlo.
  },

  // ─── CONTACTO ─────────────────────────────────────────────────────

  "contact": {
    "phone": "+573001234567",
    // Número con código de país. Sin espacios ni guiones.
    // Colombia: +57 + número de 10 dígitos.
    // Genera el botón "Llamar" en la barra inferior.

    "whatsapp": "+573001234567",
    // Generalmente igual a "phone". Puede ser diferente (ej: número de oficina).
    // Genera el botón "WhatsApp" con mensaje predeterminado.

    "email": "sofia@centromedico.co",
    // Correo electrónico. Genera el botón "Email".

    "address": "Cra. 15 #93-47, Oficina 302, Chicó",
    // Dirección completa de la consulta / local / oficina.
    // Visible en los layouts profesional, comercial y salud.

    "city": "Bogotá",
    // Ciudad. Aparece junto a la dirección.

    "schedule": "Lun–Vie 8am–6pm · Sáb 9am–1pm",
    // Horario de atención en formato libre.
    // Muy importante para médicos, comercios y servicios.

    "mapUrl": "https://maps.google.com/?q=Clinica+El+Bosque+Bogota",
    // Link a Google Maps. Genera el botón "Ubicación".
    // Cómo obtenerlo: buscar el lugar en Google Maps → Compartir → Copiar enlace.
  },

  // ─── REDES SOCIALES ───────────────────────────────────────────────
  // Todos los campos son opcionales. Incluir solo los que el cliente use activamente.
  // Si se omite un campo, no aparece el ícono.

  "social": {
    "linkedin": "https://linkedin.com/in/sofia-garcia",
    "instagram": "https://instagram.com/dra.sofia.garcia",
    "facebook": "https://facebook.com/centromedicosofiagarcia",
    "twitter": "https://twitter.com/drasofia",
    "github": "https://github.com/...", // Solo para tech
    "tiktok": "https://tiktok.com/@drasofia",
    "youtube": "https://youtube.com/@drasofia",
    "website": "https://drasofia.co",
  },

  // ─── SERVICIOS ────────────────────────────────────────────────────
  // Máximo recomendado: 6 servicios. Con más de 6 la sección se ve cargada.

  "services": [
    {
      "id": "medicina-general",
      // OBLIGATORIO. Identificador único. Solo minúsculas y guiones.
      // No puede repetirse dentro del mismo cliente.

      "name": "Medicina General",
      // OBLIGATORIO. Nombre del servicio (máximo 3-4 palabras).

      "description": "Consulta médica completa, diagnóstico y formulación.",
      // OBLIGATORIO. Descripción breve (1-2 oraciones).

      "icon": "🩺",
      // OBLIGATORIO. Emoji que representa el servicio.
      // Ver tabla de emojis sugeridos más abajo.

      "price": "Desde $60.000 COP",
      // Opcional. Si el cliente prefiere no mostrar precios, omitir.
      // Formato sugerido: "Desde $XX.000 COP" o "Consultar"

      "featured": true,
      // Opcional. Si es true, aparece con un badge "Destacado" y borde de color.
      // Máximo 2 servicios destacados para no perder el efecto.
    },
    {
      "id": "medicina-preventiva",
      "name": "Medicina Preventiva",
      "description": "Chequeos de rutina, vacunación y planes de salud familiar.",
      "icon": "💊",
      "price": "Desde $80.000 COP",
    },
  ],

  // ─── GALERÍA ──────────────────────────────────────────────────────
  // Solo aparece en layouts: comercial, belleza.
  // Para médicos, abogados y tech, esta sección se ignora aunque esté definida.

  "gallery": [
    {
      "id": "foto-consultorio",
      // OBLIGATORIO. ID único.

      "src": "https://...",
      // OBLIGATORIO. URL de la imagen.

      "alt": "Consultorio médico moderno",
      // OBLIGATORIO. Descripción para accesibilidad y SEO.

      "caption": "Nuestro consultorio en El Bosque",
      // Opcional. Texto que aparece al abrir la imagen en el lightbox.
    },
  ],

  // ─── PORTAFOLIO ───────────────────────────────────────────────────
  // Solo aparece en el layout: tech.
  // Para otros sectores, esta sección se ignora aunque esté definida.

  "portfolio": [
    {
      "id": "proyecto-web",
      "title": "Plataforma de Citas en Línea",
      "description": "Sistema de agendamiento para centros médicos con recordatorios automáticos.",
      "image": "https://...",
      "url": "https://...", // Opcional. Link al proyecto.
      "tags": ["React", "Node.js"], // Opcional. Tecnologías o categorías.
    },
  ],

  // ─── TESTIMONIOS ──────────────────────────────────────────────────
  // Recomendado: 3-5 testimonios. Aparecen en scroll horizontal.

  "testimonials": [
    {
      "id": "1",
      // OBLIGATORIO. ID único.

      "name": "María Rodríguez",
      // OBLIGATORIO. Nombre del cliente que da el testimonio.

      "role": "Paciente, 3 años",
      // Opcional. Cargo, empresa, o relación con el profesional.

      "text": "La Dra. García es excelente. Me atendió con paciencia y resolvió mi problema de salud rápidamente.",
      // OBLIGATORIO. El testimonio. Máximo 3-4 oraciones.

      "rating": 5,
      // OBLIGATORIO. Número del 1 al 5. Siempre usar 4 o 5 para testimonios reales.

      "avatar": "https://...",
      // Opcional. Foto del cliente que da el testimonio. Si se omite, muestra la inicial.
    },
  ],

  // ─── SEO ──────────────────────────────────────────────────────────

  "seo": {
    "title": "Dra. Sofía García — Médica General Bogotá",
    // OBLIGATORIO. Aparece en la pestaña del navegador y en Google.
    // Formato ideal: "Nombre — Profesión Ciudad"
    // Máximo 60 caracteres.

    "description": "Médica general con 10 años de experiencia en Bogotá. Medicina familiar, preventiva y consulta general. Citas: +57 300 123 4567.",
    // OBLIGATORIO. Aparece en los resultados de Google y al compartir en WhatsApp.
    // Máximo 160 caracteres. Incluir ciudad y teléfono si es posible.

    "keywords": [
      "médica general bogotá",
      "consulta médica chapinero",
      "medicina familiar bogotá norte",
    ],
    // Opcional. 3-5 palabras clave que usaría alguien buscando este servicio.
    // Pensar: ¿qué escribiría en Google alguien que necesita este servicio?

    "ogImage": "https://...",
    // Opcional pero muy recomendado. Imagen que aparece al compartir en WhatsApp.
    // Generalmente la misma foto de perfil del profesional.
    // Mínimo 600x315px. La imagen debe verse bien cuadrada o rectangular.
  },
}
```

---

### Emojis sugeridos por sector

**Salud:**
`🩺` Medicina general · `🦷` Odontología · `🧠` Psicología · `💊` Farmacología · `🏥` Clínica · `🩻` Radiología · `👁️` Oftalmología · `🧬` Laboratorio

**Técnico / Construcción:**
`⚡` Electricidad · `🔧` Mecánica · `🔨` Construcción · `🚿` Plomería · `❄️` Refrigeración · `🏗️` Obras · `🔌` Instalaciones · `🛠️` Mantenimiento

**Profesional / Legal:**
`⚖️` Derecho · `📊` Contabilidad · `💼` Consultoría · `📋` Auditoría · `🏢` Empresarial · `📈` Finanzas · `🤝` Negocios · `📝` Contratos

**Belleza:**
`✂️` Corte · `💇` Estilismo · `💅` Uñas · `💆` Masajes · `🧴` Skincare · `💄` Maquillaje · `🪒` Barbería · `✨` Tratamientos

**Comercio:**
`🥩` Carnes · `🛒` Tienda · `🔩` Ferretería · `🍕` Restaurante · `🎂` Pastelería · `🌿` Naturales · `📦` Distribución · `🚗` Automotriz

**Tech / Software:**
`🌐` Web · `📱` Móvil · `☁️` Cloud · `⚙️` Backend · `🔐` Seguridad · `🤖` IA · `📊` Datos · `🔌` IoT

---

## 5. Gestión de imágenes

### Opción A — Cloudinary (Recomendada)

Cloudinary tiene un **plan gratuito** con 25 créditos/mes, suficiente para decenas de tarjetas.

1. Crear cuenta en [cloudinary.com](https://cloudinary.com) (gratis)
2. Ir al panel → **Media Library** → **Upload**
3. Subir la imagen del cliente
4. Click en la imagen → **Copy URL**
5. Pegar la URL en el JSON

La URL tendrá este formato:
`https://res.cloudinary.com/TU_CUENTA/image/upload/v1234567890/nombre-imagen.jpg`

**Optimización automática:** Agrega `w_400,q_auto,f_auto` a la URL:
`https://res.cloudinary.com/TU_CUENTA/image/upload/w_400,q_auto,f_auto/v.../imagen.jpg`

### Opción B — Archivos locales (Para pruebas)

1. Crear una carpeta para el cliente dentro de `public/`:

`public/
  clients/
    dra-sofia-garcia/
      avatar.jpg
      cover.jpg
      gallery-1.jpg`

2.Referenciar en el JSON con ruta absoluta desde el dominio:

```json
"avatar": "/clients/dra-sofia-garcia/avatar.jpg"
```

> **Importante:** Las imágenes en `public/` se sirven en producción pero NO se optimizan. Para producción, usar Cloudinary.

### Especificaciones técnicas por tipo de imagen

| Tipo | Uso | Tamaño recomendado | Formato |

|------|-----|--------------------|---------|
| `avatar` | Foto de perfil | 400×400px mínimo, cuadrada | JPG/WebP |
| `cover` | Imagen de portada | 800×300px, relación 3:1 | JPG/WebP |
| `gallery` | Galería de trabajos | 600×800px máximo | JPG/WebP |
| `portfolio.image` | Imagen de proyecto | 800×500px | JPG/WebP |
| `seo.ogImage` | Compartir en WhatsApp | 1200×630px | JPG |

### Cómo obtener el link de Google Maps

1. Abrir [maps.google.com](https://maps.google.com)
2. Buscar la dirección del cliente
3. Click en el marcador → **Compartir**
4. Copiar el enlace corto (empieza con `https://maps.app.goo.gl/...`)
5. Pegar en el campo `mapUrl`

---

## 6. Probar localmente antes de publicar

```bash
# Iniciar el servidor de desarrollo
npm run dev
```

Abre `http://localhost:5173/SLUG-DEL-CLIENTE` en el navegador.

### Lista de verificación visual

- [ ] El nombre y cargo se leen correctamente
- [ ] La foto de perfil carga (si se configuró)
- [ ] Los colores del tema se ven bien
- [ ] Los botones de la barra inferior funcionan (llamar, WhatsApp, email, mapa)
- [ ] El botón "Guardar contacto" descarga el archivo .vcf
- [ ] El botón "Compartir" abre el menú nativo (en móvil) o copia el link
- [ ] Todos los servicios aparecen correctamente
- [ ] La galería (si aplica) muestra las fotos y el lightbox funciona
- [ ] Los testimonios hacen scroll horizontal
- [ ] Los íconos de redes sociales abren los links correctos

### Probar en móvil real (muy importante)

En VS Code o la terminal, el servidor de desarrollo muestra una IP local:
`Local:   http://localhost:5173/
Network: http://192.168.1.100:5173/   ← Esta IP`

Conecta tu teléfono a la misma red WiFi y abre esa IP en el navegador del celular.

---

## 7. Publicar en producción

### Primera publicación de un cliente nuevo

```bash
# 1. Verificar que no hay errores de código
npm run build

# Si el build falla, revisa el JSON: puede haber una coma extra, comillas mal cerradas, etc.

# 2. Agregar solo el archivo del nuevo cliente
git add src/clients/SLUG-DEL-CLIENTE.json

# 3. Hacer el commit con mensaje descriptivo
git commit -m "Add SLUG-DEL-CLIENTE"

# 4. Publicar
git push
```

Vercel detecta el push y redeploya automáticamente. En **~60 segundos** la tarjeta está disponible en:
`https://TU-DOMINIO.vercel.app/SLUG-DEL-CLIENTE`

### Verificar el deploy en Vercel

1. Ir a [vercel.com](https://vercel.com) → tu proyecto
2. En la pestaña **Deployments** aparece el deploy en curso
3. Click en el deploy → **Functions** → ver que no hay errores
4. Una vez que diga `Ready`, la URL está activa

---

## 8. Actualizar una tarjeta existente

Cuando un cliente necesita actualizar su información (nuevo teléfono, nuevos servicios, nueva foto):

```bash
# 1. Editar el archivo del cliente
code src/clients/SLUG-DEL-CLIENTE.json

# 2. Hacer los cambios necesarios

# 3. Probar localmente
npm run dev
# Verificar en: http://localhost:5173/SLUG-DEL-CLIENTE

# 4. Publicar
git add src/clients/SLUG-DEL-CLIENTE.json
git commit -m "Update SLUG-DEL-CLIENTE: [descripción del cambio]"
git push
```

**Ejemplos de mensajes de commit descriptivos:**
`git commit -m "Update dra-sofia-garcia: nuevo teléfono y horario"
git commit -m "Update electricista-carlos: agregar 3 testimonios nuevos"
git commit -m "Update barberia-el-corte: actualizar galería de trabajos"`

> **Garantía de aislamiento:** Editar `dra-sofia-garcia.json` es **imposible** que afecte a `electricista-carlos.json`. Cada cliente es un archivo independiente. La arquitectura del sistema garantiza el aislamiento total.

---

## 9. Qué NUNCA debes modificar

Estos archivos contienen la lógica del sistema. Modificarlos puede romper **todas** las tarjetas:

```
❌ src/components/    → Componentes visuales (HeroSection, ContactButtons, etc.)
❌ src/layouts/       → Estructuras de cada sector (TechLayout, SaludLayout, etc.)
❌ src/hooks/         → Lógica de carga de configuración y temas
❌ src/themes/        → Definición de colores y fuentes de los temas
❌ src/config/        → Tipos TypeScript
❌ src/pages/         → Páginas del enrutador
❌ src/App.tsx        → Configuración del enrutador
❌ tailwind.config.js → Configuración de estilos
❌ vercel.json        → Configuración del servidor
```

**Solo tocas:**
`✅ src/clients/NOMBRE-CLIENTE.json   → Datos del cliente
✅ public/clients/NOMBRE-CLIENTE/    → Imágenes locales del cliente (si usas Opción B)`

---

## 10. Checklist de entrega al cliente

Antes de enviar el link al cliente, verifica:

### Contenido

- [ ] Nombre completo correcto (con título si aplica: Dr., Abg., Ing.)
- [ ] Cargo/profesión exacto según lo que indicó el cliente
- [ ] Teléfono en formato internacional: `+57...`
- [ ] WhatsApp funciona y abre la conversación correctamente
- [ ] Email correcto y funcionando
- [ ] Dirección completa y el mapa abre la ubicación correcta
- [ ] Horario de atención actualizado
- [ ] Redes sociales verificadas (que los links abran el perfil correcto)

### Visual

- [ ] Foto de perfil nítida, centrada y de buena calidad
- [ ] Foto de portada apropiada para el sector
- [ ] Tema visual acorde al tipo de negocio
- [ ] Todos los servicios con descripciones claras
- [ ] Precios actualizados (o eliminados si el cliente prefiere no mostrarlos)

### Funcional

- [ ] Botón "Guardar contacto" descarga el .vcf con todos los datos
- [ ] Botón "Compartir" funciona en móvil
- [ ] Al compartir en WhatsApp aparece la imagen correcta (ogImage)
- [ ] La página carga rápido en datos móviles (probar en 4G)
- [ ] Se ve bien en iPhone y Android

### SEO

- [ ] Título del SEO incluye nombre, profesión y ciudad
- [ ] Descripción tiene máximo 160 caracteres
- [ ] Keywords relevantes para búsquedas en Google

---

## 11. Solución de errores comunes

### Error: La página no carga / muestra 404

**Causa más probable:** El slug en el JSON no coincide con el nombre del archivo.

```bash
# Verificar que son idénticos:
# Archivo:  src/clients/dra-sofia-garcia.json
# Slug:     "slug": "dra-sofia-garcia"
```

### Error: `npm run build` falla con error de JSON

**Causa:** Hay un error de sintaxis en el JSON (coma extra, comillas sin cerrar, etc.)

**Solución:** Usar un validador JSON:

1. Copiar todo el contenido del archivo
2. Pegar en [jsonlint.com](https://jsonlint.com)
3. Click en "Validate JSON"
4. El validador señalará exactamente la línea con el error

**Errores frecuentes:**

```jsonc
// ❌ Coma al final del último elemento
"website": "https://..."    ← Coma aquí está mal si es el último campo
}

// ✅ Correcto
"website": "https://..."
}
```

### Error: Las imágenes no cargan

**Verificar:**

1. La URL de la imagen abre en el navegador directamente
2. La URL no tiene espacios ni caracteres especiales sin codificar
3. Si es imagen local, el archivo está en `public/clients/...` y la ruta empieza con `/`

### Error: El botón de WhatsApp no funciona

**Verificar el formato del número:**

```json
// ❌ Formatos incorrectos
"whatsapp": "3001234567"       (sin código de país)
"whatsapp": "57 300 123 4567"  (con espacios)
"whatsapp": "+57-300-123-4567" (con guiones)

// ✅ Formato correcto
"whatsapp": "+573001234567"    (código de país pegado al número)
```

### Error: Los cambios no se ven en producción

**Esperar 60-90 segundos** después del push. Si después de 2 minutos no se actualiza:

1. Ir a Vercel → tu proyecto → Deployments
2. Verificar que el deploy más reciente dice "Ready"
3. Si dice "Error", revisar los logs del deploy

### El cliente dice que la tarjeta no se ve bien en su iPhone

1. Verificar en Safari (no solo en Chrome)
2. El mayor problema suelen ser las imágenes: verificar que las URLs cargan en Safari
3. Revisar que el `mapUrl` use un link de Google Maps válido

---

## 12. Referencia rápida de campos

### Campos obligatorios (sin ellos el sistema falla)

`slug          → Identificador único, igual al nombre del archivo
theme         → "tech" | "profesional" | "comercial" | "salud" | "belleza"
layout        → "tech" | "profesional" | "comercial" | "salud" | "belleza"
profile.name  → Nombre completo
profile.title → Cargo o profesión
seo.title     → Título para buscadores
seo.description → Descripción para buscadores`

### Campos opcionales pero muy recomendados

`profile.avatar    → Foto de perfil
profile.cover     → Imagen de portada
profile.bio       → Descripción breve
contact.phone     → Teléfono (genera botón Llamar)
contact.whatsapp  → WhatsApp (genera botón WhatsApp)
contact.email     → Correo (genera botón Email)
contact.mapUrl    → Google Maps (genera botón Ubicación)
seo.ogImage       → Imagen al compartir en WhatsApp`

### Reglas del sistema

- Un campo omitido **no genera error**, simplemente no se muestra en la tarjeta
- Los arrays vacíos `[]` son válidos: no muestran la sección
- Los campos `"featured": true` en servicios: máximo 2 por tarjeta para mantener el diseño
- Los IDs dentro de arrays (services, gallery, etc.) deben ser únicos **dentro de ese cliente**
  - `mario.json` puede tener un servicio con `"id": "web"`
  - `electricista-carlos.json` también puede tener `"id": "web"` — no hay conflicto
- El slug del archivo y el campo `"slug"` dentro del JSON **deben ser idénticos**

---

\*Manual versión 1.0 · Tarjeta Digital Profesional
