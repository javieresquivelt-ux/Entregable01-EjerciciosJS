# PLAN DE EJECUCIÓN: Ejercicio 7 - Generador de Contraseñas Aleatorias

## 1. Ficha Técnica y Objetivos
* **Ejercicio:** #07 - Generador de Contraseñas Aleatorias.
* **Objetivo Pedagógico:** Algoritmos de manipulación y concatenación de cadenas en JavaScript, generación pseudoaleatoria (`Math.random`), lectura de formularios y validación estricta de umbrales numéricos ($\text{longitud} \ge 4$).
* **Archivos a Crear:**
  * Vista HTML: `js_ejercicio_7.html` (en la raíz del proyecto).
  * Script JS: `js_ejercicio7.js` (en la raíz del proyecto).
* **Dependencias de Estilos:** Cargar `/src/main.js`.

---

## 2. Especificación de la Vista HTML (`js_ejercicio_7.html`)

### Requisitos Estructurales y Clases CSS:
* Usar Google Fonts (`Outfit`, `Inter`, `JetBrains Mono`).
* Barra superior con botón de retorno (`.btn--back`) hacia `./index.html`.
* Contenedor centrado (`.container.container--narrow`, `.exercise-layout`).
* Tarjeta principal (`.exercise-card`):
  * Título: `#07` | **Generador de Contraseñas Aleatorias**.
  * Cuadro informativo con el objetivo.
  * Formulario / Controles:
    * Campo de entrada para longitud con ID `input-longitud`, clase `.input`, `type="number"`, valor por defecto `"12"`, `min="1"`.
    * Botón con ID `btn-generar`, clase `.btn.btn--primary`, texto exacto `"Generar contraseña"`.
  * Visualizador de resultado:
    * Contenedor con la contraseña generada con ID `display-password`.
    * Botón de copiado con ID `btn-copiar-password`.
  * Mensaje de error:
    * Párrafo con ID `mensaje-error-longitud`, clase `.text-danger` (oculto por defecto).
* Carga de módulos:
  * `<script type="module" src="/src/main.js"></script>`
  * `<script type="module" src="./js_ejercicio7.js"></script>`

### Código HTML de Referencia:
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Ejercicio 7: Generador de Contraseñas - JavaScript" />
  <title>Ejercicio 7: Generador de Contraseñas | ConquerBlocks</title>
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
      <span class="badge badge--events">Algoritmos & Cadenas</span>
    </div>
  </header>

  <main class="container container--narrow">
    <section class="exercise-layout">
      <article class="exercise-card">
        <header class="exercise-card__header">
          <div class="exercise-card__title-group">
            <span class="exercise-card__number">#07</span>
            <h1 class="exercise-card__title">Generador de Contraseñas</h1>
          </div>
        </header>

        <div class="exercise-card__objective">
          <strong>Objetivo:</strong> Generar cadenas seguras aleatorias con letras, números y símbolos, validando que la longitud solicitada sea mayor o igual a 4.
        </div>

        <div class="exercise-card__workspace" style="align-items: stretch;">
          <!-- Configuración de Longitud -->
          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="input-longitud" class="form-label">Longitud de la contraseña (mínimo 4):</label>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <input 
                type="number" 
                id="input-longitud" 
                class="input" 
                value="12" 
                min="1" 
                max="64"
                style="max-width: 140px;"
              />
              <button type="button" id="btn-generar" class="btn btn--primary">
                Generar contraseña
              </button>
            </div>
            <!-- Mensaje de Error -->
            <p id="mensaje-error-longitud" class="text-danger" style="display: none; font-size: 0.875rem; margin-top: 0.5rem;">
              La longitud debe ser mayor o igual a 4.
            </p>
          </div>

          <!-- Display de Contraseña -->
          <div style="background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 1.25rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
            <span id="display-password" class="text-mono" style="font-size: 1.25rem; color: #f8fafc; word-break: break-all; font-weight: 600;">
              Haz clic en "Generar contraseña"
            </span>
            <button type="button" id="btn-copiar-password" class="btn btn--secondary btn--sm" style="display: none;">
              Copiar
            </button>
          </div>
        </div>
      </article>
    </section>
  </main>

  <script type="module" src="/src/main.js"></script>
  <script type="module" src="./js_ejercicio7.js"></script>
</body>
</html>
```

---

## 3. Especificación de la Lógica JavaScript (`js_ejercicio7.js`)

### Requisitos Funcionales:
1. **Conjunto de Caracteres Permitidos:**
   ```javascript
   const minusculas = 'abcdefghijklmnopqrstuvwxyz';
   const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const numeros = '0123456789';
   const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';
   const todosLosCaracteres = minusculas + mayusculas + numeros + simbolos;
   ```
2. **Validación de la Longitud:**
   * Leer el valor del input `#input-longitud`.
   * Si está vacío o `parseInt(valor) < 4`:
     * Mostrar `#mensaje-error-longitud` con el texto: `"La longitud debe ser mayor o igual a 4."`
     * Ocultar el botón de copiar.
     * Restablecer `#display-password` o marcarlo en estado de error.
     * Detener la ejecución.
   * Si la longitud $\ge 4$:
     * Ocultar `#mensaje-error-longitud`.
3. **Algoritmo de Generación:**
   * Garantizar variedad seleccionando caracteres de forma aleatoria:
     ```javascript
     let password = '';
     for (let i = 0; i < longitud; i++) {
       const indiceAleatorio = Math.floor(Math.random() * todosLosCaracteres.length);
       password += todosLosCaracteres[indiceAleatorio];
     }
     ```
   * Asignar la contraseña generada a `#display-password`.
   * Mostrar el botón `#btn-copiar-password`.
4. **Función de Copiado:**
   * Copiar con `navigator.clipboard.writeText(password)`.
   * Feedback visual temporal (*"¡Copiada!"*).
5. **Comentarios Educativos Requeridos:**
   * Explicar el funcionamiento de concatenación de caracteres mediante índices aleatorios y la validación lógica condicional.

---

## 4. Casos de Prueba y Criterios de Aceptación (DoD)
- [ ] Con longitud vacía, 0, 1, 2 o 3, al hacer clic en "Generar contraseña" se muestra el mensaje de error *"La longitud debe ser mayor o igual a 4."*
- [ ] Con longitud 4 o superior (ej. 12), genera una cadena con la cantidad exacta de caracteres solicitada.
- [ ] La contraseña generada incluye combinaciones de mayúsculas, minúsculas, dígitos y símbolos.
- [ ] El botón de copiado permite copiar el texto al portapapeles con confirmación visual.
- [ ] Compilación sin errores con `npm run build`.

---

## 5. PROMPT LISTO PARA EL MODELO EJECUTOR (DeepSeek / OpenCode)

```markdown
Eres un desarrollador Frontend experto. Tu tarea es implementar el "Ejercicio 7: Generador de Contraseñas Aleatorias" para un proyecto con Vite y Sass en Vanilla JavaScript.

Debes crear dos archivos en la raíz del proyecto:
1. `js_ejercicio_7.html`
2. `js_ejercicio7.js`

### Requerimientos Técnicos:
1. En `js_ejercicio_7.html`:
   - Campo para especificar la longitud con id="input-longitud" (por defecto 12).
   - Botón para generar con id="btn-generar" y texto "Generar contraseña".
   - Contenedor para mostrar la contraseña generada con id="display-password".
   - Párrafo de error con id="mensaje-error-longitud".
   - Botón de copiado con id="btn-copiar-password".
   - Enlace a módulos:
     <script type="module" src="/src/main.js"></script>
     <script type="module" src="./js_ejercicio7.js"></script>

2. En `js_ejercicio7.js`:
   - Validar que la longitud sea mayor o igual a 4 y no esté vacía; en caso contrario, mostrar el error "La longitud debe ser mayor o igual a 4.".
   - Algoritmo que genera aleatoriamente una contraseña combinando letras mayúsculas, minúsculas, números y caracteres especiales.
   - Funcionalidad para copiar la contraseña al portapapeles.
   - Comentarios pedagógicos en español explicando el algoritmo y las validaciones de entrada.

Por favor, genera el código completo y listo para producción de ambos archivos.
```
