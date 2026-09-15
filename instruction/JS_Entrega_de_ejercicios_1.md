# JS - Entrega de ejercicios 1
**CONQUER / CONQUER BLOCKS**

---

## ÍNDICE DE CONTENIDOS
1. [Introducción](#introducción)
2. [Formato de entrega](#formato-de-entrega)
3. [1. Cambiador de Color de Fondo](#1-cambiador-de-color-de-fondo)
4. [2. Contador de Clics](#2-contador-de-clics)
5. [3. Lista Dinámica](#3-lista-dinámica)
6. [4. Filtro de Búsqueda en Tiempo Real](#4-filtro-de-búsqueda-en-tiempo-real)
7. [5. Calculadora Sencilla](#5-calculadora-sencilla)
8. [6. Temporizador con Inicio, Pausa y Reinicio](#6-temporizador-con-inicio-pausa-y-reinicio)
9. [7. Generador de Contraseñas Aleatorias](#7-generador-de-contraseñas-aleatorias)
10. [8. Contador de Palabras y Caracteres](#8-contador-de-palabras-y-caracteres)
11. [9. Lista de Tareas con LocalStorage](#9-lista-de-tareas-con-localstorage)

---

## Introducción
El objetivo con estos ejercicios es practicar todo lo aprendido con pequeños ejercicios sencillos y entregables.

---

## Formato de entrega
Para entregar estos ejercicios se realizará una página inicial de aterrizaje con un pequeño índice que enlace a cada uno de los ejercicios por separado. El código JS de cada archivo debe estar en un fichero separado.

Se propone la siguiente estructura:
- `index.html`
- `js_ejercicio_1.html` y `js_ejercicio1.js`
- `js_ejercicio_2.html` y `js_ejercicio2.js`

Debe estar subido a **GitHub Pages** y proveer un enlace público de navegación para su corrección.

---

## Ejercicios

### 1. Cambiador de Color de Fondo
- **Objetivo del ejercicio:** Practicar eventos en JavaScript y manipulación de estilos del DOM.
- **Ejercicio:**
  Crea una página web con un botón que diga "Cambiar color". Cada vez que el usuario haga clic en el botón, el color de fondo de la página debe cambiar a un color aleatorio.

---

### 2. Contador de Clics
- **Objetivo del ejercicio:** Practicar el manejo de eventos y la actualización del contenido del DOM.
- **Ejercicio:**
  Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0". Cada vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics realizados.

---

### 3. Lista Dinámica
- **Objetivo del ejercicio:** Trabajar con la creación, eliminación y manipulación de elementos del DOM.
- **Ejercicio:**
  Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.
  Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un nuevo elemento de la lista.
  Añade un botón al lado de cada elemento para eliminarlo de la lista.

---

### 4. Filtro de Búsqueda en Tiempo Real
- **Objetivo del ejercicio:** Practicar la interacción entre eventos del DOM y lógica en JavaScript.
- **Ejercicio:**
  Crea una página con un campo de texto y una lista predefinida de elementos.
  Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para mostrar solo los elementos que contienen el texto escrito.
  *Ejemplo:* Si la lista contiene `["Perro", "Gato", "Pez"]` y el usuario escribe `"Ga"`, solo `"Gato"` debe quedar visible.

---

### 5. Calculadora Sencilla
- **Objetivo del ejercicio:** Practicar la manipulación de formularios, eventos, y lógica básica de JavaScript.
- **Ejercicio:**
  Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar", "Multiplicar", y "Dividir".
  - Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un área de texto o debajo de los botones.
  - Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías).

---

### 6. Temporizador con Inicio, Pausa y Reinicio
- **Objetivo del ejercicio:** Practicar manejo de eventos, funciones de temporización y manipulación del DOM.
- **Ejercicio:**
  Crea una página con un temporizador que comience en `00:00:00`. Incluye tres botones: "Iniciar", "Pausar" y "Reiniciar".
  - Al hacer clic en "Iniciar", el temporizador debe comenzar a contar los segundos, minutos y horas.
  - "Pausar" detiene el conteo pero mantiene el tiempo actual.
  - "Reiniciar" pone el temporizador en `00:00:00`.

---

### 7. Generador de Contraseñas Aleatorias
- **Objetivo del ejercicio:** Practicar generación de cadenas aleatorias y uso de formularios.
- **Ejercicio:**
  Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que diga "Generar contraseña".
  - Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando letras, números y caracteres especiales.
  - Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la longitud debe ser mayor o igual a 4.

---

### 8. Contador de Palabras y Caracteres
- **Objetivo del ejercicio:** Practicar eventos en tiempo real y manipulación avanzada del DOM.
- **Ejercicio:**
  Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.
  Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.
  - Las palabras deben ser separadas por espacios.
  - Los caracteres no deben incluir espacios ni saltos de línea.

---

### 9. Lista de Tareas con LocalStorage
- **Objetivo del ejercicio:** Practicar persistencia de datos con `localStorage`.
- **Ejercicio:**
  Crea una aplicación de lista de tareas.
  - Cada tarea debe incluir un texto y un checkbox para marcarla como completada.
  - Las tareas se deben guardar en `localStorage` para que persistan incluso si la página se recarga.
  - Debe incluir un botón para limpiar todas las tareas completadas y actualizar el `localStorage`.
