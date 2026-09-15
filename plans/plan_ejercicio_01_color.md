# PLAN DE EJECUCIÓN: Ejercicio 1 - Cambiador de Color de Fondo

## 1. Ficha Técnica y Objetivos
* **Ejercicio:** #01 - Cambiador de Color de Fondo.
* **Objetivo Pedagógico:** Practicar eventos en JavaScript (`addEventListener`), manipulación directa de estilos del DOM (`style.backgroundColor`) y algoritmos matemáticos básicos (`Math.random`, `Math.floor`).
* **Archivos a Crear:**
  * Vista HTML: `js_ejercicio_1.html` (en la raíz del proyecto).
  * Script JS: `js_ejercicio1.js` (en la raíz del proyecto).
* **Dependencias de Estilos:** Usa los estilos globales ya compilados importando `/src/main.js`.

---

## 2. Especificación de la Vista HTML (`js_ejercicio_1.html`)

### Requisitos Estructurales y Clases CSS:
* Usar Google Fonts (`Outfit`, `Inter`, `JetBrains Mono`).
* Barra superior con botón de retorno (`.btn--back`) que enlace a `./index.html`.
* Contenedor centrado (`.container.container--narrow`, `.exercise-layout`).
* Tarjeta principal (`.exercise-card`) con:
  * Número y título: `#01` | **Cambiador de Color de Fondo**.
  * Cuadro informativo con el objetivo educativo.
  * Área interactiva (`.exercise-card__workspace`) con:
    * Botón principal con ID `btn-cambiar-color` y texto *"Cambiar color"*.
    * Visualizador de texto con ID `codigo-color` que muestre el valor actual (ej. `#0F172A`).
    * Botón secundario opcional con ID `btn-copiar-color` para copiar el valor al portapapeles.
* Carga de scripts con `type="module"`:
  * `<script type="module" src="/src/main.js"></script>`
  * `<script type="module" src="./js_ejercicio1.js"></script>`

### Código HTML de Referencia:
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Ejercicio 1: Cambiador de Color de Fondo - JavaScript" />
  <title>Ejercicio 1: Cambiador de Color | ConquerBlocks</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
</head>
<body>
  <header class="header">
    <div class="container header__content">
      <a href="./index.html" class="btn btn--back" id="btn-volver">
        &larr; Volver al catálogo
      </a>
      <span class="badge badge--dom">DOM & Estilos</span>
    </div>
  </header>

  <main class="container container--narrow">
    <section class="exercise-layout">
      <article class="exercise-card">
        <header class="exercise-card__header">
          <div class="exercise-card__title-group">
            <span class="exercise-card__number">#01</span>
            <h1 class="exercise-card__title">Cambiador de Color de Fondo</h1>
          </div>
        </header>

        <div class="exercise-card__objective">
          <strong>Objetivo:</strong> Generar dinámicamente un color aleatorio en cada clic y aplicarlo como estilo de fondo al documento (`document.body.style.backgroundColor`).
        </div>

        <div class="exercise-card__workspace" id="workspace-color">
          <p style="margin-bottom: 1rem; color: #94a3b8;">Color actual de fondo:</p>
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
            <span id="codigo-color" class="text-mono" style="font-size: 1.5rem; font-weight: 700; color: #f8fafc; background: rgba(0,0,0,0.3); padding: 0.35rem 0.85rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">#0F172A</span>
          </div>

          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center;">
            <button type="button" id="btn-cambiar-color" class="btn btn--primary">
              Cambiar color
            </button>
            <button type="button" id="btn-copiar-color" class="btn btn--secondary" title="Copiar al portapapeles">
              Copiar HEX
            </button>
          </div>
        </div>
      </article>
    </section>
  </main>

  <script type="module" src="/src/main.js"></script>
  <script type="module" src="./js_ejercicio1.js"></script>
</body>
</html>
```

---

## 3. Especificación de la Lógica JavaScript (`js_ejercicio1.js`)

### Requisitos Funcionales:
1. **Selección de Elementos del DOM:**
   * Utilizar `document.getElementById` o `document.querySelector` para capturar el botón de cambio, el visor de código y el botón de copiar.
2. **Generador de Color Aleatorio (Función Pura):**
   * Crear una función `generarColorHexAleatorio()` que devuelva una cadena en formato `#RRGGBB`.
   * Implementación recomendada con base 16:
     ```javascript
     const letras = '0123456789ABCDEF';
     let color = '#';
     for (let i = 0; i < 6; i++) {
       color += letras[Math.floor(Math.random() * 16)];
     }
     return color;
     ```
3. **Manejador de Eventos (`addEventListener`):**
   * Escuchar el evento `'click'` en `#btn-cambiar-color`.
   * En cada clic:
     1. Obtener nuevo color aleatorio.
     2. Aplicar al fondo: `document.body.style.backgroundColor = color`.
     3. Actualizar el contenido de texto: `codigoColorElem.textContent = color`.
4. **Funcionalidad Extra de Usabilidad (Copiar al portapapeles):**
   * Manejar evento `'click'` en `#btn-copiar-color` utilizando la API moderna `navigator.clipboard.writeText()`.
   * Dar feedback visual temporal (ej. cambiar texto temporalmente a *"¡Copiado!"* por 1.5 segundos).
5. **Comentarios Educativos Requeridos:**
   * Documentar la función generadora explicando el uso de `Math.random()` y `Math.floor()`.
   * Documentar el evento explicando cómo se modifica el CSS del elemento `body`.

---

## 4. Casos de Prueba y Criterios de Aceptación (DoD)
- [ ] Al cargar la página, se visualiza el botón *"Cambiar color"* y el color inicial `#0F172A`.
- [ ] Al hacer clic en *"Cambiar color"*, el fondo del navegador cambia inmediatamente a un color visible y el texto `#codigo-color` refleja exactamente dicho valor.
- [ ] La navegación con el botón *"Volver al catálogo"* redirige correctamente a `./index.html`.
- [ ] Al hacer clic en *"Copiar HEX"*, el valor se almacena en el portapapeles y se muestra feedback.
- [ ] El comando `npm run build` compila `js_ejercicio_1.html` y `js_ejercicio1.js` sin errores.

---

## 5. PROMPT LISTO PARA EL MODELO EJECUTOR (DeepSeek / OpenCode)

*(Copia y pega el siguiente bloque en tu modelo de código)*

```markdown
Eres un desarrollador Frontend experto. Tu tarea es implementar el "Ejercicio 1: Cambiador de Color de Fondo" para un proyecto con Vite y Sass en Vanilla JavaScript.

Debes crear dos archivos en la raíz del proyecto:
1. `js_ejercicio_1.html`
2. `js_ejercicio1.js`

### Requerimientos Técnicos:
1. En `js_ejercicio_1.html`:
   - Utilizar la estructura semántica moderna con las clases del sistema de diseño (`.header`, `.container`, `.exercise-card`, `.btn--primary`, `.btn--back`).
   - El botón principal DEBE tener id="btn-cambiar-color" y el texto "Cambiar color".
   - El texto que muestra el código del color DEBE tener id="codigo-color".
   - Un botón para copiar con id="btn-copiar-color".
   - Vincular al final:
     <script type="module" src="/src/main.js"></script>
     <script type="module" src="./js_ejercicio1.js"></script>

2. En `js_ejercicio1.js`:
   - Escribir código limpio, modular y pedagógico con comentarios explicativos en español.
   - Función que genera colores aleatorios en formato hexadecimal (#RRGGBB).
   - Event listener 'click' en el botón "Cambiar color" que actualiza `document.body.style.backgroundColor` y el elemento de texto con id "codigo-color".
   - Event listener 'click' en el botón "Copiar HEX" usando `navigator.clipboard.writeText` con feedback visual temporal.

Por favor, genera el código completo y listo para producción de ambos archivos.
```
