# PLAN DE EJECUCIÓN: Ejercicio 6 - Temporizador (Inicio, Pausa y Reinicio)

## 1. Ficha Técnica y Objetivos
* **Ejercicio:** #06 - Temporizador con Inicio, Pausa y Reinicio.
* **Objetivo Pedagógico:** Gestión de asincronía y funciones de temporización en JavaScript (`setInterval`, `clearInterval`), control de estado de ejecución para prevenir colisiones de intervalos y formateo de cadenas con ceros a la izquierda (`padStart`).
* **Archivos a Crear:**
  * Vista HTML: `js_ejercicio_6.html` (en la raíz del proyecto).
  * Script JS: `js_ejercicio6.js` (en la raíz del proyecto).
* **Dependencias de Estilos:** Cargar `/src/main.js`.

---

## 2. Especificación de la Vista HTML (`js_ejercicio_6.html`)

### Requisitos Estructurales y Clases CSS:
* Usar Google Fonts (`Outfit`, `Inter`, `JetBrains Mono`).
* Barra superior con botón de retorno (`.btn--back`) hacia `./index.html`.
* Contenedor centrado (`.container.container--narrow`, `.exercise-layout`).
* Tarjeta principal (`.exercise-card`):
  * Título: `#06` | **Temporizador Completo**.
  * Cuadro informativo con el objetivo.
  * Pantalla del reloj con ID `display-tiempo`, texto inicial `"00:00:00"` en fuente monoespaciada de gran tamaño.
  * Tres botones con los textos exactos:
    * `"Iniciar"` (ID `btn-iniciar`, clase `.btn.btn--primary`)
    * `"Pausar"` (ID `btn-pausar`, clase `.btn.btn--secondary`)
    * `"Reiniciar"` (ID `btn-reiniciar`, clase `.btn.btn--secondary`)
* Carga de módulos:
  * `<script type="module" src="/src/main.js"></script>`
  * `<script type="module" src="./js_ejercicio6.js"></script>`

### Código HTML de Referencia:
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Ejercicio 6: Temporizador - JavaScript" />
  <title>Ejercicio 6: Temporizador | ConquerBlocks</title>
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
      <span class="badge badge--async">Asincronía</span>
    </div>
  </header>

  <main class="container container--narrow">
    <section class="exercise-layout">
      <article class="exercise-card">
        <header class="exercise-card__header">
          <div class="exercise-card__title-group">
            <span class="exercise-card__number">#06</span>
            <h1 class="exercise-card__title">Temporizador Completo</h1>
          </div>
        </header>

        <div class="exercise-card__objective">
          <strong>Objetivo:</strong> Gestionar el avance del tiempo en horas, minutos y segundos mediante <code>setInterval</code> y controlar su ciclo de vida con <code>clearInterval</code>.
        </div>

        <div class="exercise-card__workspace">
          <!-- Pantalla del Reloj -->
          <div style="margin-bottom: 2rem; text-align: center;">
            <div id="display-tiempo" class="text-mono" style="font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 700; color: #f8fafc; background: rgba(0, 0, 0, 0.4); padding: 1rem 2.5rem; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.1); letter-spacing: 2px;">
              00:00:00
            </div>
          </div>

          <!-- Controles -->
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center;">
            <button type="button" id="btn-iniciar" class="btn btn--primary">
              Iniciar
            </button>
            <button type="button" id="btn-pausar" class="btn btn--secondary">
              Pausar
            </button>
            <button type="button" id="btn-reiniciar" class="btn btn--secondary">
              Reiniciar
            </button>
          </div>
        </div>
      </article>
    </section>
  </main>

  <script type="module" src="/src/main.js"></script>
  <script type="module" src="./js_ejercicio6.js"></script>
</body>
</html>
```

---

## 3. Especificación de la Lógica JavaScript (`js_ejercicio6.js`)

### Requisitos Funcionales:
1. **Variables de Estado:**
   ```javascript
   let segundosTranscurridos = 0;
   let intervaloId = null; // Almacena la referencia del setInterval
   ```
2. **Función de Formateo de Tiempo (`formatearTiempo(totalSegundos)`):**
   * Calcular horas: `Math.floor(totalSegundos / 3600)`
   * Calcular minutos: `Math.floor((totalSegundos % 3600) / 60)`
   * Calcular segundos: `totalSegundos % 60`
   * Formatear a dos dígitos con `.padStart(2, '0')`:
     `return `${h.padStart(2,'0')}:${m.padStart(2,'0')}:${s.padStart(2,'0')}`;`
3. **Manejadores de Acciones:**
   * **Iniciar (`#btn-iniciar`):**
     * Si `intervaloId !== null`, ignorar para evitar duplicación de timers acelerados.
     * Iniciar `intervaloId = setInterval(...)` cada 1000ms incrementando `segundosTranscurridos++` y actualizando el DOM.
     * Habilitar/deshabilitar visualmente botones si se desea.
   * **Pausar (`#btn-pausar`):**
     * Limpiar el temporizador: `clearInterval(intervaloId)`.
     * Resetear referencia: `intervaloId = null`.
   * **Reiniciar (`#btn-reiniciar`):**
     * `clearInterval(intervaloId)`.
     * `intervaloId = null`.
     * `segundosTranscurridos = 0`.
     * Restablecer display a `"00:00:00"`.
4. **Comentarios Educativos Requeridos:**
   * Explicar el Event Loop y cómo opera `setInterval(..., 1000)`.
   * Explicar por qué es crítico invocar `clearInterval` para evitar fugas de memoria (memory leaks) y timers duplicados.

---

## 4. Casos de Prueba y Criterios de Aceptación (DoD)
- [ ] La pantalla arranca exactamente en `"00:00:00"`.
- [ ] Al pulsar "Iniciar", el segundero comienza a incrementar cada segundo.
- [ ] Pulsar "Iniciar" varias veces consecutivas NO debe acelerar el conteo.
- [ ] Pulsar "Pausar" congela el tiempo transcurrido exacto. Si se vuelve a pulsar "Iniciar", continúa desde donde se detuvo.
- [ ] Pulsar "Reiniciar" detiene el contador y vuelve a `"00:00:00"`.
- [ ] Compilación sin errores con `npm run build`.

---

## 5. PROMPT LISTO PARA EL MODELO EJECUTOR (DeepSeek / OpenCode)

```markdown
Eres un desarrollador Frontend experto. Tu tarea es implementar el "Ejercicio 6: Temporizador" para un proyecto con Vite y Sass en Vanilla JavaScript.

Debes crear dos archivos en la raíz del proyecto:
1. `js_ejercicio_6.html`
2. `js_ejercicio6.js`

### Requerimientos Técnicos:
1. En `js_ejercicio_6.html`:
   - Mostrar un display con el texto inicial exacto "00:00:00" y con id="display-tiempo".
   - Tres botones con id y textos exactos:
     - id="btn-iniciar", texto "Iniciar"
     - id="btn-pausar", texto "Pausar"
     - id="btn-reiniciar", texto "Reiniciar"
   - Enlace a módulos:
     <script type="module" src="/src/main.js"></script>
     <script type="module" src="./js_ejercicio6.js"></script>

2. En `js_ejercicio6.js`:
   - Gestionar el tiempo en segundos y convertirlo al formato HH:MM:SS usando String.prototype.padStart(2, '0').
   - Iniciar el conteo con setInterval de 1000ms al pulsar "Iniciar", previniendo que múltiples clics aceleren el intervalo.
   - Detener el conteo con clearInterval al pulsar "Pausar", conservando el tiempo acumulado.
   - Poner el contador en "00:00:00" y detener el intervalo al pulsar "Reiniciar".
   - Incluir comentarios didácticos en español explicando setInterval, clearInterval y la prevención de fugas de memoria.

Por favor, genera el código completo y listo para producción de ambos archivos.
```
