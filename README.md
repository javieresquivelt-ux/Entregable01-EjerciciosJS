# Entrega de Ejercicios 1 — JavaScript

> Colección de soluciones interactivas en **Vanilla JavaScript (ES6+)** desarrolladas como MPA con **Vite + Sass** para la evaluación del módulo Fullstack de ConquerBlocks.

---

## Objetivos

El proyecto practica, en progresión pedagógica, los conceptos esenciales de JavaScript para el frontend:

| # | Ejercicio | Conceptos que practica |
|---|-----------|------------------------|
| 01 | Cambiador de Color de Fondo | Eventos (`addEventListener`), manipulación de estilos del DOM (`style.backgroundColor`), `Math.random` / `Math.floor` |
| 02 | Contador de Clics | Estado en memoria, nodos de texto (`textContent`), eventos de clic |
| 03 | Lista Dinámica | `document.createElement`, `appendChild`, `element.remove()`, sanitización con `trim()`, ciclo de vida de nodos |
| 04 | Filtro de Búsqueda en Tiempo Real | Evento `input`, `.filter()` / `.includes()`, normalización con `toLowerCase()` |
| 05 | Calculadora Sencilla | `parseFloat`, validación `isNaN`, manejo defensivo de división por cero |
| 06 | Temporizador Completo | `setInterval` / `clearInterval`, anti-dedup de timers, formateo con `padStart` |
| 07 | Generador de Contraseñas | Concatencación de cadenas, generación pseudoaleatoria, validación de umbrales |
| 08 | Contador de Palabras y Caracteres | Expresiones Regulares (`\s`, `split(/\s+/)`), eventos `input` en `textarea` |
| 09 | Lista de Tareas con LocalStorage | Web Storage API, `JSON.stringify` / `JSON.parse`, renderizado reactivo |

---

## Estructura de Archivos

```
Entregable01/
│
├── index.html                  # Landing page con catálogo interactivo de los 9 ejercicios
├── js_ejercicio_1.html          # Vista individual: Ejercicio 1 · Cambiador de Color
├── js_ejercicio_2.html          # Vista individual: Ejercicio 2 · Contador de Clics
├── js_ejercicio_3.html          # Vista individual: Ejercicio 3 · Lista Dinámica
├── js_ejercicio_4.html          # Vista individual: Ejercicio 4 · Filtro en Tiempo Real
├── js_ejercicio_5.html          # Vista individual: Ejercicio 5 · Calculadora Sencilla
├── js_ejercicio_6.html          # Vista individual: Ejercicio 6 · Temporizador
├── js_ejercicio_7.html          # Vista individual: Ejercicio 7 · Generador de Contraseñas
├── js_ejercicio_8.html          # Vista individual: Ejercicio 8 · Contador de Palabras
├── js_ejercicio_9.html          # Vista individual: Ejercicio 9 · Tareas con LocalStorage
│
├── js_ejercicio1.js             # Lógica: Ejercicio 1
├── js_ejercicio2.js             # Lógica: Ejercicio 2
├── js_ejercicio3.js             # Lógica: Ejercicio 3
├── js_ejercicio4.js             # Lógica: Ejercicio 4
├── js_ejercicio5.js             # Lógica: Ejercicio 5
├── js_ejercicio6.js             # Lógica: Ejercicio 6
├── js_ejercicio7.js             # Lógica: Ejercicio 7
├── js_ejercicio8.js             # Lógica: Ejercicio 8
├── js_ejercicio9.js             # Lógica: Ejercicio 9
│
├── plans/                       # 9 planes atómicos de ejecución (contrato UI + JS + DoD)
│   └── plan_ejercicio_01_color.md ... plan_ejercicio_09_todo_localstorage.md
│
├── src/
│   ├── main.js                  # Punto de entrada JS de Vite (importa app.scss)
│   └── scss/
│       ├── app.scss             # Hoja maestra de estilos (@use de todos los módulos)
│       ├── abstracts/           # _variables.scss (tokens) y _mixins.scss (utilidades)
│       ├── base/                # _reset.scss y _typography.scss
│       ├── components/          # _badges, _buttons, _cards, _forms
│       ├── layout/              # _container, _footer, _header
│       └── pages/               # _home.scss y _exercise.scss
│
├── public/                      # Assets estáticos no procesados (favicon, icons)
├── instruction/                 # Consigna original y prompt del curso
├── agent.md                     # Definición del agente tutor y metodología
├── task.md                      # Tablero de tareas (Harness Engineering Framework)
├── memory.md                    # Bitácora de decisiones técnicas y aprendizajes
│
├── vite.config.js               # Config MPA: base './' + rollupOptions.input dinámico
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Secciones del Sitio

### Header (Encabezado / Navbar)
- **Fijo (sticky)** en la parte superior (`position: sticky; top: 0; z-index: 50`), con fondo `rgba(15, 23, 42, 0.85)` y **glassmorphism** (`backdrop-filter: blur(12px)`).
- **Logo-badge "JS"**: píldora con gradiente indigo→violeta, fuente mono y `border-radius` pequeño.
- **Marca**: título "ConquerBlocks • Entrega 1".
- **Meta-badge** derecho: "Vanilla JavaScript" con la variante `badge--dom`.
- En las vistas de ejercicio incluye el botón `btn--back` ("← Volver al catálogo", píldora con borde sutil).

### Hero (Presentación)
- **Tag superior**: pill con borde indigo translúcido y texto `#a5b4fc` ("🚀 Módulo Práctico de Frontend").
- **Título `h1`**: peso `800`, con palabras resaltadas en **`text-gradient`** (indigo→violeta vía `background-clip: text`).
- **Subtítulo**: máximo 650 px centrado, tamaño `1.1rem`, color `text-secondary`.

### Categorías (Grid de Ejercicios)
- **Grid responsive** de tarjetas: `1` columna (móvil) → `2` (≥768px) → `3` (≥1024px).
- Cada `.card--interactive` ofrece: `card__number` (píldora mono #01–#09), **badge de categoría** (`badge--dom`, `badge--events`, `badge--async`, `badge--storage`), título, descripción y CTA "Ver solución →".
- **Hover**: elevación `translateY(-6px)`, borde resaltado y **glow** (`shadow-lg + shadow-glow`); toda la tarjeta es clickeable (`onclick`) y accesible con `tabindex`/`role=link`.

---

## Tecnologías

- **Vanilla JavaScript (ES6+)** — sin frameworks de UI.
- **Vite ^8.3.0** — bundler de desarrollo y build.
- **Dart Sass ^1.104.1** — preprocesamiento modular con `@use` / `@forward`.
- **Google Fonts** — Outfit, Inter y JetBrains Mono.
- **Arquitectura MPA** compatible con **GitHub Pages** (`base: './'` + `rollupOptions.input` dinámico con `node:fs`).

---

## Instalación y Uso

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (hot reload)
npm run dev

# 3. Build de producción (genera dist/)
npm run build

# 4. Previsualizar el build compilado
npm run preview
```

Para probar cada ejercicio en desarrollo, navega a `http://localhost:5173/js_ejercicio_1.html` … `js_ejercicio_9.html`, o comienza desde la landing `http://localhost:5173/`.

---

## Paleta de Colores

| Token | Color | Propósito |
|-------|-------|-----------|
| `$bg-primary` | `#0f172a` | Fondo principal de la aplicación (slate 900) |
| `$bg-surface` | `#1e293b` | Tarjetas, superficies y panels |
| `$bg-surface-hover` | `#334155` | Hover sobre tarjetas |
| `$text-primary` | `#f8fafc` | Títulos y texto prioritario |
| `$text-secondary` | `#94a3b8` | Subtítulos y descripciones |
| `$text-muted` | `#64748b` | Metadatos y texto secundario |
| `$primary` | `#6366f1` | Indigo: acento principal (botones, focos, enlaces) |
| `$primary-hover` | `#4f46e5` | Indigo hover |
| `$accent` | `#8b5cf6` | Violeta para gradientes y resaltados |
| `$cyan` | `#06b6d4` | Información / tiempo real |
| `$success` | `#10b981` | Estados positivos y confirmaciones |
| `$danger` | `#f43f5e` | Errores, eliminación y reset |
| `$warning` | `#f59e0b` | Alertas y contadores |

---

## Tipografías y Tamaños

| Familia | Uso | Pesos cargados |
|---------|-----|----------------|
| **Outfit** | Titulares (`h1`–`h6`) | 500–800 |
| **Inter** | Cuerpo y UI (`body`, botones, inputs) | 300–600 |
| **JetBrains Mono** | Código, números, contraseñas, timers (`.text-mono`) | 500, 700 |

Tamaños principales:

| Elemento | Tamaño |
|----------|--------|
| `h1` | `clamp(2rem, 4vw, 3rem)`, `letter-spacing: -0.02em` |
| `h2` | `clamp(1.5rem, 3vw, 2.25rem)` |
| `h3` | `1.35rem` |
| Cuerpo (`p`, `body`) | `1rem`, `line-height: 1.6` |
| `.btn` | `0.95rem`, peso 600 |
| `.btn--back` | `0.875rem` |
| `.badge` | `0.75rem`, `text-transform: uppercase`, `letter-spacing: 0.05em` |
| `.exercise-card__title` | `1.6rem` |
| Valores mono (timers, contadores) | `1.5rem` – `4rem` (con `clamp`) |

---

## Aprendizajes Clave

- **Estado como fuente de verdad**: separar el dato (variable en memoria) de su representación visual (`textContent`) evita desincronizaciones; el renderizado reactivo (Ejercicio 9) refuerza este patrón.
- **Ciclo de vida de nodos DOM**: `createElement` → configurar → `appendChild` → `remove`, con sanitización `trim()`, es la base de la manipulación dinámica (Ejercicio 3).
- **Eventos de continuidad**: `input` dispara por cada tecla (vs `change` que espera pérdida de foco) — clave para búsquedas y contadores en vivo.
- **Validación preventiva del usuario**: `parseFloat` + `isNaN` y guardas explícitas (división por cero, longitudes mínimas) transforman errores silenciosos en mensajes legibles.
- **Asincronía controlada**: `setInterval`/`clearInterval` + guarda anti-duplicación evitan timers acelerados y fugas de memoria.
- **Expresiones regulares**: `\s` abarca espacios y saltos de línea; `split(/\s+/)` es superior a `split(' ')` ante separadores múltiples.
- **Persistencia real**: `localStorage` solo guarda strings; `JSON.stringify`/`JSON.parse` serializan estructuras; `Date.now()` genera ids únicos sin dependencias.
- **MPA con Vite**: `rollupOptions.input` dinámico (via `node:fs`) + `base: './'` preparan el proyecto para GitHub Pages sin tocar la configuración al agregar páginas.

---

Creado por **Javier Esquivel** · ConquerBlocks · Desarrollo Web Fullstack