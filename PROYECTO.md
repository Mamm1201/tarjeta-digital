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

## Historial de Avances

### Semana del 2026-06-13

**Completado:**
- [x] Home reescrita como página de ventas — precio visible, proceso de 3 pasos y garantía
- [x] Banner demo agregado al final del perfil: "Esta es una demo — ¿quieres la tuya?"
- [x] Medios de pago actualizados: Nequi y Bre-B al 3205841112
- [x] Plan Premium incluye 1 actualización gratis en el primer mes
- [x] Formulario de onboarding activo (Google Forms)
- [x] Playbook de respuestas rápidas para WhatsApp elaborado (11 mensajes, flujo completo)

**Pendiente esta semana:**
- [ ] Conseguir 3 clientes piloto (gratis/descuento a cambio de video y testimonio) — programado para 2026-06-14
- [ ] Grabar video de 30s del NFC funcionando en celular real — para publicar en redes

---

## Pendientes

### Desarrollo

- [ ] Crear más layouts (actualmente: Comercial, Profesional, Tech, Salud, Belleza)
- [ ] Definir dominio de producción definitivo (actualmente en Vercel)
- [ ] Sistema de onboarding para clientes nuevos (formulario → genera JSON automáticamente)
- [ ] Panel de administración para editar perfiles sin tocar el JSON
- [ ] Analytics por tarjeta (cuántas veces se escaneó la NFC)

### Negocio / Comercial

- [ ] Conseguir primer lote de tarjetas NTAG213 CR80 (mínimo 50 unidades)
- [ ] Definir proveedor de impresión para tarjetas personalizadas
- [ ] Crear catálogo de diseños de tarjeta (plantillas visuales)
- [ ] Definir política de actualizaciones (actualmente: $30.000 c/u después del primer mes)

### Contenido / Marketing

- [ ] Grabar video demo: "tap → perfil se abre en el teléfono" (30 segundos)
- [ ] Publicar video en redes sociales
- [ ] Recolectar testimonios de los 3 clientes piloto

---

## Recursos Clave

| Recurso | Link |
|---|---|
| Formulario de onboarding | https://docs.google.com/forms/d/e/1FAIpQLSev2PQKr58FtSWR3lDhF0PDHbtFeNDo5Evse-x-ZsTCwVzR-Q/viewform |
| WhatsApp de contacto | https://wa.me/573205841112 |
| Demo Mario | /mario |
| Demo electricista | /electricista-carlos |

---

## Clientes Activos

| Slug | Nombre | Layout | Estado |
|---|---|---|---|
| mario | Mario Márquez | Tech | Demo propio |
| electricista-carlos | Carlos Ramírez | Comercial | Demo/ejemplo |

---

## Playbook de Respuestas Rápidas — WhatsApp

> Guardar cada mensaje en WhatsApp Business con el atajo indicado.
> Reemplazar `[URL]` con la URL de producción del sitio.

### Guía de uso

| Situación | Atajo |
|---|---|
| Primer mensaje entrante | `/bienvenida` |
| Preguntan qué incluye | `/queincluye` |
| Preguntan precio | `/planes` |
| Preguntan por el chip NFC | `/comofunciona-nfc` |
| Dudan antes de pagar | `/sinriesgo` |
| Quieren proceder | `/proceder` |
| Llenaron el formulario | `/confirmaformulario` |
| Enviar tarjeta terminada | `/preview` |
| Aprueban y preguntan cómo pagar | `/cierre` |
| Recibir comprobante de pago | `/confirmapago` |
| Sin respuesta 48h tras el preview | `/seguimiento` |

---

### ETAPA 1 — PRIMER CONTACTO

**`/bienvenida`**
```
¡Hola! 👋 Soy Mario, gracias por escribir.

Te cuento rápido: creo tarjetas digitales profesionales con chip NFC — tu cliente acerca el celular y en 1 segundo abre tu perfil, tus servicios y tu WhatsApp. Sin apps, sin papel.

Acá puedes ver cómo quedan y los planes con precio:
👉 [URL]

Si tienes dudas o quieres que hagamos la tuya, aquí estoy.
```

---

### ETAPA 2 — MANEJO DE DUDAS

**`/queincluye`**
```
El proceso es simple:

1️⃣ Llenas un formulario con tus datos (5 min)
2️⃣ En menos de 24h te mando el link de tu tarjeta para que la veas funcionando en tu celular
3️⃣ Si te gusta, pagas — si hay algo que cambiar, lo ajustamos sin costo

Puedes ver ejemplos reales acá 👇
👉 [URL]/#planes

¿Quieres que te cuente qué plan se ajusta más a lo que necesitas?
```

**`/planes`**
```
Manejamos tres planes, todos con pago único (sin mensualidades):

🔹 *Básico — $50.000*
Perfil digital + QR + link permanente. Ideal si ya tienes cómo compartirlo.

🔵 *Profesional — $80.000* ⭐ (el más pedido)
Todo lo anterior + tarjeta NFC física programada. Tu cliente la toca con el celular y abre tu perfil al instante.

🔷 *Premium — $130.000*
Perfil completo con galería, portafolio, testimonios y diseño personalizado. Con tarjeta NFC.

¿Cuál se acerca más a lo que buscas?
```

**`/comofunciona-nfc`**
```
El chip NFC es la misma tecnología que usa tu tarjeta débito para pagar sin contacto.

Funciona así:
📱 Tu cliente saca el celular → lo acerca a la tarjeta → en 1 segundo abre tu perfil con tu WhatsApp, tus servicios, fotos y todo.

No necesita descargar ninguna app. Funciona en iPhone y en Android modernos (últimos 6 años).

Acá hay un ejemplo para que veas cómo queda:
👉 [URL]/electricista-carlos
```

**`/sinriesgo`**
```
Entiendo la duda, y por eso trabajo diferente:

✅ Primero hago tu tarjeta
✅ Te la mando para que la veas funcionando en tu celular
✅ Solo pagas cuando estés 100% conforme

Si no te gusta algo, lo cambiamos sin costo. Y si definitivamente no quieres seguir, no pagas nada.

Sin riesgo para ti.
```

---

### ETAPA 3 — CIERRE Y PROCESO

**`/proceder`**
```
¡Perfecto! Solo necesito que llenes este formulario con tus datos — te toma menos de 5 minutos:

📋 https://docs.google.com/forms/d/e/1FAIpQLSev2PQKr58FtSWR3lDhF0PDHbtFeNDo5Evse-x-ZsTCwVzR-Q/viewform

Una vez que lo envíes, en menos de 24h te mando el link de tu tarjeta para que la veas. Ahí decides si pagas.

Cualquier duda mientras lo llenas, escríbeme.
```

**`/confirmaformulario`**
```
¡Listo, recibí tu formulario! ✅

Ya empiezo a trabajar en tu tarjeta. En menos de 24 horas te mando el link para que la veas funcionando en tu celular — revisamos juntos que todo esté perfecto antes de que pagues.

Te aviso por acá.
```

---

### ETAPA 4 — ENVÍO DE PREVIEW

**`/preview`**
```
¡Lista tu tarjeta! 🎉

Ábrela desde tu celular para que veas cómo se ve:
👉 [LINK DE LA TARJETA DEL CLIENTE]

Revísala completa — contacto, servicios, todo. Si algo necesita ajuste (texto, foto, colores), me dices y lo corrijo.

Cuando estés conforme, me avisas y te explico cómo pagar.
```

**`/cierre`**
```
¡Perfecto! Me alegra que haya quedado exactamente como querías.

El pago es por:

💚 *Nequi:* 3205841112
🔵 *Bre-B:* 3205841112

Una vez confirme el pago te programo la tarjeta NFC y sale a envío. En 2–3 días hábiles llega a tu puerta.

Cuando hagas el pago me mandas el comprobante por acá.
```

---

### ETAPA 5 — POST-VENTA

**`/confirmapago`**
```
¡Pago confirmado! ✅ Muchas gracias.

Ya queda en producción tu tarjeta NFC. En 2–3 días hábiles te llega a tu dirección.

Te voy a estar informando del estado del envío.

Y cuando la recibas y la veas funcionando... ¿me harías el favor de grabar un videíto de 10 segundos mostrándola? Me ayuda un montón para que más personas la conozcan. 🙏
```

**`/seguimiento`** *(máximo una vez, no insistir)*
```
Hola [nombre], ¿pudiste revisar tu tarjeta?

Quería saber si tienes algún ajuste o si quedó bien. Estoy disponible para lo que necesites.
```

---

## Notas Rápidas

- La tarjeta NFC no necesita batería ni app instalada en el teléfono del cliente
- El perfil digital es una web estática → carga rápido, sin login
- El QR en el reverso de la tarjeta es un buen respaldo para teléfonos sin NFC
- iOS lee NFC automáticamente desde iOS 13 — no se necesita app
- La URL del perfil puede cambiar sin necesidad de reemplazar la tarjeta (se reprograma)
