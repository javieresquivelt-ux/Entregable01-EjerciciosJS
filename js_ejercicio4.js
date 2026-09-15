// =============================================
// EJERCICIO 4: FILTRO DE BÚSQUEDA EN TIEMPO REAL
// =============================================
// Objetivo pedagógico: evento `input`, filtrado de
// arrays con .filter()/.includes() y normalización
// de texto con toLowerCase().
// =============================================

// Colección de datos predefinida (la "base de datos" del ejercicio).
const elementosPredefinidos = [
  'Perro', 'Gato', 'Pez', 'Caballo', 'León', 'Tigre',
  'Elefante', 'Delfín', 'Águila', 'Lobo', 'Oso', 'Panda'
];

// Selección de los elementos del DOM que vamos a manipular.
const inputBusqueda = document.getElementById('input-busqueda');
const listaElem = document.getElementById('lista-elementos');
const sinCoincidencias = document.getElementById('sin-coincidencias');
const contadorResultados = document.getElementById('contador-resultados');
const btnLimpiar = document.getElementById('btn-limpiar');

/**
 * Renderiza la lista en el DOM a partir del array de items recibido.
 * Limpiamos el contenedor en cada render para evitar duplicados.
 */
function renderizarLista(items) {
  listaElem.innerHTML = '';

  if (items.length === 0) {
    sinCoincidencias.style.display = 'block';
  } else {
    sinCoincidencias.style.display = 'none';
    // .forEach nos permite recorrer el array y crear un <li> por ítem.
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      li.style.cssText = `
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 0.75rem 1rem;
      `;
      listaElem.appendChild(li);
    });
  }

  contadorResultados.textContent =
    `Mostrando ${items.length} de ${elementosPredefinidos.length} elementos`;

  // El botón de limpiar solo tiene sentido cuando hay texto escrito.
  btnLimpiar.style.display = inputBusqueda.value.trim() !== '' ? 'inline-flex' : 'none';
}

// Evento 'input': dispara por CADA tecla presionada (a diferencia de
// 'change', que espera a perder el foco). Ideal para búsquedas en vivo.
inputBusqueda.addEventListener('input', () => {
  // Normalizamos el término a minúsculas para una comparación insensible
  // a mayúsculas: 'GaTo' debe coincidir con 'gato'.
  const termino = inputBusqueda.value.toLowerCase().trim();

  // .filter() devuelve un nuevo array solo con los ítems que cumplen
  // la condición; .includes() comprueba si el término está contenido.
  const filtrados = elementosPredefinidos.filter((item) =>
    item.toLowerCase().includes(termino)
  );

  renderizarLista(filtrados);
});

// Botón de limpiar: restaura la lista completa y enfoca el campo.
btnLimpiar.addEventListener('click', () => {
  inputBusqueda.value = '';
  renderizarLista(elementosPredefinidos);
  inputBusqueda.focus();
});

// Render inicial: mostramos todos los elementos al cargar la página.
renderizarLista(elementosPredefinidos);