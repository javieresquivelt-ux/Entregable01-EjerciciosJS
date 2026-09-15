# PLAN DE EJECUCIÓN: Ejercicio 2 - Contador de Clics

## 1. Ficha Técnica y Objetivos
* **Ejercicio:** #02 - Contador de Clics.
* **Objetivo Pedagógico:** Manejo de eventos de clic (`addEventListener`), estado reactivo simple en JavaScript y actualización dinámica de nodos de texto en el DOM (`textContent`).
* **Archivos a Crear:**
  * Vista HTML: `js_ejercicio_2.html` (en la raíz del proyecto).
  * Script JS: `js_ejercicio2.js` (en la raíz del proyecto).
* **Dependencias de Estilos:** Cargar `/src/main.js` para los estilos globales.

---

## 2. Especificación de la Vista HTML (`js_ejercicio_2.html`)

### Requisitos Estructurales y Clases CSS:
* Usar Google Fonts (`Outfit`, `Inter`, `JetBrains Mono`).
* Barra superior con botón de retorno (`.btn--back`) hacia `./index.html`.
* Contenedor centrado (`.container.container--narrow`, `.exercise-layout`).
* Tarjeta principal (`.exercise-card`):
  * Título: `#02` | **Contador de Clics**.
  * Cuadro informativo con el objetivo.
  * Área interactiva (`.exercise-card__workspace`) con:
    * Texto inicial que muestre exactamente `"Clics: 0"` con ID `contador-texto`.
    * Botón principal con ID `btn-contar` y texto exacto `"Contar clics"`.
    * Botón secundario con ID `btn-reiniciar` y texto `"Reiniciar"`.
* Carga de módulos:
  * `<script type="module" src="/src/main.js"></script>`
  * `<script type="module" src="./js_ejercicio2.js"></script>`

### Código HTML de Referencia:
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Ejercicio 2: Contador de Clics - JavaScript" />
  <title>Ejercicio 2: Contador de Clics | ConquerBlocks</title>
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
      <span class="badge badge--events">Eventos DOM</span>
    </div>
  </header>

  <main class="container container--narrow">
    <section class="exercise-layout">
      <article class="exercise-card">
        <header class="exercise-card__header">
          <div class="exercise-card__title-group">
            <span class="exercise-card__number">#02</span>
            <h1 class="exercise-card__title">Contador de Clics</h1>
          </div>
        </header>

        <div class="exercise-card__objective">
          <strong>Objetivo:</strong> Incrementar un contador cada vez que el usuario pulse el botón y actualizar en tiempo real el texto `"Clics: X"` en el DOM.
        </div>

        <div class="exercise-card__workspace" id="workspace-contador">
          <div style="margin-bottom: 1.75rem; text-align: center;">
            <p id="contador-texto" class="text-mono" style="font-size: 2.25rem; font-weight: 700; color: #f8fafc; background: rgba(0,0,0,0.35); padding: 0.75rem 2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); display: inline-block;">
              Clics: 0
            </p>
          </div>

          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center;">
            <button type="button" id="btn-contar" class="btn btn--primary">
              Contar clics
            </button>
            <button type="button" id="btn-reiniciar" class="btn btn--secondary">
              Reiniciar
            </button>
          </div>
        </div>
      </article>
    </section>
  </main>

  <script type="module" src="/src/main.js"></script>
  <script type="module" src="./js_ejercicio2.js"></script>
</body>
</html>
```

---

## 3. Especificación de la Lógica JavaScript (`js_ejercicio2.js`)

### Requisitos Funcionales:
1. **Estado en Memoria:**
   * Variable de control del conteo: `let clics = 0;`.
2. **Selección de Elementos del DOM:**
   * `const contadorTexto = document.getElementById('contador-texto');`
   * `const btnContar = document.getElementById('btn-contar');`
   * `const btnReiniciar = document.getElementById('btn-reiniciar');`
3. **Manejador de Incremento (`btnContar`):**
   * Al hacer clic: `clics++`.
   * Actualizar texto: `contadorTexto.textContent = 'Clics: ' + clics;`.
4. **Manejador de Reinicio (`btnReiniciar`):**
   * Al hacer clic: `clics = 0`.
   * Actualizar texto: `contadorTexto.textContent = 'Clics: 0';`.
5. **Comentarios Educativos Requeridos:**
   * Explicar la importancia de separar el estado (variable numérica `clics`) de la representación visual (`textContent`).
   * Explicar el uso de `addEventListener('click', ...)`.

---

## 4. Casos de Prueba y Criterios de Aceptación (DoD)
- [ ] Al cargar la página, se muestra `"Clics: 0"`.
- [ ] Cada pulsación en `"Contar clics"` incrementa el número sucesivamente (1, 2, 3, etc.).
- [ ] Pulsar `"Reiniciar"` restablece el contador a `"Clics: 0"`.
- [ ] La navegación de regreso a `./index.html` funciona correctamente.
- [ ] El comando `npm run build` compila sin errores.

---

## 5. PROMPT LISTO PARA EL MODELO EJECUTOR (DeepSeek / OpenCode)

```markdown
Eres un desarrollador Frontend experto. Tu tarea es implementar el "Ejercicio 2: Contador de Clics" para un proyecto con Vite y Sass en Vanilla JavaScript.

Debes crear dos archivos en la raíz del proyecto:
1. `js_ejercicio_2.html`
2. `js_ejercicio2.js`

### Requerimientos Técnicos:
1. En `js_ejercicio_2.html`:
   - Utilizar la estructura semántica con las clases de diseño (`.header`, `.container`, `.exercise-card`, `.btn--primary`, `.btn--back`).
   - El nodo de texto inicial DEBE mostrar exactamente "Clics: 0" con id="contador-texto".
   - El botón de conteo DEBE tener id="btn-contar" y texto "Contar clics".
   - El botón de reinicio DEBE tener id="btn-reiniciar" y texto "Reiniciar".
   - Importar scripts modulares:
     <script type="module" src="/src/main.js"></script>
     <script type="module" src="./js_ejercicio2.js"></script>

2. En `js_ejercicio2.js`:
   - Mantener una variable de estado numérico en memoria (`let clics = 0`).
   - Escuchar evento 'click' en el botón con id "btn-contar", incrementar la variable y actualizar el texto a "Clics: ${clics}".
   - Escuchar evento 'click' en el botón con id "btn-reiniciar" para volver el contador a 0 y actualizar el DOM.
   - Incluir comentarios didácticos en español explicando el manejo de eventos y la manipulación de nodos de texto.

Por favor, genera el código completo y listo para usar de ambos archivos.
```
