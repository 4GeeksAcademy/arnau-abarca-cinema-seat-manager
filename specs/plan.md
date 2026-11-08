# Plan de implementación: sistema de reservas de asientos de cine

> Este documento describe los pasos para construir la solución; no contiene ni implementa el código de la aplicación.

## Decisiones de diseño

- Implementar la lógica completa en `src/main.ts`, el archivo TypeScript de entrada existente, sin crear otros archivos de lógica.
- Definir constantes para el número de filas (`8`) y columnas (`10`) para evitar repetir valores.
- Usar el tipo `number[][]` para la matriz: `0` representa libre y `1` ocupado.
- Recibir filas y columnas con numeración visible desde 1; convertirlas a índices de matriz restando 1 después de validar los límites.
- Mantener funciones pequeñas y comentarios sencillos. Para representar resultados, utilizar retornos claros y mensajes de consola sin introducir estructuras o patrones avanzados.

## Pasos

1. **Definir dimensiones y representación**
   - Declarar las constantes de filas y columnas.
   - Acordar y documentar el significado de los valores `0` y `1`.

2. **Crear la inicialización de la sala**
   - Escribir una función que construya una matriz con 8 filas.
   - En cada fila, agregar con `push` 10 valores `0`.
   - Devolver la matriz inicializada.

3. **Crear la impresión del estado**
   - Escribir una función que reciba la matriz.
   - Imprimir una cabecera con los números de columna del 1 al 10.
   - Recorrer filas y asientos con bucles y mostrar el número de fila y `L` o `X` según el valor.

4. **Crear la reserva validada**
   - Escribir una función que reciba la matriz, la fila y la columna visibles.
   - Rechazar filas o columnas menores que 1 o mayores que las dimensiones.
   - Convertir a índices de matriz y comprobar si el valor ya es `1`.
   - Si está libre, asignar `1` y mostrar un mensaje de confirmación; en caso contrario, informar que ya está ocupado. Devolver un resultado que permita identificar éxito o fallo.

5. **Crear el conteo de disponibilidad**
   - Recorrer todos los asientos con bucles anidados.
   - Incrementar el contador de ocupados para cada `1`; contar como disponibles los demás asientos válidos (`0`).
   - Devolver ambos totales y mostrar un resumen claro desde la lógica de presentación.

6. **Crear la búsqueda del primer par contiguo**
   - Recorrer cada fila y comparar cada asiento con el que le sigue, sin pasar de la última columna.
   - Cuando ambos sean `0`, devolver las dos posiciones convertidas a numeración desde 1 y detener la búsqueda.
   - Si se termina el recorrido sin coincidencias, devolver un resultado que indique que no existe par y mostrar un mensaje explícito.

7. **Preparar demostraciones de escenarios**
   - Crear una sala nueva para el escenario vacío y mostrar estado, conteo y primer par.
   - Crear una sala aparte para el escenario parcialmente ocupado, aplicar algunas reservas y volver a mostrar estado, conteo y búsqueda.
   - Preparar el escenario casi lleno dejando asientos libres separados horizontalmente; comprobar que no se informa un par.
   - Preparar el escenario lleno ocupando todos los asientos con bucles; comprobar conteo, rechazo de una reserva adicional y ausencia de pares.
   - Para probar una reserva duplicada y límites inválidos, repetir las llamadas de reserva con posiciones ocupadas y fuera de rango. Mantener los escenarios separados para que las pruebas no afecten unas a otras.

8. **Revisar claridad y validar**
   - Confirmar que cada función tenga un comentario descriptivo y mensajes entendibles.
   - Confirmar que todos los recorridos respeten las dimensiones y que la búsqueda sea horizontal dentro de una misma fila.
   - Una vez implementado el plan, ejecutar `npm run typecheck` para revisar TypeScript y `npm run console` para comprobar los mensajes y escenarios en consola.

## Criterios de finalización

- Todas las operaciones descritas en `spec.md` están implementadas en un solo archivo TypeScript.
- El estado de la matriz se conserva correctamente entre reservas y consultas.
- Los cuatro escenarios solicitados, además de reserva duplicada y posición inválida, se pueden observar con mensajes claros.
- El chequeo de tipos y la ejecución por consola terminan correctamente.
