# PLAN DE EJECUCIÓN: Ejercicio 3 - Lista Dinámica

## 1. Ficha Técnica y Objetivos
* **Ejercicio:** #03 - Lista Dinámica.
* **Objetivo Pedagógico:** Creación, inserción y remoción programática de nodos en el árbol DOM mediante `document.createElement`, `appendChild` / `append` y `element.remove()`, además de gestión de formularios simples y sanitización de texto (`trim()`).
* **Archivos a Crear:**
  * Vista HTML: `js_ejercicio_3.html` (en la raíz del proyecto).
  * Script JS: `js_ejercicio3.js` (en la raíz del proyecto).
* **Dependencias de Estilos:** Cargar `/src/main.js`.

---

## 2. Especificación de la Vista HTML (`js_ejercicio_3.html`)

### Requisitos Estructurales y Clases CSS:
* Usar Google Fonts (`Outfit`, `Inter`, `JetBrains Mono`).
* Barra superior con botón de retorno (`.btn--back`) hacia `./index.html`.
* Contenedor centrado (`.container.container--narrow`, `.exercise-layout`).
* Tarjeta principal (`.exercise-card`):
  * Título: `#03` | **Lista Dinámica**.
  * Cuadro informativo con el objetivo.
  * Área de entrada:
    * Campo de texto con ID `input-tarea`, clase `.input`, placeholder *"Escribe un elemento..."*.
    * Botón con ID `btn-agregar`, clase `.btn.btn--primary`, texto exacto `"Agregar"`.
  * Área de visualización:
    * Lista desordenada con ID `lista-dinamica`, que comience vacía.
    * Mensaje o estado vacío accesible cuando la lista no tenga elementos.
* Carga de módulos:
  * `<script type="module" src="/src/main.js"></script>`
  * `<script type="module" src="./js_ejercicio3.js"></script>`

### Código HTML de Referencia:
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Ejercicio 3: Lista Dinámica - JavaScript" />
  <title>Ejercicio 3: Lista Dinámica | ConquerBlocks</title>
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
      <span class="badge badge--dom">Nodos DOM</span>
    </div>
  </header>

  <main class="container container--narrow">
    <section class="exercise-layout">
      <article class="exercise-card">
        <header class="exercise-card__header">
          <div class="exercise-card__title-group">
            <span class="exercise-card__number">#03</span>
            <h1 class="exercise-card__title">Lista Dinámica</h1>
          </div>
        </header>

        <div class="exercise-card__objective">
          <strong>Objetivo:</strong> Crear dinámicamente elementos de lista (`<li>`) con un botón para eliminar cada uno individualmente al interactuar con el DOM.
        </div>

        <div class="exercise-card__workspace" style="align-items: stretch; justify-content: flex-start;">
          <!-- Barra de entrada -->
          <div style="display: flex; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
            <input 
              type="text" 
              id="input-tarea" 
              class="input" 
              placeholder="Escribe un nuevo elemento..." 
              style="flex: 1; min-width: 220px;"
            />
            <button type="button" id="btn-agregar" class="btn btn--primary">
              Agregar
            </button>
          </div>

          <!-- Mensaje de lista vacía -->
          <p id="mensaje-vacio" class="text-muted" style="text-align: center; padding: 1rem 0;">
            No hay elementos en la lista. ¡Agrega el primero!
          </p>

          <!-- Lista Dinámica -->
          <ul id="lista-dinamica" style="display: flex; flex-direction: column; gap: 0.65rem; width: 100%;"></ul>
        </div>
      </article>
    </section>
  </main>

  <script type="module" src="/src/main.js"></script>
  <script type="module" src="./js_ejercicio3.js"></script>
</body>
</html>
```

---

## 3. Especificación de la Lógica JavaScript (`js_ejercicio3.js`)

### Requisitos Funcionales:
1. **Selección de Elementos:**
   * `inputTarea` (`#input-tarea`), `btnAgregar` (`#btn-agregar`), `listaDinamica` (`#lista-dinamica`), `mensajeVacio` (`#mensaje-vacio`).
2. **Función de Creación de Elementos:**
   * Validar que `inputTarea.value.trim()` no esté vacío. Si está vacío, no hacer nada o retornar.
   * Crear el nodo contenedor: `const li = document.createElement('li');`.
   * Asignar estilos en línea o clases: contenedor flex horizontal, con fondo semitransparente, padding y borde redondeado (`justify-content: space-between`).
   * Crear nodo de texto: `const spanTexto = document.createElement('span');` y asignar `spanTexto.textContent = texto;`.
   * Crear botón de eliminación:
     ```javascript
     const btnEliminar = document.createElement('button');
     btnEliminar.textContent = 'Eliminar';
     btnEliminar.className = 'btn btn--danger btn--sm';
     ```
   * Asignar evento al botón de eliminación:
     ```javascript
     btnEliminar.addEventListener('click', () => {
       li.remove();
       actualizarEstadoVacio();
     });
     ```
   * Ensamblar y adjuntar: `li.appendChild(spanTexto); li.appendChild(btnEliminar); listaDinamica.appendChild(li);`.
   * Limpiar el input (`inputTarea.value = ''`) y devolver el foco (`inputTarea.focus()`).
3. **Manejo del Estado Vacío:**
   * Función `actualizarEstadoVacio()` que oculte `#mensaje-vacio` si `listaDinamica.children.length > 0`, o lo muestre en caso contrario.
4. **Disparadores de Eventos:**
   * Click en `#btn-agregar`.
   * Tecla `Enter` en `#input-tarea` (`keydown` o `keyup`).
5. **Comentarios Educativos Requeridos:**
   * Explicar el ciclo de vida: creación (`createElement`), configuración de propiedades, inserción (`appendChild`) y remoción (`remove`).

---

## 4. Casos de Prueba y Criterios de Aceptación (DoD)
- [ ] Si el input está vacío o contiene solo espacios, pulsar "Agregar" no añade elementos en blanco.
- [ ] Al escribir un texto válido y pulsar "Agregar", el elemento aparece en la lista con su botón "Eliminar".
- [ ] Presionar la tecla Enter en el input también dispara la adición del elemento.
- [ ] Al hacer clic en el botón "Eliminar" de cualquier elemento, únicamente se remueve ese elemento de la lista.
- [ ] Si se eliminan todos los elementos, reaparece el mensaje de lista vacía.
- [ ] Compilación limpia con `npm run build`.

---

## 5. PROMPT LISTO PARA EL MODELO EJECUTOR (DeepSeek / OpenCode)

```markdown
Eres un desarrollador Frontend experto. Tu tarea es implementar el "Ejercicio 3: Lista Dinámica" para un proyecto con Vite y Sass en Vanilla JavaScript.

Debes crear dos archivos en la raíz del proyecto:
1. `js_ejercicio_3.html`
2. `js_ejercicio3.js`

### Requerimientos Técnicos:
1. En `js_ejercicio_3.html`:
   - Utilizar las clases del sistema de diseño (`.header`, `.container`, `.exercise-card`, `.btn--primary`, `.btn--danger`, `.input`).
   - Campo de texto con id="input-tarea".
   - Botón de adición con id="btn-agregar" y texto "Agregar".
   - Contenedor de lista con id="lista-dinamica".
   - Párrafo informativo de lista vacía con id="mensaje-vacio".
   - Enlace a módulos:
     <script type="module" src="/src/main.js"></script>
     <script type="module" src="./js_ejercicio3.js"></script>

2. En `js_ejercicio3.js`:
   - Validar que el texto ingresado no esté vacío usando .trim().
   - Crear nodos dinámicamente con `document.createElement('li')`, asignándoles el texto ingresado y un botón con texto "Eliminar" y clase "btn btn--danger btn--sm".
   - Agregar listener de evento 'click' al botón de eliminación para remover el elemento con `li.remove()` y actualizar el estado visual de la lista.
   - Permitir agregar elementos tanto al hacer click en "Agregar" como al presionar la tecla "Enter" en el input.
   - Limpiar el campo y restablecer el foco tras cada inserción.
   - Incluir comentarios didácticos en español explicando las APIs del DOM usadas.

Por favor, genera el código completo y listo para producción de ambos archivos.
```
