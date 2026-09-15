# PLAN DE EJECUCIÓN: Ejercicio 5 - Calculadora Sencilla

## 1. Ficha Técnica y Objetivos
* **Ejercicio:** #05 - Calculadora Sencilla con Validaciones.
* **Objetivo Pedagógico:** Captura y parseo de inputs numéricos (`parseFloat`, `Number`), ejecución de operaciones aritméticas básicas, validación preventiva de tipos (`isNaN`) y manejo defensivo de casos límite (división por cero y campos en blanco).
* **Archivos a Crear:**
  * Vista HTML: `js_ejercicio_5.html` (en la raíz del proyecto).
  * Script JS: `js_ejercicio5.js` (en la raíz del proyecto).
* **Dependencias de Estilos:** Cargar `/src/main.js`.

---

## 2. Especificación de la Vista HTML (`js_ejercicio_5.html`)

### Requisitos Estructurales y Clases CSS:
* Usar Google Fonts (`Outfit`, `Inter`, `JetBrains Mono`).
* Barra superior con botón de retorno (`.btn--back`) hacia `./index.html`.
* Contenedor centrado (`.container.container--narrow`, `.exercise-layout`).
* Tarjeta principal (`.exercise-card`):
  * Título: `#05` | **Calculadora Sencilla**.
  * Cuadro informativo con el objetivo.
  * Formulario con:
    * Dos campos numéricos: ID `num1` y `num2`, clase `.input`, `type="number"`, `step="any"`.
    * Grupo de 4 botones de acción con texto exacto:
      * `"Sumar"` (ID `btn-sumar`)
      * `"Restar"` (ID `btn-restar`)
      * `"Multiplicar"` (ID `btn-multiplicar`)
      * `"Dividir"` (ID `btn-dividir`)
  * Área de visualización de resultado y mensajes de validación con ID `resultado-calculadora`.
* Carga de módulos:
  * `<script type="module" src="/src/main.js"></script>`
  * `<script type="module" src="./js_ejercicio5.js"></script>`

### Código HTML de Referencia:
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Ejercicio 5: Calculadora Sencilla - JavaScript" />
  <title>Ejercicio 5: Calculadora Sencilla | ConquerBlocks</title>
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
      <span class="badge badge--dom">Formularios</span>
    </div>
  </header>

  <main class="container container--narrow">
    <section class="exercise-layout">
      <article class="exercise-card">
        <header class="exercise-card__header">
          <div class="exercise-card__title-group">
            <span class="exercise-card__number">#05</span>
            <h1 class="exercise-card__title">Calculadora Sencilla</h1>
          </div>
        </header>

        <div class="exercise-card__objective">
          <strong>Objetivo:</strong> Implementar cuatro operaciones aritméticas básicas validando entradas numéricas vacías y evitando la indeterminación matemática por división entre cero.
        </div>

        <div class="exercise-card__workspace" style="align-items: stretch;">
          <!-- Entradas numéricas -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
            <div class="form-group" style="margin-bottom: 0;">
              <label for="num1" class="form-label">Primer número:</label>
              <input type="number" id="num1" class="input" placeholder="Ej. 10" step="any" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label for="num2" class="form-label">Segundo número:</label>
              <input type="number" id="num2" class="input" placeholder="Ej. 5" step="any" />
            </div>
          </div>

          <!-- Botones de Operaciones -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem; margin-bottom: 1.75rem;">
            <button type="button" id="btn-sumar" class="btn btn--primary">Sumar</button>
            <button type="button" id="btn-restar" class="btn btn--primary">Restar</button>
            <button type="button" id="btn-multiplicar" class="btn btn--primary">Multiplicar</button>
            <button type="button" id="btn-dividir" class="btn btn--primary">Dividir</button>
          </div>

          <!-- Cuadro de Resultado -->
          <div style="background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 1.25rem; text-align: center;">
            <span class="text-muted" style="font-size: 0.875rem; display: block; margin-bottom: 0.35rem;">Resultado:</span>
            <p id="resultado-calculadora" class="text-mono" style="font-size: 1.75rem; font-weight: 700; color: #f8fafc; min-height: 2.2rem; display: flex; align-items: center; justify-content: center;">
              Esperando operación...
            </p>
          </div>
        </div>
      </article>
    </section>
  </main>

  <script type="module" src="/src/main.js"></script>
  <script type="module" src="./js_ejercicio5.js"></script>
</body>
</html>
```

---

## 3. Especificación de la Lógica JavaScript (`js_ejercicio5.js`)

### Requisitos Funcionales:
1. **Función de Lectura y Validación (`obtenerNumeros()`):**
   * Leer los valores de `#num1` y `#num2`.
   * Si alguno de los campos está vacío (`value.trim() === ''`):
     * Retornar un error descriptivo: `"Por favor, ingresa ambos números."`.
   * Parsear usando `parseFloat()`.
   * Si alguno resulta `isNaN()`:
     * Retornar error: `"Ingresa valores numéricos válidos."`.
   * Si todo es correcto, devolver objeto `{ n1, n2, valido: true }`.
2. **Ejecución de Operaciones:**
   * **Suma:** `n1 + n2`
   * **Resta:** `n1 - n2`
   * **Multiplicación:** `n1 * n2`
   * **División:**
     * Validar si `n2 === 0`.
     * Si `n2 === 0`, mostrar error en color rojo: `"Error: No es posible dividir entre cero."`.
     * Si no, calcular `n1 / n2` (redondear a máximo 4 decimales si tiene decimales periódicos).
3. **Presentación de Respuestas:**
   * Mostrar el valor resultante de forma clara: `${n1} + ${n2} = ${resultado}`.
4. **Comentarios Educativos Requeridos:**
   * Explicar por qué los inputs `type="number"` devuelven strings en `.value` y la necesidad de usar `parseFloat()`.
   * Explicar la validación preventiva para evitar `Infinity` al dividir por cero.

---

## 4. Casos de Prueba y Criterios de Aceptación (DoD)
- [ ] Con campos vacíos, presionar cualquier botón muestra mensaje de error sin romper el código.
- [ ] Con `10` y `5`, "Sumar" da `15`, "Restar" da `5`, "Multiplicar" da `50`, "Dividir" da `2`.
- [ ] Con `10` y `0`, pulsar "Dividir" muestra explícitamente el error de división entre cero.
- [ ] Acepta números decimales (ej. `3.5 + 1.2 = 4.7`).
- [ ] Compilación sin errores con `npm run build`.

---

## 5. PROMPT LISTO PARA EL MODELO EJECUTOR (DeepSeek / OpenCode)

```markdown
Eres un desarrollador Frontend experto. Tu tarea es implementar el "Ejercicio 5: Calculadora Sencilla" para un proyecto con Vite y Sass en Vanilla JavaScript.

Debes crear dos archivos en la raíz del proyecto:
1. `js_ejercicio_5.html`
2. `js_ejercicio5.js`

### Requerimientos Técnicos:
1. En `js_ejercicio_5.html`:
   - Dos campos de entrada tipo number con id="num1" y id="num2".
   - Cuatro botones con los textos exactos: "Sumar" (id="btn-sumar"), "Restar" (id="btn-restar"), "Multiplicar" (id="btn-multiplicar"), "Dividir" (id="btn-dividir").
   - Un área para mostrar el resultado o mensaje de error con id="resultado-calculadora".
   - Enlace a módulos:
     <script type="module" src="/src/main.js"></script>
     <script type="module" src="./js_ejercicio5.js"></script>

2. En `js_ejercicio5.js`:
   - Validar que ambos campos contengan números válidos antes de operar (evitar NaN y campos vacíos).
   - Validar explícitamente el caso de división por cero y mostrar un mensaje de error legible.
   - Mostrar el resultado formateado en el DOM.
   - Comentar didácticamente en español el código explicando conversiones de tipo con parseFloat() y validaciones matemáticas.

Por favor, genera el código completo y listo para producción de ambos archivos.
```
