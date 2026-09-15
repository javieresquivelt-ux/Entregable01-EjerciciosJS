# TASK PLAN: Entrega de Ejercicios 1 (JavaScript)

## Estado General del Proyecto
- [x] **Fase 0: Auditoría de Entorno y Arquitectura Base** <!-- id: 0 -->
  - [x] Auditar y depurar estructura Sass heredada (`src/scss` vs `src/styles`) <!-- id: 0.1 -->
  - [x] Configurar `vite.config.js` para arquitectura Multi-Página (MPA) apta para `npm run build` y GitHub Pages <!-- id: 0.2 -->
  - [x] Diseñar el sistema de estilos base y tokens reutilizables para los ejercicios <!-- id: 0.3 -->
- [x] **Fase 1: Landing Page e Índice de Navegación (`index.html`)** <!-- id: 1 -->
  - [x] Crear estructura semántica de `index.html` con catálogo/cards de los 9 ejercicios <!-- id: 1.1 -->
  - [x] Implementar diseño responsive, moderno y atractivo para la revisión docente <!-- id: 1.2 -->
  - [x] Verificar navegación y estilos generales <!-- id: 1.3 -->

---

## Mapeo de Planes de Ejecución (Harness Framework)
Cada ejercicio cuenta con su propio plan atómico e independiente en la carpeta `plans/`, preparado con contrato UI, especificación JS y prompt listo para pasar a DeepSeek / OpenCode:

- [ ] **Fase 2: Bloque de Ejercicios 1 - 3 (Manipulación de DOM y Eventos Básicos)** <!-- id: 2 -->
  - [x] Ejercicio 1: Cambiador de Color de Fondo (`js_ejercicio_1.html` + `js_ejercicio1.js`) - [Ver Plan](file:///home/jet/proyectos_lnx/proyectos_conquer/js/Entregable01/plans/plan_ejercicio_01_color.md) <!-- id: 2.1 -->
  - [x] Ejercicio 2: Contador de Clics (`js_ejercicio_2.html` + `js_ejercicio2.js`) - [Ver Plan](file:///home/jet/proyectos_lnx/proyectos_conquer/js/Entregable01/plans/plan_ejercicio_02_contador.md) <!-- id: 2.2 -->
  - [x] Ejercicio 3: Lista Dinámica (`js_ejercicio_3.html` + `js_ejercicio3.js`) - [Ver Plan](file:///home/jet/proyectos_lnx/proyectos_conquer/js/Entregable01/plans/plan_ejercicio_03_lista_dinamica.md) <!-- id: 2.3 -->

- [x] **Fase 3: Bloque de Ejercicios 4 - 6 (Eventos en Tiempo Real, Lógica Aritmética y Asincronía)** <!-- id: 3 -->
  - [x] Ejercicio 4: Filtro de Búsqueda en Tiempo Real (`js_ejercicio_4.html` + `js_ejercicio4.js`) - [Ver Plan](file:///home/jet/proyectos_lnx/proyectos_conquer/js/Entregable01/plans/plan_ejercicio_04_filtro_busqueda.md) <!-- id: 3.1 -->
  - [x] Ejercicio 5: Calculadora Sencilla con Validaciones (`js_ejercicio_5.html` + `js_ejercicio5.js`) - [Ver Plan](file:///home/jet/proyectos_lnx/proyectos_conquer/js/Entregable01/plans/plan_ejercicio_05_calculadora.md) <!-- id: 3.2 -->
    - [x] Agregar botón "Limpiar campos" a la calculadora (limpia inputs, restaura mensaje inicial y foco) <!-- id: 3.2.1 -->
  - [x] Ejercicio 6: Temporizador (Inicio, Pausa, Reinicio) (`js_ejercicio_6.html` + `js_ejercicio6.js`) - [Ver Plan](file:///home/jet/proyectos_lnx/proyectos_conquer/js/Entregable01/plans/plan_ejercicio_06_temporizador.md) <!-- id: 3.3 -->

- [x] **Fase 4: Bloque de Ejercicios 7 - 9 (Algoritmos, Procesamiento de Texto y Persistencia)** <!-- id: 4 -->
  - [x] Ejercicio 7: Generador de Contraseñas Aleatorias (`js_ejercicio_7.html` + `js_ejercicio7.js`) - [Ver Plan](file:///home/jet/proyectos_lnx/proyectos_conquer/js/Entregable01/plans/plan_ejercicio_07_password.md) <!-- id: 4.1 -->
    - [x] Agregar botón "Limpiar" a la derecha de "Copiar" en el generador (restaura estado inicial) <!-- id: 4.1.1 -->
  - [x] Ejercicio 8: Contador de Palabras y Caracteres en Tiempo Real (`js_ejercicio_8.html` + `js_ejercicio8.js`) - [Ver Plan](file:///home/jet/proyectos_lnx/proyectos_conquer/js/Entregable01/plans/plan_ejercicio_08_contador_palabras.md) <!-- id: 4.2 -->
  - [x] Ejercicio 9: Lista de Tareas con LocalStorage y Estado Persistente (`js_ejercicio_9.html` + `js_ejercicio9.js`) - [Ver Plan](file:///home/jet/proyectos_lnx/proyectos_conquer/js/Entregable01/plans/plan_ejercicio_09_todo_localstorage.md) <!-- id: 4.3 -->

- [ ] **Fase 5: Validación Integral y Preparación para Despliegue** <!-- id: 5 -->
  - [ ] Probar compilación limpia con `npm run build` con todos los ejercicios enlazados <!-- id: 5.1 -->
  - [ ] Verificar compatibilidad de navegación para GitHub Pages <!-- id: 5.2 -->
  - [ ] Revisión final de documentación y comentarios pedagógicos <!-- id: 5.3 -->
