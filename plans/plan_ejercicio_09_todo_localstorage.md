# PLAN DE EJECUCIÓN: Ejercicio 9 - Lista de Tareas con LocalStorage

## 1. Ficha Técnica y Objetivos
* **Ejercicio:** #09 - Lista de Tareas con LocalStorage.
* **Objetivo Pedagógico:** Persistencia en el cliente mediante la Web Storage API (`localStorage`), serialización y deserialización de estructuras de datos con `JSON.stringify()` y `JSON.parse()`, gestión de estado y renderizado dinámico en el DOM con filtrado y depuración masiva.
* **Archivos a Crear:**
  * Vista HTML: `js_ejercicio_9.html` (en la raíz del proyecto).
  * Script JS: `js_ejercicio9.js` (en la raíz del proyecto).
* **Dependencias de Estilos:** Cargar `/src/main.js`.

---

## 2. Especificación de la Vista HTML (`js_ejercicio_9.html`)

### Requisitos Estructurales y Clases CSS:
* Usar Google Fonts (`Outfit`, `Inter`, `JetBrains Mono`).
* Barra superior con botón de retorno (`.btn--back`) hacia `./index.html`.
* Contenedor centrado (`.container.container--narrow`, `.exercise-layout`).
* Tarjeta principal (`.exercise-card`):
  * Título: `#09` | **Tareas con LocalStorage**.
  * Cuadro informativo con el objetivo.
  * Formulario de alta:
    * Campo de entrada con ID `input-nueva-tarea`, clase `.input`, placeholder *"¿Qué tarea necesitas recordar?..."*.
    * Botón de adición con ID `btn-agregar-tarea`, clase `.btn.btn--primary`, texto `"Agregar"`.
  * Barra de acciones y filtros:
    * Contador de tareas pendientes/totales con ID `resumen-tareas`.
    * Botón con ID `btn-limpiar-completadas`, clase `.btn.btn--danger.btn--sm`, texto `"Limpiar completadas"`.
  * Contenedor de la lista de tareas:
    * Lista desordenada con ID `lista-tareas`.
    * Mensaje accesible cuando no haya tareas registradas con ID `mensaje-sin-tareas`.
* Carga de módulos:
  * `<script type="module" src="/src/main.js"></script>`
  * `<script type="module" src="./js_ejercicio9.js"></script>`

### Código HTML de Referencia:
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Ejercicio 9: Lista de Tareas con LocalStorage - JavaScript" />
  <title>Ejercicio 9: Lista de Tareas | ConquerBlocks</title>
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
      <span class="badge badge--storage">Web Storage</span>
    </div>
  </header>

  <main class="container container--narrow">
    <section class="exercise-layout">
      <article class="exercise-card">
        <header class="exercise-card__header">
          <div class="exercise-card__title-group">
            <span class="exercise-card__number">#09</span>
            <h1 class="exercise-card__title">Lista de Tareas con LocalStorage</h1>
          </div>
        </header>

        <div class="exercise-card__objective">
          <strong>Objetivo:</strong> Gestionar una lista de tareas con checkboxes de completado que persistan en <code>localStorage</code> incluso al recargar o cerrar la página, con opción de purgar tareas completadas.
        </div>

        <div class="exercise-card__workspace" style="align-items: stretch; justify-content: flex-start;">
          <!-- Barra de Entrada -->
          <div style="display: flex; gap: 0.75rem; margin-bottom: 1.25rem; flex-wrap: wrap;">
            <input 
              type="text" 
              id="input-nueva-tarea" 
              class="input" 
              placeholder="Escribe una nueva tarea pendiente..." 
              style="flex: 1; min-width: 220px;"
            />
            <button type="button" id="btn-agregar-tarea" class="btn btn--primary">
              Agregar
            </button>
          </div>

          <!-- Barra de Controles / Estado -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.75rem;">
            <span id="resumen-tareas" class="text-muted" style="font-size: 0.875rem;">0 tareas registradas</span>
            <button type="button" id="btn-limpiar-completadas" class="btn btn--danger btn--sm">
              Limpiar completadas
            </button>
          </div>

          <!-- Mensaje cuando no hay tareas -->
          <p id="mensaje-sin-tareas" class="text-muted" style="text-align: center; padding: 2rem 0;">
            No tienes tareas pendientes. ¡Crea una nueva arriba!
          </p>

          <!-- Lista de Tareas -->
          <ul id="lista-tareas" style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%;"></ul>
        </div>
      </article>
    </section>
  </main>

  <script type="module" src="/src/main.js"></script>
  <script type="module" src="./js_ejercicio9.js"></script>
</body>
</html>
```

---

## 3. Especificación de la Lógica JavaScript (`js_ejercicio9.js`)

### Requisitos Funcionales:
1. **Clave de Storage y Estado en Memoria:**
   ```javascript
   const CLAVE_STORAGE = 'conquer_tareas_entregable_1';
   let tareas = []; // Array de objetos { id: number, texto: string, completada: boolean }
   ```
2. **Carga y Guardado en LocalStorage:**
   * **`guardarEnStorage()`:**
     ```javascript
     localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
     ```
   * **`cargarDeStorage()`:**
     ```javascript
     const datosGuardados = localStorage.getItem(CLAVE_STORAGE);
     tareas = datosGuardados ? JSON.parse(datosGuardados) : [];
     ```
3. **Renderizado Reactivo (`renderizarTareas()`):**
   * Limpiar `#lista-tareas`.
   * Alternar visibilidad de `#mensaje-sin-tareas` según `tareas.length === 0`.
   * Actualizar texto de `#resumen-tareas` (ej. `"2 de 5 completadas"`).
   * Para cada tarea:
     * Crear contenedor `li` estilizado.
     * Crear checkbox con `checked = tarea.completada` y clase `input-checkbox`.
     * Crear texto `span`: si `tarea.completada === true`, aplicar estilo tachado (`text-decoration: line-through; opacity: 0.6;`).
     * Crear botón individual de eliminación (`btn btn--danger btn--sm`).
     * Evento en checkbox: alternar `tarea.completada = !tarea.completada`, llamar `guardarEnStorage()` y volver a renderizar.
     * Evento en botón eliminar: filtrar tarea por su `id`, guardar y renderizar.
4. **Adición de Tareas:**
   * Validar que el texto no esté vacío (`.trim()`).
   * Crear nuevo objeto `{ id: Date.now(), texto, completada: false }`.
   * Agregar a `tareas`, guardar en LocalStorage, limpiar input y renderizar.
   * Soportar tanto clic en `#btn-agregar-tarea` como tecla `Enter`.
5. **Limpiar Completadas (`#btn-limpiar-completadas`):**
   * Filtrar manteniendo solo las no completadas:
     ```javascript
     tareas = tareas.filter(tarea => !tarea.completada);
     guardarEnStorage();
     renderizarTareas();
     ```
6. **Comentarios Educativos Requeridos:**
   * Explicar que `localStorage` solo almacena cadenas de texto, requiriendo `JSON.stringify` y `JSON.parse`.
   * Explicar el uso de identificadores únicos basados en timestamp (`Date.now()`).

---

## 4. Casos de Prueba y Criterios de Aceptación (DoD)
- [ ] Al agregar una tarea, aparece en la lista y se guarda en `localStorage`.
- [ ] Al recargar la página en el navegador (F5), todas las tareas persisten con su texto y estado de checkbox intacto.
- [ ] Al marcar el checkbox de una tarea, se tacha visualmente y su estado persiste al recargar.
- [ ] Al pulsar *"Limpiar completadas"*, se eliminan todas las tareas marcadas como completadas, manteniéndose las pendientes.
- [ ] El botón eliminar de cada tarea la remueve individualmente.
- [ ] Compilación sin errores con `npm run build`.

---

## 5. PROMPT LISTO PARA EL MODELO EJECUTOR (DeepSeek / OpenCode)

```markdown
Eres un desarrollador Frontend experto. Tu tarea es implementar el "Ejercicio 9: Lista de Tareas con LocalStorage" para un proyecto con Vite y Sass en Vanilla JavaScript.

Debes crear dos archivos en la raíz del proyecto:
1. `js_ejercicio_9.html`
2. `js_ejercicio9.js`

### Requerimientos Técnicos:
1. En `js_ejercicio_9.html`:
   - Campo para escribir la tarea con id="input-nueva-tarea".
   - Botón para agregar con id="btn-agregar-tarea" y texto "Agregar".
   - Botón para depurar completadas con id="btn-limpiar-completadas" y texto "Limpiar completadas".
   - Contenedor de la lista con id="lista-tareas".
   - Mensaje para lista vacía con id="mensaje-sin-tareas".
   - Contador resumen con id="resumen-tareas".
   - Enlace a módulos:
     <script type="module" src="/src/main.js"></script>
     <script type="module" src="./js_ejercicio9.js"></script>

2. En `js_ejercicio9.js`:
   - Manejar un array de objetos tarea: `{ id, texto, completada }`.
   - Persistir en localStorage usando JSON.stringify() y recuperar con JSON.parse() al cargar el script.
   - Cada elemento de la lista debe tener su checkbox funcional que tacha la tarea y actualiza localStorage.
   - Cada elemento debe tener un botón para eliminarlo individualmente.
   - El botón "Limpiar completadas" debe filtrar el array para remover todas las tareas completadas y actualizar localStorage.
   - Permitir agregar tareas con la tecla Enter.
   - Incluir comentarios pedagógicos en español explicando el funcionamiento de localStorage y la serialización JSON.

Por favor, genera el código completo y listo para producción de ambos archivos.
```
