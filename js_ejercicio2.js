// =============================================
// EJERCICIO 2: CONTADOR DE CLICS
// =============================================
// Objetivo pedagógico: manejo de eventos de clic
// (addEventListener) y actualización dinámica de
// nodos de texto mediante textContent.
// =============================================

// Estado en memoria: es la única fuente de verdad.
// Separar el estado (valor numérico) de su representación
// visual en el DOM es una buena práctica: si cambia el
// dato, actualizamos el texto; nunca al revés.
let clics = 0;

// Selección de los elementos del DOM que vamos a manipular.
const contadorTexto = document.getElementById('contador-texto');
const btnContar = document.getElementById('btn-contar');
const btnReiniciar = document.getElementById('btn-reiniciar');

// addEventListener('click', ...) suscribe una función que se
// ejecuta cada vez que el usuario pulsa el botón en cuestión.
btnContar.addEventListener('click', () => {
  clics++;                                  // Incrementamos el estado.
  contadorTexto.textContent = 'Clics: ' + clics; // Reflejamos el estado en el DOM.
});

btnReiniciar.addEventListener('click', () => {
  clics = 0;                                // Restablecemos el estado.
  contadorTexto.textContent = 'Clics: 0';   // Sincronizamos la vista.
});