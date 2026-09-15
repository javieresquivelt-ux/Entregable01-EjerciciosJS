// =============================================
// EJERCICIO 9: LISTA DE TAREAS CON LOCALSTORAGE
// =============================================
// Objetivo pedagógico: Web Storage API, serialización
// con JSON y renderizado reactivo del estado en el DOM.
// =============================================

// Clave única para guardar datos en localStorage de este proyecto.
const CLAVE_STORAGE = 'conquer_tareas_entregable_1';

// Estado en memoria: la única fuente de verdad de la aplicación.
// Cada tarea es un objeto: { id: number, texto: string, completada: boolean }.
let tareas = [];

// Selección de los elementos del DOM que vamos a manipular.
const inputNuevaTarea = document.getElementById('input-nueva-tarea');
const btnAgregarTarea = document.getElementById('btn-agregar-tarea');
const listaTareas = document.getElementById('lista-tareas');
const mensajeSinTareas = document.getElementById('mensaje-sin-tareas');
const resumenTareas = document.getElementById('resumen-tareas');
const btnLimpiarCompletadas = document.getElementById('btn-limpiar-completadas');

/**
 * Guarda el estado actual en localStorage.
 * IMPORTANTE: localStorage solo almacena CADENAS de texto, por eso
 * serializamos el array con JSON.stringify() antes de guardarlo.
 */
function guardarEnStorage() {
  localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
}

/**
 * Recupera las tareas previamente guardadas.
 * JSON.parse() hace el proceso inverso: convierte el string JSON
 * de vuelta a un array de objetos JavaScript.
 */
function cargarDeStorage() {
  const datosGuardados = localStorage.getItem(CLAVE_STORAGE);
  tareas = datosGuardados ? JSON.parse(datosGuardados) : [];
}

/**
 * Renderiza la lista completa a partir del estado `tareas`.
 * Patrón clave: NUNCA tocamos el DOM directamente ante un cambio;
 * actualizamos el estado y re-renderizamos desde cero. Así evitamos
 * duplicados y la vista siempre refleja fielmente los datos.
 */
function renderizarTareas() {
  listaTareas.innerHTML = '';

  // Visibilidad del mensaje de lista vacía.
  mensajeSinTareas.style.display = tareas.length === 0 ? 'block' : 'none';

  // Resumen: contamos cuántas tareas están completadas.
  const completadas = tareas.filter((tarea) => tarea.completada).length;
  resumenTareas.textContent = `${completadas} de ${tareas.length} completadas`;

  tareas.forEach((tarea) => {
    // Contenedor <li> de la tarea.
    const li = document.createElement('li');
    li.style.cssText = `
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: rgba(15, 23, 42, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding: 0.75rem 1rem;
    `;

    // Checkbox de completado.
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'input-checkbox';
    checkbox.checked = tarea.completada;

    // Texto de la tarea (tachado si está completada) + botón borrar.
    const spanTexto = document.createElement('span');
    spanTexto.textContent = tarea.texto;
    spanTexto.style.flex = '1';

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.className = 'btn btn--danger btn--sm';

    // Alternamos el estado y persistimos.
    checkbox.addEventListener('change', () => {
      tarea.completada = checkbox.checked;
      guardarEnStorage();
      renderizarTareas();
    });

    // Eliminación individual: filtramos el array por su id único.
    btnEliminar.addEventListener('click', () => {
      tareas = tareas.filter((item) => item.id !== tarea.id);
      guardarEnStorage();
      renderizarTareas();
    });

    // Aplicamos estilo tachado según el estado.
    if (tarea.completada) {
      spanTexto.style.textDecoration = 'line-through';
      spanTexto.style.opacity = '0.6';
    }

    li.appendChild(checkbox);
    li.appendChild(spanTexto);
    li.appendChild(btnEliminar);
    listaTareas.appendChild(li);
  });
}

/** Agrega una nueva tarea validando que el texto no esté vacío. */
function agregarTarea() {
  const texto = inputNuevaTarea.value.trim();
  if (texto === '') {
    return;
  }

  // Date.now() genera un id único por milisegundo: suficiente para
  // diferenciar tareas sin necesidad de librerías externas.
  tareas.push({ id: Date.now(), texto, completada: false });
  guardarEnStorage();

  inputNuevaTarea.value = '';
  inputNuevaTarea.focus();
  renderizarTareas();
}

// Alta por clic en "Agregar" y por tecla Enter.
btnAgregarTarea.addEventListener('click', agregarTarea);
inputNuevaTarea.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    agregarTarea();
  }
});

// Purgamos las tareas completadas conservando las pendientes.
btnLimpiarCompletadas.addEventListener('click', () => {
  tareas = tareas.filter((tarea) => !tarea.completada);
  guardarEnStorage();
  renderizarTareas();
});

// Arranque: recuperamos lo guardado y pintamos la lista.
cargarDeStorage();
renderizarTareas();