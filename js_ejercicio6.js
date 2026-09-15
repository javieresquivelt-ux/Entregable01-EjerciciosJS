// =============================================
// EJERCICIO 6: TEMPORIZADOR (INICIO, PAUSA, REINICIO)
// =============================================
// Objetivo pedagógico: asincronía con setInterval /
// clearInterval y formateo de tiempo con padStart.
// =============================================

// Estado del temporizador.
let segundosTranscurridos = 0;
// Almacena la referencia del setInterval activo.
// null = sin temporizador corriendo.
let intervaloId = null;

// Selección de los elementos del DOM que vamos a manipular.
const displayTiempo = document.getElementById('display-tiempo');
const btnIniciar = document.getElementById('btn-iniciar');
const btnPausar = document.getElementById('btn-pausar');
const btnReiniciar = document.getElementById('btn-reiniciar');

/**
 * Convierte un total de segundos en una cadena HH:MM:SS.
 *
 * Operaciones de división modular:
 * - Horas:    total / 3600.
 * - Minutos:  resto de horas dividido entre 60.
 * - Segundos: resto directo de la división total.
 *
 * `.padStart(2, '0')` garantiza que cada valor tenga al menos
 * 2 dígitos (ej. 5 => "05"), rellenando con ceros a la izquierda.
 */
function formatearTiempo(totalSegundos) {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  const h = String(horas).padStart(2, '0');
  const m = String(minutos).padStart(2, '0');
  const s = String(segundos).padStart(2, '0');

  return `${h}:${m}:${s}`;
}

// Actualiza la pantalla con el tiempo formateado actual.
function actualizarDisplay() {
  displayTiempo.textContent = formatearTiempo(segundosTranscurridos);
}

btnIniciar.addEventListener('click', () => {
  // Guarda anti-duplicación: si ya existe un intervalo corriendo,
  // ignoramos el clic. Sin esto, varios clics crearían timers
  // acelerados (el conteo avanzaría de a varios segundos por tick).
  if (intervaloId !== null) {
    return;
  }

  // setInterval registra una función que se ejecuta cada 1000 ms.
  // JavaScript delega esta espera al Event Loop del navegador.
  intervaloId = setInterval(() => {
    segundosTranscurridos++;
    actualizarDisplay();
  }, 1000);
});

btnPausar.addEventListener('click', () => {
  // clearInterval cancela el temporizador referenciado y libera
  // ese "callback" en memoria. Dejar de llamarlo provocaría fugas
  // de memoria (memory leaks) y timers ejecutándose sin control.
  clearInterval(intervaloId);
  // Restauramos la referencia para que "Iniciar" pueda crear uno nuevo.
  intervaloId = null;
});

btnReiniciar.addEventListener('click', () => {
  clearInterval(intervaloId);
  intervaloId = null;
  segundosTranscurridos = 0;
  actualizarDisplay();
});