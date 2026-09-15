# PLAN DE EJECUCIÓN: Ejercicio 8 - Contador de Palabras y Caracteres

## 1. Ficha Técnica y Objetivos
* **Ejercicio:** #08 - Contador de Palabras y Caracteres en Tiempo Real.
* **Objetivo Pedagógico:** Procesamiento y sanitización de texto con Expresiones Regulares (`RegExp`), manipulación del evento `input` en elementos multilínea (`textarea`) y actualización sincronizada de métricas en el DOM.
* **Archivos a Crear:**
  * Vista HTML: `js_ejercicio_8.html` (en la raíz del proyecto).
  * Script JS: `js_ejercicio8.js` (en la raíz del proyecto).
* **Dependencias de Estilos:** Cargar `/src/main.js`.

---

## 2. Especificación de la Vista HTML (`js_ejercicio_8.html`)

### Requisitos Estructurales y Clases CSS:
* Usar Google Fonts (`Outfit`, `Inter`, `JetBrains Mono`).
* Barra superior con botón de retorno (`.btn--back`) hacia `./index.html`.
* Contenedor centrado (`.container.container--narrow`, `.exercise-layout`).
* Tarjeta principal (`.exercise-card`):
  * Título: `#08` | **Contador de Palabras y Caracteres**.
  * Cuadro informativo con el objetivo.
  * Área de texto multilínea:
    * ID `input-parrafo`, clase `.input.textarea`, placeholder *"Escribe o pega aquí tu texto o párrafo..."*.
  * Panel de métricas en tiempo real:
    * Contador de Palabras con ID `contador-palabras`, valor inicial `"0"`.
    * Contador de Caracteres con ID `contador-caracteres`, valor inicial `"0"`.
    * Aclaratoria visible: *"Los caracteres no incluyen espacios ni saltos de línea."*
* Carga de módulos:
  * `<script type="module" src="/src/main.js"></script>`
  * `<script type="module" src="./js_ejercicio8.js"></script>`

### Código HTML de Referencia:
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Ejercicio 8: Contador de Palabras y Caracteres - JavaScript" />
  <title>Ejercicio 8: Contador de Palabras | ConquerBlocks</title>
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
      <span class="badge badge--dom">Texto & RegExp</span>
    </div>
  </header>

  <main class="container container--narrow">
    <section class="exercise-layout">
      <article class="exercise-card">
        <header class="exercise-card__header">
          <div class="exercise-card__title-group">
            <span class="exercise-card__number">#08</span>
            <h1 class="exercise-card__title">Contador de Palabras y Caracteres</h1>
          </div>
        </header>

        <div class="exercise-card__objective">
          <strong>Objetivo:</strong> Contar en tiempo real las palabras ingresadas y los caracteres totales, <em>excluyendo estrictamente</em> espacios en blanco y saltos de línea.
        </div>

        <div class="exercise-card__workspace" style="align-items: stretch;">
          <!-- Área de Texto -->
          <div class="form-group" style="margin-bottom: 1.5rem;">
            <label for="input-parrafo" class="form-label">Ingresa tu texto:</label>
            <textarea 
              id="input-parrafo" 
              class="input textarea" 
              placeholder="Comienza a escribir aquí para calcular métricas..."
              rows="6"
            ></textarea>
          </div>

          <!-- Métricas en vivo -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
            <!-- Caja Palabras -->
            <div style="background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 1.25rem; text-align: center;">
              <span class="text-muted" style="font-size: 0.875rem; display: block; margin-bottom: 0.35rem;">Palabras:</span>
              <span id="contador-palabras" class="text-mono" style="font-size: 2.25rem; font-weight: 700; color: #a5b4fc;">0</span>
            </div>

            <!-- Caja Caracteres -->
            <div style="background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 1.25rem; text-align: center;">
              <span class="text-muted" style="font-size: 0.875rem; display: block; margin-bottom: 0.35rem;">Caracteres (sin espacios):</span>
              <span id="contador-caracteres" class="text-mono" style="font-size: 2.25rem; font-weight: 700; color: #67e8f9;">0</span>
            </div>
          </div>

          <!-- Botón de limpieza rápida -->
          <div style="text-align: right;">
            <button type="button" id="btn-limpiar-texto" class="btn btn--secondary btn--sm">
              Limpiar texto
            </button>
          </div>
        </div>
      </article>
    </section>
  </main>

  <script type="module" src="/src/main.js"></script>
  <script type="module" src="./js_ejercicio8.js"></script>
</body>
</html>
```

---

## 3. Especificación de la Lógica JavaScript (`js_ejercicio8.js`)

### Requisitos Funcionales:
1. **Selección de Elementos:**
   * Textarea `#input-parrafo`.
   * Contadores `#contador-palabras` y `#contador-caracteres`.
   * Botón `#btn-limpiar-texto`.
2. **Algoritmo de Conteo de Palabras:**
   * Obtener el texto con `const texto = inputParrafo.value.trim();`.
   * Si `texto === ''`, palabras = 0.
   * Si no está vacío: separar por cualquier secuencia de espacios o saltos de línea usando expresión regular:
     `const palabras = texto.split(/\s+/).length;`
3. **Algoritmo de Conteo de Caracteres (sin espacios ni saltos de línea):**
   * Eliminar todos los caracteres de espacio en blanco (`\s` incluye espacios, tabs y saltos de línea `\n`, `\r`):
     `const caracteresSinEspacios = inputParrafo.value.replace(/\s/g, '').length;`
4. **Manejador de Eventos:**
   * Escuchar `'input'` en `#input-parrafo` y ejecutar los dos cálculos simultáneamente, actualizando `textContent`.
   * Escuchar `'click'` en `#btn-limpiar-texto` para vaciar el textarea, enfocarlo y reiniciar los contadores a `0`.
5. **Comentarios Educativos Requeridos:**
   * Explicar el uso del metacarácter `\s` en regex para abarcar espacios y saltos de línea.
   * Explicar por qué `split(/\s+/)` es superior a `split(' ')` ante múltiples espacios seguidos.

---

## 4. Casos de Prueba y Criterios de Aceptación (DoD)
- [ ] Textarea vacío muestra 0 palabras y 0 caracteres.
- [ ] Con texto `"Hola mundo"`, cuenta exactamente 2 palabras y 9 caracteres (10 caracteres menos el espacio).
- [ ] Múltiples espacios consecutivos (ej. `"Hola     mundo"`) siguen contando como 2 palabras.
- [ ] Saltos de línea entre palabras no alteran el conteo ni suman como caracteres válidos.
- [ ] El botón "Limpiar texto" restablece el estado.
- [ ] Compilación sin errores con `npm run build`.

---

## 5. PROMPT LISTO PARA EL MODELO EJECUTOR (DeepSeek / OpenCode)

```markdown
Eres un desarrollador Frontend experto. Tu tarea es implementar el "Ejercicio 8: Contador de Palabras y Caracteres" para un proyecto con Vite y Sass en Vanilla JavaScript.

Debes crear dos archivos en la raíz del proyecto:
1. `js_ejercicio_8.html`
2. `js_ejercicio8.js`

### Requerimientos Técnicos:
1. En `js_ejercicio_8.html`:
   - Textarea con id="input-parrafo".
   - Elemento para mostrar el total de palabras con id="contador-palabras" (inicialmente 0).
   - Elemento para mostrar el total de caracteres con id="contador-caracteres" (inicialmente 0).
   - Botón opcional con id="btn-limpiar-texto".
   - Enlace a módulos:
     <script type="module" src="/src/main.js"></script>
     <script type="module" src="./js_ejercicio8.js"></script>

2. En `js_ejercicio8.js`:
   - Escuchar en tiempo real el evento 'input' en el textarea.
   - Contar las palabras separadas por espacios o saltos de línea usando expresiones regulares (split(/\s+/)), controlando el caso de texto vacío para mostrar 0.
   - Contar los caracteres EXCLUYENDO rigurosamente espacios en blanco y saltos de línea usando replace(/\s/g, '').length.
   - Comentarios pedagógicos en español explicando el uso de RegExp y el evento 'input'.

Por favor, genera el código completo y listo para producción de ambos archivos.
```
