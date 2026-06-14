# Tarjeta Digital Profesional — Contexto del Proyecto

## ¿Qué es este proyecto?

Sistema de tarjetas digitales profesionales para Colombia. Cada cliente tiene un perfil en una URL del tipo `/electricista-carlos` que se abre desde una tarjeta NFC física o un código QR. El stack es React + TypeScript + Vite + TailwindCSS, desplegado en Vercel.

El modelo de negocio combina:
- **Tarjeta digital** (perfil web personalizado)
- **Tarjeta NFC física** programada con la URL del cliente
- Opcionalmente: QR impreso como respaldo

---

## Stack Técnico

- **Frontend:** React + TypeScript + Vite
- **Estilos:** TailwindCSS
- **Deploy:** Vercel
- **Datos de cliente:** archivos JSON en `src/clients/`
- **Layouts disponibles:** Comercial, Profesional, Tech, Salud, Belleza
- **Ejemplo de cliente activo:** `src/clients/electricista-carlos.json`

---

## Estructura de un Cliente (JSON)

Cada cliente tiene su propio archivo `.json` con:

```
slug / theme / layout
profile: name, title, company, avatar, cover, bio, certifications
contact: phone, whatsapp, email, address, city, schedule, mapUrl
social: facebook, instagram, tiktok, website
services: id, name, description, icon, price, featured
gallery: id, src, alt, caption
testimonials: id, name, role, text, rating
seo: title, description, keywords, ogImage
```

---

## Tarjeta NFC — Ficha Técnica

### Chip recomendado

**NTAG213** — estándar de facto para casos de uso URL.

| Parámetro | Valor |
|---|---|
| Chip principal | NTAG213 |
| Chips alternativos | NTAG215, NTAG216, MIFARE Ultralight C |
| Frecuencia | 13,56 MHz (HF) |
| Estándar | ISO 14443-A / NFC Forum Type 2 |
| Protocolo de datos | NDEF — registro tipo URI |
| Memoria usuario | 144 bytes (NTAG213) |
| Regrabable | Sí — hasta 100.000 ciclos |
| Retención de datos | Mínimo 10 años |
| Compatible Android | Sí, desde Android 4.0 |
| Compatible iPhone | Sí, nativo desde iOS 13 (iPhone 7+) |
| Material | PVC CR80 — 85,6 × 53,98 mm × 0,76 mm |
| Distancia de lectura | 1–4 cm |
| Vida útil chip | 10–15 años |

### NO comprar

- Chips 125 kHz (EM4100, HID Prox) — no son NFC
- MIFARE Classic — no funciona en iPhone
- Chips sin identificar / sin marca en la publicación
- Tarjetas de metal sólido — interfieren con la antena

### Checklist Mercado Libre

- [ ] Chip: NTAG213 (o NTAG215/216) mencionado explícitamente
- [ ] Frecuencia: 13,56 MHz
- [ ] ISO 14443-A o NFC Forum Type 2
- [ ] Compatible con iPhone sin app
- [ ] Regrabable
- [ ] Formato CR80 / 0,76 mm

---

## ¿Cómo programo la tarjeta NFC con la URL del cliente?

### Apps recomendadas (gratuitas)

| App | SO | Nivel |
|---|---|---|
| **NFC Tools** (by wakdev) | Android / iOS | Básico, ideal para empezar |
| **NFC TagWriter by NXP** | Android / iOS | Profesional, más control |
| **TagInfo by NXP** | Android / iOS | Solo lectura / diagnóstico |

---

### Proceso paso a paso con NFC Tools (recomendado)

**En Android:**

1. Instalar [NFC Tools](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc)
2. Abrir la app → pestaña **"Write"**
3. Tocar **"Add a record"**
4. Seleccionar **"URL/URI"**
5. Escribir la URL del cliente: `https://tudominio.co/electricista-carlos`
6. Tocar **"Write"** (botón inferior)
7. Acercar la tarjeta NFC al teléfono → escucharás confirmación
8. ✅ Listo

**En iPhone:**

1. Instalar [NFC Tools en App Store](https://apps.apple.com/app/nfc-tools/id1252962749)
2. Mismo proceso que Android
3. Acercar la parte superior del iPhone (zona de antena NFC) a la tarjeta

---

### Proceso con NFC TagWriter by NXP (más profesional)

1. Abrir app → **"Write tags"**
2. **"New dataset"** → **"Link"** → escribir la URL
3. **"Save and write"**
4. Acercar tarjeta → confirmar escritura
5. Opcional: activar **"Make read-only"** para bloquear la tarjeta (no se puede reescribir después)

---

### Verificar que quedó bien escrita

1. Con **TagInfo by NXP**: escanear la tarjeta → muestra chip, memoria usada y el NDEF guardado
2. O simplemente acercar la tarjeta al teléfono sin ninguna app abierta → debe abrir el navegador automáticamente con la URL del cliente

---

### Flujo de trabajo para cada cliente nuevo

```
1. Recibir los datos del cliente
2. Crear src/clients/nombre-cliente.json
3. Hacer deploy en Vercel → URL activa: tudominio.co/nombre-cliente
4. Abrir NFC Tools → Write → URL → escribir tudominio.co/nombre-cliente
5. Acercar tarjeta NTAG213 → confirmar escritura
6. Probar: acercar tarjeta al teléfono → se abre el perfil del cliente ✅
7. Entregar tarjeta al cliente
```

---

### ¿Qué pasa si necesito reprogramar una tarjeta?

Simplemente repetir el proceso de escritura con la nueva URL. NTAG213 permite hasta 100.000 reescrituras. Si la tarjeta fue bloqueada con "make read-only", no se puede reescribir (es permanente).

---

## Modelo de Negocio y Precios

### Costos por unidad

| Concepto | Costo COP |
|---|---|
| Tarjeta NTAG213 CR80 (x50 unidades) | $2.500 – $4.000 |
| Tarjeta NTAG213 CR80 (x100+ unidades) | $1.800 – $2.500 |
| Programación (2-3 min) | $500 – $1.000 |
| Empaque básico | $300 – $600 |
| **Total costo por unidad** | **$3.500 – $5.500** |

### Precios de venta sugeridos

| Producto | Precio COP |
|---|---|
| Tarjeta NFC sola (programada) | $25.000 – $35.000 |
| **Bundle: NFC + perfil digital** ⭐ | **$70.000 – $90.000** |
| Bundle premium (con impresión personalizada) | $100.000 – $130.000 |
| Paquete empresa (x5-10 tarjetas) | $50.000 – $70.000 c/u |
| Mantenimiento anual del perfil | $30.000 – $50.000/año |

### Precio de entrada recomendado

**$75.000 COP** — tarjeta NFC + perfil digital configurado + QR de respaldo.

### Regla de precio

- Markup mínimo: **10x** sobre el costo de la tarjeta sola
- No competir por precio con Mercado Libre
- No vender por debajo de $50.000 el paquete completo

---

## Pendientes

### Desarrollo

- [ ] Crear más layouts (actualmente: Comercial, Profesional, Tech, Salud, Belleza)
- [ ] Definir dominio de producción (actualmente ejemplo genérico)
- [ ] Sistema de onboarding para clientes nuevos (formulario → genera JSON automáticamente)
- [ ] Panel de administración para editar perfiles sin tocar el JSON
- [ ] Soporte para múltiples idiomas
- [ ] Analytics por tarjeta (cuántas veces se escaneó la NFC)

### Negocio / Comercial

- [ ] Conseguir primer lote de tarjetas NTAG213 CR80 (mínimo 50 unidades)
- [ ] Definir proveedor de impresión para tarjetas personalizadas
- [ ] Crear catálogo de diseños de tarjeta (plantillas visuales)
- [ ] Definir dominio definitivo de producción
- [ ] Crear proceso de onboarding documentado para clientes
- [ ] Definir política de suscripción / mantenimiento anual
- [ ] Primeros 3 clientes piloto (precio reducido a cambio de testimonial)

### Contenido / Marketing

- [ ] Crear video demo: "tap → perfil se abre en el teléfono"
- [ ] Definir segmentos objetivo prioritarios (¿electricistas, médicos, estilistas?)
- [ ] Armar propuesta de valor en una página para mostrar a clientes

---

## Clientes Activos

| Slug | Nombre | Layout | Estado |
|---|---|---|---|
| electricista-carlos | Carlos Ramírez | Comercial | Demo/ejemplo |

---

## Notas Rápidas

- La tarjeta NFC no necesita batería ni app instalada en el teléfono del cliente
- El perfil digital es una web estática → carga rápido, sin login
- El QR en el reverso de la tarjeta es un buen respaldo para teléfonos sin NFC
- iOS lee NFC automáticamente desde iOS 13 — no se necesita app
- La URL del perfil puede cambiar sin necesidad de reemplazar la tarjeta (se reprograma)
