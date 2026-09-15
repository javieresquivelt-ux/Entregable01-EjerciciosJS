// =============================================
// EJERCICIO 7: GENERADOR DE CONTRASEÑAS ALEATORIAS
// =============================================
// Objetivo pedagógico: manipulación de cadenas,
// generación pseudoaleatoria (Math.random) y
// validación estricta de umbrales numéricos.
// =============================================

// Conjunto de caracteres permitidos.
// Combinamos 4 grupos para maximizar la variedad de la contraseña.
const minusculas = 'abcdefghijklmnopqrstuvwxyz';
const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeros = '0123456789';
const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';
const todosLosCaracteres = minusculas + mayusculas + numeros + simbolos;

// Selección de los elementos del DOM que vamos a manipular.
const inputLongitud = document.getElementById('input-longitud');
const btnGenerar = document.getElementById('btn-generar');
const btnCopiarPassword = document.getElementById('btn-copiar-password');
const btnLimpiarPassword = document.getElementById('btn-limpiar-password');
const displayPassword = document.getElementById('display-password');
const mensajeErrorLongitud = document.getElementById('mensaje-error-longitud');

// Conservamos la última contraseña generada para facilitar el copiado.
let passwordActual = '';

/**
 * Genera una contraseña aleatoria de la longitud indicada.
 *
 * ¿Cómo funciona el algoritmo?
 * 1. Calculamos un índice aleatorio con Math.random() * total.
 * 2. Math.floor() lo convierte en un entero válido (0 ... total-1).
 * 3. Cada carácter se concatena a la cadena final, así que la
 *    longitud resultante es exactamente N caracteres.
 */
function generarPassword(longitud) {
  let password = '';
  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * todosLosCaracteres.length);
    password += todosLosCaracteres[indiceAleatorio];
  }
  return password;
}

btnGenerar.addEventListener('click', () => {
  // Leemos y parseamos la longitud solicitada. parseInt() interpreta
  // el string del input como número entero (base 10).
  const valorLongitud = inputLongitud.value.trim();
  const longitud = parseInt(valorLongitud, 10);

  // Validación estricta: impedimos longitudes vacías o menores a 4.
  if (valorLongitud === '' || isNaN(longitud) || longitud < 4) {
    mensajeErrorLongitud.style.display = 'block';
    btnCopiarPassword.style.display = 'none';
    // En estado de error mostramos "Limpiar" para poder resetear.
    btnLimpiarPassword.style.display = 'inline-flex';
    displayPassword.textContent = 'Longitud inválida';
    displayPassword.style.color = '#f43f5e';
    return;
  }

  // Longitud válida: ocultamos el error y generamos la contraseña.
  mensajeErrorLongitud.style.display = 'none';
  passwordActual = generarPassword(longitud);

  displayPassword.textContent = passwordActual;
  displayPassword.style.color = '#f8fafc';
  btnCopiarPassword.style.display = 'inline-flex';
  btnLimpiarPassword.style.display = 'inline-flex';
});

btnCopiarPassword.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(passwordActual);

    // Feedback visual temporal de la copia.
    const textoOriginal = btnCopiarPassword.textContent;
    btnCopiarPassword.textContent = '¡Copiada!';
    setTimeout(() => {
      btnCopiarPassword.textContent = textoOriginal;
    }, 1500);
  } catch (error) {
    console.error('No se pudo copiar la contraseña:', error);
  }
});

/**
 * Restaura el estado inicial del generador.
 * Este reset es seguro en cualquier estado (contraseña generada,
 * error de longitud o estado inicial) porque simplemente devuelve
 * inputs, display y elementos ocultos a su configuración de carga.
 */
function limpiarPassword() {
  passwordActual = '';
  inputLongitud.value = '12';
  displayPassword.textContent = 'Haz clic en "Generar contraseña"';
  displayPassword.style.color = '#f8fafc';
  btnCopiarPassword.style.display = 'none';
  btnLimpiarPassword.style.display = 'none';
  mensajeErrorLongitud.style.display = 'none';
  inputLongitud.focus();
}

btnLimpiarPassword.addEventListener('click', limpiarPassword);