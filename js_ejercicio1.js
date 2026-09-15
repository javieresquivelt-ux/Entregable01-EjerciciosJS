// =============================================
// EJERCICIO 1: CAMBIADOR DE COLOR DE FONDO
// =============================================
// Objetivo pedagógico: eventos (addEventListener),
// manipulación del DOM (style.backgroundColor) y
// números pseudoaleatorios (Math.random, Math.floor).
// =============================================

// Selección de elementos del DOM que vamos a manipular.
const btnCambiarColor = document.getElementById('btn-cambiar-color');
const btnCopiarColor = document.getElementById('btn-copiar-color');
const codigoColorElem = document.getElementById('codigo-color');

/**
 * Genera un color hexadecimal aleatorio en formato #RRGGBB.
 *
 * ¿Cómo funciona?
 * - `Math.random()` devuelve un decimal entre 0 (incluido) y 1 (excluido).
 * - `Math.random() * 16` mueve ese rango a [0, 16).
 * - `Math.floor(...)` lo redondea hacia abajo, dándonos un entero 0-15.
 * - Cada entero corresponde a un dígito hexadecimal (0-9, A-F),
 *   que va concatenándose hasta completar los 6 dígitos del color.
 */
function generarColorHexAleatorio() {
  const letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Evento principal: cada clic genera un nuevo color, lo aplica como
// fondo del documento y refleja su valor en el visor de texto.
// Nota: style.backgroundColor modifica directamente el CSS del <body>.
btnCambiarColor.addEventListener('click', () => {
  const nuevoColor = generarColorHexAleatorio();

  // Cambiamos el fondo de toda la página.
  document.body.style.backgroundColor = nuevoColor;

  // Sincronizamos el texto del visor con el color aplicado.
  codigoColorElem.textContent = nuevoColor;
});

// Funcionalidad extra de usabilidad: copiar el color al portapapeles.
// La API moderna navigator.clipboard.writeText() devuelve una promesa.
btnCopiarColor.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(codigoColorElem.textContent);

    // Feedback visual temporal: cambiamos el texto del botón 1.5 s y
    // luego lo restauramos para no perder el contexto.
    const textoOriginal = btnCopiarColor.textContent;
    btnCopiarColor.textContent = '¡Copiado!';
    setTimeout(() => {
      btnCopiarColor.textContent = textoOriginal;
    }, 1500);
  } catch (error) {
    console.error('No se pudo copiar el color:', error);
  }
});