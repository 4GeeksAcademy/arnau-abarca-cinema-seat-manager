# Tareas: sistema de reservas de asientos de cine

Marca cada tarea con `[x]` cuando esté implementada y comprobada.

## Preparación de la sala

- [x] En `src/main.ts`, definir las constantes para 8 filas y 10 columnas.
- [x] Documentar en el código que `0` representa un asiento libre y `1` uno ocupado.
- [x] Crear una función que construya y devuelva una matriz de 8 filas por 10 columnas, inicializada con `0` usando bucles y `push`.

## Mostrar estado

- [x] Crear una función que reciba la matriz e imprima en consola los números de columna del 1 al 10.
- [x] Completar la función para imprimir cada fila con su número y los asientos como `L` si están libres y `X` si están ocupados.

## Reservar asientos

- [x] Crear una función que reciba la matriz, el número de fila y el número de columna, ambos desde 1.
- [x] Validar que la fila esté entre 1 y 8 y la columna entre 1 y 10; informar si la posición no es válida.
- [x] Convertir la fila y la columna válidas a índices de matriz.
- [x] Comprobar si el asiento está ocupado y, si lo está, informar que no se puede reservar.
- [x] Si el asiento está libre, cambiar su valor de `0` a `1` e informar que la reserva se confirmó.
- [x] Devolver un resultado sencillo que indique si la reserva tuvo éxito o falló.

## Contar asientos

- [x] Crear una función que recorra la matriz con bucles anidados y cuente los asientos ocupados y disponibles.
- [x] Devolver los dos conteos y mostrar un resumen claro en consola.

## Buscar asientos contiguos

- [x] Crear una función que busque de izquierda a derecha y de arriba abajo dos asientos libres consecutivos en una misma fila.
- [x] Al encontrar el primer par, devolver sus posiciones con numeración desde 1 y mostrar un mensaje claro.
- [x] Si no se encuentra ningún par, devolver un resultado que lo indique y mostrar un mensaje claro.

## Probar escenarios

- [x] Mostrar una sala vacía y comprobar que tiene 0 ocupados, 80 disponibles y que se encuentra el primer par contiguo.
- [x] Crear una sala parcialmente ocupada, reservar algunos asientos y comprobar su impresión y conteo.
- [x] Comprobar la búsqueda de asientos contiguos en la sala parcialmente ocupada.
- [x] Crear una sala casi llena dejando asientos libres separados horizontalmente y comprobar que no hay pares contiguos.
- [x] Crear una sala completamente llena y comprobar que muestra 80 ocupados y 0 disponibles.
- [x] En la sala llena, comprobar que una reserva adicional falla y que no existen pares contiguos.
- [x] Intentar reservar un asiento ya ocupado y comprobar que falla sin cambiar el estado de la sala.
- [x] Intentar reservar una fila o columna fuera de rango y comprobar que falla sin cambiar el estado de la sala.
- [x] Usar una matriz distinta para cada escenario para que las reservas de una prueba no afecten a las demás.

## Revisión final

- [x] Añadir un comentario descriptivo a cada función.
- [x] Revisar que toda la lógica TypeScript esté en `src/main.ts` y use arrays, funciones, condicionales y bucles sencillos.
- [x] Ejecutar `npm run typecheck` y corregir cualquier error de tipos.
- [x] Ejecutar `npm run console` y comprobar que se muestran los resultados y mensajes previstos.
