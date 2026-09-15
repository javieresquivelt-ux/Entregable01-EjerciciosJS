// =============================================
// EJERCICIO 3: LISTA DINÁMICA
// =============================================
// Objetivo pedagógico: crear, insertar y remover
// nodos del DOM de forma programática
// (createElement, appendChild, remove).
// =============================================

// Selección de los elementos del DOM que vamos a manipular.
const inputTarea = document.getElementById('input-tarea');
const btnAgregar = document.getElementById('btn-agregar');
const listaDinamica = document.getElementById('lista-dinamica');
const mensajeVacio = document.getElementById('mensaje-vacio');

/**
 * Muestra u oculta el mensaje de lista vacía según el nº de elementos.
 * Comprobamos el largo de la colección viva `children`: al crecer o
 * decrecer la lista, esta función se encarga de sincronizar la vista.
 */
function actualizarEstadoVacio() {
  const tieneElementos = listaDinamica.children.length > 0;
  mensajeVacio.style.display = tieneElementos ? 'none' : 'block';
}

/**
 * Ciclo de vida de un elemento de lista:
 * 1. Crear:  document.createElement('li').
 * 2. Configurar: asignar contenido, clases y evento.
 * 3. Insertar:  li.appendChild(...) y listaDinamica.appendChild(li).
 * 4. Remover:   li.remove() (disponible en HTML5 DOM).
 */
function agregarElemento() {
  // Sanitización: trim() elimina espacios al inicio/final, evitando
  // que se agreguen elementos en blanco o solo con espacios.
  const texto = inputTarea.value.trim();
  if (texto === '') {
    return;
  }

  // 1 y 2. Creamos y configuramos el contenedor <li>.
  const li = document.createElement('li');
  li.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 0.75rem 1rem;
  `;

  // Nodo de texto con el contenido del elemento.
  const spanTexto = document.createElement('span');
  spanTexto.textContent = texto;

  // Botón de eliminación individual.
  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = 'Eliminar';
  btnEliminar.className = 'btn btn--danger btn--sm';

  // Evento de remoción: cada botón solo borra su propio <li>.
  btnEliminar.addEventListener('click', () => {
    li.remove();               // Removemos el nodo del DOM.
    actualizarEstadoVacio();   // Re-evaluamos el mensaje de lista vacía.
  });

  // 3. Ensamblamos: texto + botón dentro del <li>, y <li> en la lista.
  li.appendChild(spanTexto);
  li.appendChild(btnEliminar);
  listaDinamica.appendChild(li);

  // Limpiamos el campo y devolvemos el foco para encadenar inserciones.
  inputTarea.value = '';
  inputTarea.focus();

  actualizarEstadoVacio();
}

// Disparador 1: clic en el botón "Agregar".
btnAgregar.addEventListener('click', agregarElemento);

// Disparador 2: tecla Enter dentro del campo de texto.
inputTarea.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Evitamos posibles recargas de formulario.
    agregarElemento();
  }
});