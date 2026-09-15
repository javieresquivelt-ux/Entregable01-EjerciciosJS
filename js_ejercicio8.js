// =============================================
// EJERCICIO 8: CONTADOR DE PALABRAS Y CARACTERES
// =============================================
// Objetivo pedagógico: procesamiento de texto con
// Expresiones Regulares (RegExp) y el evento `input`
// en elementos multilínea (textarea).
// =============================================

// Selección de los elementos del DOM que vamos a manipular.
const inputParrafo = document.getElementById('input-parrafo');
const contadorPalabras = document.getElementById('contador-palabras');
const contadorCaracteres = document.getElementById('contador-caracteres');
const btnLimpiarTexto = document.getElementById('btn-limpiar-texto');

/**
 * Actualiza ambas métricas en tiempo real.
 * Se ejecuta con cada pulsación de tecla gracias al evento `input`.
 */
function actualizarContadores() {
  const texto = inputParrafo.value.trim();

  // Conteo de palabras:
  // - `\s` (con flag g) representa cualquier espacio en blanco:
  //   espacios, tabulaciones, saltos de línea (\n) y retorno (\r).
  // - `split(/\s+/)` divide por UNA O MÁS separaciones consecutivas,
  //   superior a `split(' ')` porque agrupa espacios múltiples seguidos
  //   en una sola división (evita palabras vacías del array).
  const palabras = texto === '' ? 0 : texto.split(/\s+/).length;

  // Conteo de caracteres: eliminamos TODO espacio en blanco (\s global)
  // y medimos el largo del texto resultante con .length.
  const caracteresSinEspacios = inputParrafo.value.replace(/\s/g, '').length;

  contadorPalabras.textContent = palabras;
  contadorCaracteres.textContent = caracteresSinEspacios;
}

inputParrafo.addEventListener('input', actualizarContadores);

btnLimpiarTexto.addEventListener('click', () => {
  inputParrafo.value = '';
  inputParrafo.focus();
  actualizarContadores();
});

// Render inicial para mostrar 0/0 al cargar la página.
actualizarContadores();