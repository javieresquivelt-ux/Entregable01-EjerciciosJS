# PLAN DE EJECUCIÓN: Ejercicio 4 - Filtro de Búsqueda en Tiempo Real

## 1. Ficha Técnica y Objetivos
* **Ejercicio:** #04 - Filtro de Búsqueda en Tiempo Real.
* **Objetivo Pedagógico:** Capturar eventos de entrada continua (`input`), manipular colecciones/arrays en JavaScript y filtrar dinámicamente elementos visibles en el DOM con `.filter()` / `.includes()` y normalización de texto (`toLowerCase()`).
* **Archivos a Crear:**
  * Vista HTML: `js_ejercicio_4.html` (en la raíz del proyecto).
  * Script JS: `js_ejercicio4.js` (en la raíz del proyecto).
* **Dependencias de Estilos:** Cargar `/src/main.js`.

---

## 2. Especificación de la Vista HTML (`js_ejercicio_4.html`)

### Requisitos Estructurales y Clases CSS:
* Usar Google Fonts (`Outfit`, `Inter`, `JetBrains Mono`).
* Barra superior con botón de retorno (`.btn--back`) hacia `./index.html`.
* Contenedor centrado (`.container.container--narrow`, `.exercise-layout`).
* Tarjeta principal (`.exercise-card`):
  * Título: `#04` | **Filtro de Búsqueda en Tiempo Real**.
  * Cuadro informativo con el objetivo.
  * Barra de búsqueda con ID `input-busqueda`, clase `.input`, placeholder *"Buscar elemento (ej. Gato, Perro, Python)..."*.
  * Contador/badge de resultados (ej. *"Mostrando X de Y elementos"*).
  * Lista con ID `lista-elementos`.
  * Mensaje de "Sin coincidencias" con ID `sin-coincidencias` (oculto inicialmente).
* Carga de módulos:
  * `<script type="module" src="/src/main.js"></script>`
  * `<script type="module" src="./js_ejercicio4.js"></script>`

### Código HTML de Referencia:
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Ejercicio 4: Filtro de Búsqueda en Tiempo Real - JavaScript" />
  <title>Ejercicio 4: Filtro de Búsqueda | ConquerBlocks</title>
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
      <span class="badge badge--events">Tiempo Real</span>
    </div>
  </header>

  <main class="container container--narrow">
    <section class="exercise-layout">
      <article class="exercise-card">
        <header class="exercise-card__header">
          <div class="exercise-card__title-group">
            <span class="exercise-card__number">#04</span>
            <h1 class="exercise-card__title">Filtro de Búsqueda en Tiempo Real</h1>
          </div>
        </header>

        <div class="exercise-card__objective">
          <strong>Objetivo:</strong> Filtrar interactivamente una lista predefinida a medida que el usuario escribe en el campo de texto, utilizando el evento <code>input</code>.
        </div>

        <div class="exercise-card__workspace" style="align-items: stretch; justify-content: flex-start;">
          <!-- Barra de Búsqueda -->
          <div class="form-group" style="margin-bottom: 1.25rem;">
            <label for="input-busqueda" class="form-label">Escribe para filtrar elementos:</label>
            <input 
              type="text" 
              id="input-busqueda" 
              class="input" 
              placeholder="Escribe para filtrar (ej. Perro, Gato, León)..." 
              autocomplete="off"
            />
          </div>

          <!-- Metadatos de búsqueda -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <span id="contador-resultados" class="text-muted" style="font-size: 0.875rem;">Mostrando todos los elementos</span>
            <button type="button" id="btn-limpiar" class="btn btn--secondary btn--sm" style="display: none;">Limpiar filtro</button>
          </div>

          <!-- Mensaje sin resultados -->
          <p id="sin-coincidencias" class="text-muted" style="display: none; text-align: center; padding: 2rem 0;">
            No se encontraron elementos que coincidan con la búsqueda.
          </p>

          <!-- Lista de Elementos -->
          <ul id="lista-elementos" style="display: flex; flex-direction: column; gap: 0.5rem; width: 100%;"></ul>
        </div>
      </article>
    </section>
  </main>

  <script type="module" src="/src/main.js"></script>
  <script type="module" src="./js_ejercicio4.js"></script>
</body>
</html>
```

---

## 3. Especificación de la Lógica JavaScript (`js_ejercicio4.js`)

### Requisitos Funcionales:
1. **Colección de Datos Predefinida:**
   ```javascript
   const elementosPredefinidos = [
     'Perro', 'Gato', 'Pez', 'Caballo', 'León', 'Tigre',
     'Elefante', 'Delfín', 'Águila', 'Lobo', 'Oso', 'Panda'
   ];
   ```
2. **Función de Renderizado (`renderizarLista(items)`):**
   * Limpiar el contenedor: `listaElem.innerHTML = '';`.
   * Si `items.length === 0`: mostrar `#sin-coincidencias`.
   * Si `items.length > 0`: ocultar `#sin-coincidencias` y recorrer `items` creando un `<li>` con estilo de tarjeta para cada uno.
   * Actualizar el texto de `#contador-resultados`: `"Mostrando ${items.length} de ${elementosPredefinidos.length} elementos"`.
3. **Escucha del Evento `input`:**
   * En `#input-busqueda`, escuchar el evento `'input'`:
     ```javascript
     const termino = inputBusqueda.value.toLowerCase().trim();
     const filtrados = elementosPredefinidos.filter(item => 
       item.toLowerCase().includes(termino)
     );
     renderizarLista(filtrados);
     ```
4. **Control del Botón Limpiar:**
   * Mostrar `#btn-limpiar` si hay texto en el input.
   * Al pulsar limpiar: vaciar input, enfocar y llamar `renderizarLista(elementosPredefinidos)`.
5. **Comentarios Educativos Requeridos:**
   * Explicar la diferencia entre el evento `'input'` (dispara inmediatamente por cada tecla pulsada) y `'change'` (espera pérdida de foco).
   * Explicar el método `.filter()` y la normalización con `.toLowerCase()`.

---

## 4. Casos de Prueba y Criterios de Aceptación (DoD)
- [ ] Al cargar la página, se muestran los 12 elementos predefinidos.
- [ ] Si el usuario escribe `"ga"`, únicamente deben mostrarse `"Gato"` y `"Águila"` (si coincide) sin importar mayúsculas o minúsculas.
- [ ] Si escribe un término inexistente (ej. `"xyz"`), la lista queda vacía y se muestra el mensaje de sin coincidencias.
- [ ] Al borrar el texto del input, la lista se restablece mostrando todos los elementos.
- [ ] Compilación sin errores con `npm run build`.

---

## 5. PROMPT LISTO PARA EL MODELO EJECUTOR (DeepSeek / OpenCode)

```markdown
Eres un desarrollador Frontend experto. Tu tarea es implementar el "Ejercicio 4: Filtro de Búsqueda en Tiempo Real" para un proyecto con Vite y Sass en Vanilla JavaScript.

Debes crear dos archivos en la raíz del proyecto:
1. `js_ejercicio_4.html`
2. `js_ejercicio4.js`

### Requerimientos Técnicos:
1. En `js_ejercicio_4.html`:
   - Utilizar las clases del sistema de diseño (`.header`, `.container`, `.exercise-card`, `.input`, `.btn--secondary`).
   - Campo de búsqueda con id="input-busqueda".
   - Contenedor de la lista con id="lista-elementos".
   - Párrafo de resultados vacíos con id="sin-coincidencias".
   - Indicador con id="contador-resultados".
   - Enlace a módulos:
     <script type="module" src="/src/main.js"></script>
     <script type="module" src="./js_ejercicio4.js"></script>

2. En `js_ejercicio4.js`:
   - Definir un array inicial con al menos 10 elementos variados (incluyendo "Perro", "Gato", "Pez").
   - Crear una función para renderizar la lista dinámicamente en el DOM.
   - Escuchar el evento 'input' en el campo de búsqueda para filtrar la lista en tiempo real usando .filter(), .toLowerCase() y .includes().
   - Mostrar mensaje informativo cuando no existan coincidencias.
   - Incluir comentarios didácticos en español explicando el uso de eventos 'input' y filtrado de arrays.

Por favor, genera el código completo y listo para producción de ambos archivos.
```
