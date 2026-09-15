# MEMORY LOG: Decisiones Técnicas y Bitácora del Proyecto

## 1. Contexto Inicial y Diagnóstico del Entorno
- **Proyecto:** Entrega de Ejercicios 1 - JavaScript Fullstack (Conquer / Conquer Blocks).
- **Herramientas detectadas:**
  - Vite `^8.3.0` como bundler de desarrollo.
  - Dart Sass `^1.104.1` para preprocesamiento de estilos.
  - Estructura existente en `src/scss`: Contiene plantillas heredadas (`_gallery.scss`, `_hero.scss`, `_location.scss`) que requieren saneamiento para ajustarse a los requerimientos del entregable sin código muerto o rutas rotas.
  - Estructura paralela en `src/styles`: Contiene un `main.scss` mínimo no vinculado actualmente.

## 2. Decisiones de Arquitectura
- **Multi-Página (MPA) con Vite:**
  - Dado que la consigna exige un `index.html` y páginas separadas `js_ejercicio_1.html` ... `js_ejercicio_9.html`, Vite necesita configuración explícita en `build.rollupOptions.input` para empaquetar cada archivo HTML individualmente durante el `npm run build`.
  - Base configurada en `'./'` para garantizar rutas relativas compatibles con GitHub Pages (subdirectorios de repositorio).
- **Estructura de Estilos:**
  - Modularización con Sass utilizando la sintaxis moderna `@use` y `@forward`.
  - Diseño de un tema limpio, moderno, con estética profesional y paleta armónica, orientado a presentación académica y docente.
- **Convención de Archivos:**
  - Archivos HTML: `index.html`, `js_ejercicio_1.html` a `js_ejercicio_9.html`.
  - Scripts de lógica: `js_ejercicio1.js` a `js_ejercicio9.js`.

## 3. Registro de Ejecución y Validaciones
- **Fase 0 (Completada):**
  - Creación de archivos del framework (`agent.md`, `task.md`, `memory.md`).
  - Depuración de archivos Sass heredados de proyectos previos (`_gallery.scss`, `_hero.scss`, etc.) y eliminación de la carpeta redundante `src/styles/`.
  - Creación del sistema de diseño modular en `src/scss` con tokens modernos (paleta dark/glassmorphism, tipografía con Google Fonts 'Outfit' e 'Inter', botones interactivos, tarjetas, badges, inputs y contenedores responsivos).
  - Configuración dinámica en `vite.config.js` mediante Node `fs` para resolver automáticamente cualquier archivo `.html` presente en la raíz (`index.html` y todos los `js_ejercicio_*.html`).
  - Verificación exitosa de compilación sin errores con `npm run build`.
- **Fase 1 (Completada):**
  - Implementación de la landing page `index.html` con estética profesional dark/glassmorphism orientada a la evaluación docente.
  - Inclusión de Google Fonts (Outfit, Inter, JetBrains Mono) y metadatos semánticos.
  - Catálogo interactivo de 9 tarjetas con badges descriptivos, micro-animaciones al hacer hover y enlaces relativos directos a cada ejercicio (`./js_ejercicio_1.html` a `./js_ejercicio_9.html`).
  - Compilación y verificación de assets con `npm run build` sin errores.
- **Harness Framework: Generación de Planes Atómicos (Completada):**
  - Creación de la carpeta `plans/` con 9 especificaciones técnicas completas e independientes (`plan_ejercicio_01_color.md` hasta `plan_ejercicio_09_todo_localstorage.md`).
  - Cada plan contiene: Ficha técnica, Contrato UI/HTML uniforme que reutiliza el sistema Sass del proyecto, Especificación lógica JS con casos borde y buenas prácticas, Casos de prueba DoD y el Prompt listo para pasar a modelos de ejecución (DeepSeek / OpenCode).
  - Sincronización del tablero `task.md` con enlaces directos a cada plan.
- **Fase 2 – Ejercicio 1: Cambiador de Color de Fondo (Completada):**
  - Creación de `js_ejercicio_1.html` y `js_ejercicio1.js` en la raíz siguiendo al pie de la letra el plan `plans/plan_ejercicio_01_color.md`.
  - HTML reutiliza el sistema Sass existente (`.header`, `.exercise-card`, `.btn--back`, `.btn--primary`, `.btn--secondary`, `.badge--dom`, `.text-mono`). Se implementó copy feedback temporal con `setTimeout` (1.5 s) y manejo de errores en `navigator.clipboard`.
  - JS incluye función pura `generarColorHexAleatorio()` (base 16 con `Math.random` + `Math.floor`) y comentarios pedagógicos en español.
  - Validación: compilación limpia con `npm run build` (Vite detectó el HTML dinámicamente) y verificación manual aprobada por el estudiante (cambio de fondo, copia HEX y navegación de retorno correctos).
- **Fase 2 – Ejercicio 2: Contador de Clics (Completada):**
  - Creación de `js_ejercicio_2.html` y `js_ejercicio2.js` en la raíz siguiendo el plan `plans/plan_ejercicio_02_contador.md`.
  - JS mantiene un único estado en memoria (`let clics = 0`) como fuente de verdad, separado de su representación visual (`textContent`), con handlers de incremento y reinicio vía `addEventListener('click')`.
  - Validación: compilación limpia con `npm run build` y verificación manual aprobada por el estudiante (incremento, reinicio y navegación correctos).
- **Fase 2 – Ejercicio 3: Lista Dinámica (Completada):**
  - Creación de `js_ejercicio_3.html` y `js_ejercicio3.js` en la raíz siguiendo el plan `plans/plan_ejercicio_03_lista_dinamica.md`.
  - JS documenta el ciclo de vida de nodos DOM: `document.createElement` → configuración → `appendChild` → `li.remove()`, con sanitización `trim()`, función `actualizarEstadoVacio()` basada en `children.length`, y disparadores duales (clic en "Agregar" y tecla Enter con `preventDefault`).
  - Validación: compilación limpia con `npm run build` y verificación manual aprobada por el estudiante (validación de blancos, alta por Enter, eliminación individual y restauración del mensaje de lista vacía).
- **Fase 3 – Ejercicio 4: Filtro de Búsqueda en Tiempo Real (Completada):**
  - Creación de `js_ejercicio_4.html` y `js_ejercicio4.js` en la raíz siguiendo el plan `plans/plan_ejercicio_04_filtro_busqueda.md`.
  - JS implementa `renderizarLista(items)` centralizada, evento `input` (vs `change`) con normalización `toLowerCase()` + `trim()`, filtrado con `.filter()`/`.includes()` sobre 12 elementos predefinidos, contador de resultados, botón "Limpiar filtro" y render inicial al cargar.
  - Validación: compilación limpia con `npm run build` y verificación manual aprobada por el estudiante (filtrado en vivo, sin coincidencias y restauración).
- **Fase 3 – Ejercicio 5: Calculadora Sencilla con Validaciones (Completada):**
  - Creación de `js_ejercicio_5.html` y `js_ejercicio5.js` en la raíz siguiendo el plan `plans/plan_ejercicio_05_calculadora.md`.
  - JS centraliza la validación en `obtenerNumeros()` (campos vacíos, `parseFloat`, `isNaN`), configura operaciones como funciones puras (`sumar/restar/multiplicar/dividir`), previene `Infinity` con guarda de división por cero y redondea resultados a 4 decimales para evitar periodos largos.
  - **Mejora aprobada (subtarea 3.2.1):** botón `#btn-limpiar` con función `limpiarCampos()` que vacía ambos inputs, restaura el texto/color por defecto de `#resultado-calculadora` y devuelve el foco a `#num1` (a11y). Refuerza el patrón de *estado inicial restaurable* ya presente en el Ejercicio 4.
  - Validación: compilación limpia con `npm run build` y verificación manual aprobada por el estudiante (operaciones, división por cero, decimales y limpieza de campos).
- **Fase 3 – Ejercicio 6: Temporizador Completo (Completada):**
  - Creación de `js_ejercicio_6.html` y `js_ejercicio6.js` en la raíz siguiendo el plan `plans/plan_ejercicio_06_temporizador.md`.
  - JS gestiona asincronía con `setInterval(1000ms)`/`clearInterval`, guarda anti-duplicación (`intervaloId !== null`) para impedir timers acelerados por clics múltiples, formateo `HH:MM:SS` con aritmética modular y `padStart(2, '0')`, y restauración de referencia `null` al pausar/reiniciar para permitir reanudar desde el punto exacto.
  - Validación: compilación limpia con `npm run build` y verificación manual aprobada por el estudiante (inicio, sin aceleración, pausa/reanudación y reinicio).
- **Fase 4 – Ejercicio 7: Generador de Contraseñas Aleatorias (Completada):**
  - Creación de `js_ejercicio_7.html` y `js_ejercicio7.js` en la raíz siguiendo el plan `plans/plan_ejercicio_07_password.md`.
  - JS define 4 conjuntos de caracteres (minúsculas, mayúsculas, números, símbolos), valida estrictamente longitud ≥4 (vacía, `isNaN`, <4), genera con índice aleatorio (`Math.random` × `todosLosCaracteres.length`) y copia con `navigator.clipboard` + feedback temporal.
  - **Mejora aprobada (subtarea 4.1.1):** botón `#btn-limpiar-password` ("Limpiar", `.btn--secondary.btn--sm`) junto a "Copiar" dentro de un contenedor flex para respetar el `space-between` del display. Función `limpiarPassword()` restaura longitud `12`, display inicial, oculta botones y mensaje de error, y enfoca el input (a11y). En estado de error solo se muestra "Limpiar" para poder resetear.
  - Validación: compilación limpia con `npm run build` y verificación manual aprobada por el estudiante (generación, validación de longitud, copiado y limpieza).
- **Fase 4 – Ejercicio 8: Contador de Palabras y Caracteres (Completada):**
  - Creación de `js_ejercicio_8.html` y `js_ejercicio8.js` en la raíz siguiendo el plan `plans/plan_ejercicio_08_contador_palabras.md`.
  - JS procesa el `textarea` con el evento `input`, cuenta palabras con `split(/\s+/)` (manejo robusto de espacios/líneas múltiples, con guarda de texto vacío) y caracteres con `replace(/\s/g, '').length` (exclusión estricta de espacios y saltos), más botón "Limpiar texto" que vacía, enfoca y re-renderiza. Render inicial 0/0 al cargar.
  - Validación: compilación limpia con `npm run build` y verificación manual aprobada por el estudiante (conteo exacto, espacios múltiples, saltos de línea y limpieza).
- **Fase 4 – Ejercicio 9: Lista de Tareas con LocalStorage (Completada):**
  - Creación de `js_ejercicio_9.html` y `js_ejercicio9.js` en la raíz siguiendo el plan `plans/plan_ejercicio_09_todo_localstorage.md`.
  - JS implementa el patrón de *renderizado reactivo*: el estado en memoria (`tareas`) es la única fuente de verdad, con `guardarEnStorage()` (`JSON.stringify`) y `cargarDeStorage()` (`JSON.parse`), ids únicos por `Date.now()`, checkboxes `.input-checkbox` con tachado, eliminación individual por filtrado, "Limpiar completadas" y alta por clic/Enter.
  - Validación: compilación limpia con `npm run build` y verificación manual aprobada por el estudiante (persistencia tras F5, tachado persistente, purga de completadas y borrado individual).

## 4. Mejoras y Decisiones Pendientes (Harness: Analizar → Planificar → Aprobar)
- **Ejercicio 5 – Botón "Limpiar campos" (Ejecutada y validada):**
  - **Análisis:** La calculadora carece de forma de vaciar los campos numéricos y restaurar el estado inicial; el mensaje "Esperando operación..." quedaba perdido tras un resultado.
  - **Decisión de UI:** Botón de ancho completo bajo el cuadro de resultado, separado por borde superior (`.btn--secondary`, id `btn-limpiar`, texto "Limpiar campos"), respetando la jerarquía visual del sistema Sass existente sin añadir estilos nuevos.
  - **Solución JS:** Función `limpiarCampos()` que vacía `#num1`/`#num2`, restaura el texto y color por defecto de `#resultado-calculadora` y devuelve el foco a `#num1` (a11y). Listener `click` + comentario pedagógico breve.
  - **Beneficio pedagógico:** Refuerza el concepto de *estado inicial restaurable* y la reutilización de helpers de renderizado, patrón ya usado en el botón "Limpiar filtro" del Ejercicio 4.
- **Ejercicio 7 – Botón "Limpiar" junto a "Copiar" (Ejecutada y validada):**
  - **Análisis:** El generador no ofrece forma de restaurar el estado inicial tras generar una contraseña o mostrar un error de longitud, lo que rompe la consistencia UI del proyecto (patrón de *estado inicial restaurable* ya consolidado en Ejercicios 4 y 5).
  - **Decisión de UI:** Botón `#btn-limpiar-password` (`.btn--secondary.btn--sm`, texto "Limpiar") a la derecha de "Copiar". Para que `justify-content: space-between` no separe ambos botones, se envuelven en un `<div style="display:flex; gap:0.5rem;">` en el contenedor del display. Visibilidad compartida: ocultos inicialmente; al generar aparecen ambos; en estado de error solo "Limpiar" para permitir salir de dicho estado.
  - **Solución JS:** Función `limpiarPassword()` que resetea `passwordActual = ''`, restaura `#input-longitud` a `12`, restaura texto/color por defecto de `#display-password`, oculta botones (Copiar y Limpiar) y el mensaje de error, y devuelve el foco al input (a11y). Ajuste del flujo de error para mostrar "Limpiar".
  - **Beneficio pedagógico:** Consistencia del patrón de reset entre ejercicios y manejo correcto de elementos con visibilidad condicional (`display`).
