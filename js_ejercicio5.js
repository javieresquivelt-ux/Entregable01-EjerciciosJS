// =============================================
// EJERCICIO 5: CALCULADORA SENCILLA
// =============================================
// Objetivo pedagógico: parseo de inputs numéricos,
// validación preventiva (isNaN) y manejo defensivo
// de casos límite (campos vacíos y división por cero).
// =============================================

// Selección de los elementos del DOM que vamos a manipular.
const inputNum1 = document.getElementById('num1');
const inputNum2 = document.getElementById('num2');
const resultadoCalculadora = document.getElementById('resultado-calculadora');

// Asociamos cada botón de operación con su función correspondiente.
const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');
const btnMultiplicar = document.getElementById('btn-multiplicar');
const btnDividir = document.getElementById('btn-dividir');
const btnLimpiar = document.getElementById('btn-limpiar');

/**
 * Lee, parsea y valida los dos campos de entrada.
 *
 * Importante: aunque el input sea type="number", la propiedad `.value`
 * SIEMPRE devuelve un string. Por eso usamos parseFloat() para
 * convertirlo a número real (también acepta decimales).
 *
 * Devuelve un objeto con { n1, n2, valido: true } en caso de éxito,
 * o un mensaje de error { mensaje, valido: false } en caso contrario.
 */
function obtenerNumeros() {
  const valor1 = inputNum1.value.trim();
  const valor2 = inputNum2.value.trim();

  // Validación de campos vacíos (incluye solo espacios).
  if (valor1 === '' || valor2 === '') {
    return { valido: false, mensaje: 'Por favor, ingresa ambos números.' };
  }

  const n1 = parseFloat(valor1);
  const n2 = parseFloat(valor2);

  // parseFloat devuelve NaN cuando no puede interpretar un número;
  // isNaN() nos permite detectarlo de forma preventiva.
  if (isNaN(n1) || isNaN(n2)) {
    return { valido: false, mensaje: 'Ingresa valores numéricos válidos.' };
  }

  return { valido: true, n1, n2 };
}

// Muestra un mensaje en el área de resultados, en rojo si es un error.
function mostrarResultado(texto, esError = false) {
  resultadoCalculadora.textContent = texto;
  resultadoCalculadora.style.color = esError ? '#e11d48' : '#0f172a';
}

/**
 * Ejecuta una operación sobre los números validados.
 * `operacion` recibe (a, b) y devuelve el resultado numérico.
 */
function calcular(operacion, simbolo) {
  const datos = obtenerNumeros();

  if (!datos.valido) {
    mostrarResultado(datos.mensaje, true);
    return;
  }

  const { n1, n2 } = datos;

  // La división entre cero devuelve Infinity en JavaScript.
  // Lo prevenimos explícitamente para mostrar un error legible
  // al usuario en lugar de un valor matemáticamente indefinido.
  if (operacion === dividir && n2 === 0) {
    mostrarResultado('Error: No es posible dividir entre cero.', true);
    return;
  }

  // Redondeamos divisiones a máx. 4 decimales para evitar
  // periodos largos (ej. 10 / 3 = 3.3333333333333335).
  let resultado = operacion(n1, n2);
  const resultadoFinal = Math.round(resultado * 10000) / 10000;

  mostrarResultado(`${n1} ${simbolo} ${n2} = ${resultadoFinal}`);
}

// Helpers para cada operación aritmética.
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

// Suscripción de los eventos de clic a cada botón.
btnSumar.addEventListener('click', () => calcular(sumar, '+'));
btnRestar.addEventListener('click', () => calcular(restar, '-'));
btnMultiplicar.addEventListener('click', () => calcular(multiplicar, '×'));
btnDividir.addEventListener('click', () => calcular(dividir, '/'));

/**
 * Restaura el estado inicial de la calculadora.
 * La calculadora no maneja estado persistente: su "estado inicial"
 * es inputs vacíos y el mensaje por defecto. Devolver el foco a #num1
 * mejora la accesibilidad (el usuario sigue tecleando sin usar el ratón).
 */
function limpiarCampos() {
  inputNum1.value = '';
  inputNum2.value = '';
  resultadoCalculadora.textContent = 'Esperando operación...';
  resultadoCalculadora.style.color = '#0f172a';
  inputNum1.focus();
}

btnLimpiar.addEventListener('click', limpiarCampos);