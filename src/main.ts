if (typeof document !== "undefined") {
  import("./style.css").then(() => {
    const app = document.querySelector<HTMLParagraphElement>("#app");
    if (app) {
      app.textContent = "If you can see this, Tailwind is working.";
    }
  });
}

const NUM_FILAS = 8;
const NUM_COLUMNAS = 10;

// Cada asiento usa 0 para libre y 1 para ocupado.
type Sala = number[][];

// Crea y devuelve una sala con todos sus asientos inicialmente libres.
function inicializarSala(): Sala {
  const sala: Sala = [];

  for (let fila = 0; fila < NUM_FILAS; fila++) {
    const asientos: number[] = [];
    for (let columna = 0; columna < NUM_COLUMNAS; columna++) {
      asientos.push(0);
    }
    sala.push(asientos);
  }

  return sala;
}

// Imprime la numeración de columnas y el estado de cada asiento de la sala.
function mostrarSala(sala: Sala): void {
  let cabecera = "     ";
  for (let columna = 1; columna <= NUM_COLUMNAS; columna++) {
    if (columna < 10) {
      cabecera += ` ${columna} `;
    } else {
      cabecera += `${columna} `;
    }
  }
  console.log(cabecera);

  for (let fila = 0; fila < NUM_FILAS; fila++) {
    const numeroFila = fila + 1;
    let linea = "Fila ";
    if (numeroFila < 10) {
      linea += ` ${numeroFila}: `;
    } else {
      linea += `${numeroFila}: `;
    }
    for (let columna = 0; columna < NUM_COLUMNAS; columna++) {
      if (sala[fila][columna] === 0) {
        linea += "L  ";
      } else {
        linea += "X  ";
      }
    }
    console.log(linea);
  }
}

// Reserva el asiento solicitado usando filas y columnas numeradas desde 1.
function reservarAsiento(sala: Sala, fila: number, columna: number): boolean {
  if (fila < 1 || fila > NUM_FILAS || columna < 1 || columna > NUM_COLUMNAS) {
    console.log(`No se pudo reservar: la posición fila ${fila}, columna ${columna} no es válida.`);
    return false;
  }

  const indiceFila = fila - 1;
  const indiceColumna = columna - 1;

  if (sala[indiceFila][indiceColumna] === 1) {
    console.log(`No se pudo reservar: el asiento fila ${fila}, columna ${columna} ya está ocupado.`);
    return false;
  } else {
    sala[indiceFila][indiceColumna] = 1;
    console.log(`Reserva confirmada: fila ${fila}, columna ${columna}.`);
    return true;
  }
}

// Cuenta los asientos ocupados y disponibles, y devuelve ambos totales.
function contarAsientos(sala: Sala): { ocupados: number; disponibles: number } {
  let ocupados = 0;
  let disponibles = 0;

  for (let fila = 0; fila < NUM_FILAS; fila++) {
    for (let columna = 0; columna < NUM_COLUMNAS; columna++) {
      if (sala[fila][columna] === 1) {
        ocupados++;
      } else {
        disponibles++;
      }
    }
  }

  return { ocupados, disponibles };
}

// Muestra por consola los totales de ocupados y disponibles.
function mostrarConteo(sala: Sala): void {
  const conteo = contarAsientos(sala);
  console.log(`Asientos ocupados: ${conteo.ocupados}; disponibles: ${conteo.disponibles}.`);
}

// Devuelve el primer par de asientos libres contiguos horizontalmente.
function buscarAsientosContiguos(
  sala: Sala,
): { fila: number; primeraColumna: number; segundaColumna: number } | null {
  for (let fila = 0; fila < NUM_FILAS; fila++) {
    for (let columna = 0; columna < NUM_COLUMNAS - 1; columna++) {
      if (sala[fila][columna] === 0 && sala[fila][columna + 1] === 0) {
        return {
          fila: fila + 1,
          primeraColumna: columna + 1,
          segundaColumna: columna + 2,
        };
      }
    }
  }

  return null;
}

// Muestra el primer par contiguo encontrado o informa que no existe.
function mostrarAsientosContiguos(sala: Sala): void {
  const par = buscarAsientosContiguos(sala);
  if (par === null) {
    console.log("No hay dos asientos libres contiguos horizontalmente.");
  } else {
    console.log(
      `Asientos contiguos encontrados: fila ${par.fila}, columnas ${par.primeraColumna} y ${par.segundaColumna}.`,
    );
  }
}

// Ejecuta las demostraciones solicitadas usando una matriz independiente por escenario.
function ejecutarEscenarios(): void {
  console.log("\n=== Sala vacía ===");
  const salaVacia = inicializarSala();
  mostrarSala(salaVacia);
  mostrarConteo(salaVacia);
  mostrarAsientosContiguos(salaVacia);

  console.log("\n=== Sala parcialmente ocupada ===");
  const salaParcial = inicializarSala();
  reservarAsiento(salaParcial, 1, 1);
  reservarAsiento(salaParcial, 2, 3);
  mostrarSala(salaParcial);
  mostrarConteo(salaParcial);
  mostrarAsientosContiguos(salaParcial);

  console.log("\n=== Comprobaciones de reserva inválida ===");
  const conteoAntesDeErrores = contarAsientos(salaParcial);
  reservarAsiento(salaParcial, 1, 1);
  reservarAsiento(salaParcial, 0, 11);
  const conteoDespuesDeErrores = contarAsientos(salaParcial);
  if (
    conteoAntesDeErrores.ocupados === conteoDespuesDeErrores.ocupados &&
    conteoAntesDeErrores.disponibles === conteoDespuesDeErrores.disponibles
  ) {
    console.log("Comprobación correcta: los intentos fallidos no cambiaron la sala.");
  } else {
    console.log("Error: un intento fallido cambió el estado de la sala.");
  }

  console.log("\n=== Sala casi llena con asientos sueltos ===");
  const salaCasiLlena = inicializarSala();
  for (let fila = 0; fila < NUM_FILAS; fila++) {
    for (let columna = 0; columna < NUM_COLUMNAS; columna++) {
      salaCasiLlena[fila][columna] = 1;
    }
  }
  salaCasiLlena[0][0] = 0;
  salaCasiLlena[0][2] = 0;
  mostrarSala(salaCasiLlena);
  mostrarConteo(salaCasiLlena);
  mostrarAsientosContiguos(salaCasiLlena);

  console.log("\n=== Sala completamente llena ===");
  const salaLlena = inicializarSala();
  for (let fila = 0; fila < NUM_FILAS; fila++) {
    for (let columna = 0; columna < NUM_COLUMNAS; columna++) {
      salaLlena[fila][columna] = 1;
    }
  }
  mostrarSala(salaLlena);
  mostrarConteo(salaLlena);
  reservarAsiento(salaLlena, 8, 10);
  mostrarAsientosContiguos(salaLlena);
}

ejecutarEscenarios();

export {};
