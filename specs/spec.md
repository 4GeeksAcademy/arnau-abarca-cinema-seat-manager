# Especificación: sistema de reservas de asientos de cine

## Objetivo

Definir un sistema sencillo de reservas que administre los asientos de una sala de cine mediante una matriz y operaciones implementadas con funciones. La solución está pensada para TypeScript y para ejecutarse desde consola.

## Sala y representación

- La sala consta de **8 filas y 10 columnas**.
- Cada asiento se representa internamente con un número: `0` significa libre y `1` significa ocupado.
- Las posiciones que se muestran al usuario se numeran desde **1**. La fila 1 y la columna 1 corresponden a los índices internos 0, 0.
- Una posición fuera de los límites de la sala no puede reservarse y debe comunicarse como una operación fallida.

## Funcionalidades

1. **Inicializar la sala:** crear y devolver una matriz de 8 × 10 con todos los asientos libres.
2. **Mostrar el estado:** imprimir en consola una representación legible, con los números de fila y columna y los símbolos `L` (libre) y `X` (ocupado).
3. **Reservar un asiento:** recibir fila y columna, validar que la posición exista y que el asiento esté libre, cambiar su valor de `0` a `1` y comunicar claramente si la reserva se confirmó o no. Un asiento ocupado no debe modificarse.
4. **Contar asientos:** devolver cuántos asientos están ocupados y cuántos disponibles en toda la sala.
5. **Buscar dos asientos contiguos:** recorrer la sala de izquierda a derecha y de arriba abajo para localizar dos asientos libres consecutivos horizontalmente en una misma fila. Devolver el primer par encontrado con sus posiciones numeradas desde 1. Si no existe ningún par, indicarlo claramente.

## Escenarios de comprobación

- **Sala vacía:** todos los asientos aparecen libres; el conteo es 0 ocupados y 80 disponibles; la búsqueda encuentra el primer par contiguo.
- **Sala parcialmente ocupada:** algunas reservas válidas quedan marcadas como ocupadas; el conteo coincide con ellas y la búsqueda encuentra un par libre si lo hay.
- **Sala casi llena con asientos sueltos:** quedan asientos libres, pero no hay dos libres contiguos horizontalmente; la búsqueda informa que no hay pares.
- **Sala completamente llena:** los 80 asientos aparecen ocupados; el conteo es 80 ocupados y 0 disponibles; nuevas reservas y la búsqueda de pares fallan con mensajes claros.
- **Reserva duplicada o posición inválida:** la operación informa del motivo del fallo y conserva el estado de la sala.

## Restricciones

- Mantener toda la lógica TypeScript en un único archivo.
- Usar construcciones sencillas: arrays, variables, funciones, `if/else` y bucles `for`/`while`. Se pueden usar `push` si hace falta.
- Evitar métodos avanzados de arrays y abstracciones innecesarias.
- Añadir comentarios en el código que expliquen la responsabilidad de cada función.
- Mostrar mensajes claros para reservas confirmadas, asientos ocupados, resultados de conteo y búsqueda de asientos contiguos.
