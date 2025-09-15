/**
 * EJERCICIO DE PARCIAL: SISTEMA DE GESTIÓN DE BIBLIOTECA UNIVERSITARIA
 * 
 * OBJETIVO: Implementar un sistema que permita gestionar los préstamos de libros 
 * en una biblioteca universitaria, aplicando conceptos avanzados de manipulación
 * de objetos y arrays en JavaScript.
 * 
 * INSTRUCCIONES:
 * 1. Analiza la estructura de datos proporcionada
 * 2. Implementa todas las funciones requeridas 
 * 3. Prueba tus funciones con los datos de ejemplo y los casos de prueba proporcionados
 * 4. NO modifiques la estructura base de los objetos, solo añade las funcionalidades solicitadas
 */

// Importamos los datos desde el archivo JSON usando ES6 import
import bibliotecaData from './datos_biblioteca.json' assert { type: 'json' };

// Creamos una copia de los datos para trabajar con ellos
const biblioteca = { ...bibliotecaData };

/**
 * FUNCIONES A IMPLEMENTAR:
 */

/**
 * 1. Función para prestar un libro
 * 
 * Implementa una función que gestione el proceso de préstamo de un libro a un estudiante.
 * Deberás realizar las validaciones necesarias y actualizar los registros correspondientes.
 * 
 * @param {number} idLibro - ID del libro a prestar
 * @param {number} idEstudiante - ID del estudiante que pide prestado
 * @param {string} fechaPrestamo - Fecha del préstamo (formato YYYY-MM-DD)
 * @return {boolean|string} - true si se realizó el préstamo, mensaje de error si no
 */
function prestarLibro(idLibro, idEstudiante, fechaPrestamo) {
  let libro = biblioteca.libros.find(libro => libro.id == id);
  let estudiante = biblioteca.estudiantes.find(estudiante => estudiante.id == id);
  let hayLibro = estudiante.librosActuales.length;
  if(idLibro > biblioteca.libros.length || idEstudiante > biblioteca.estudiantes.length || fechaPrestamo!==Date.now){
    console.log("Ingrese datos válidos")
  }else{
    if(libro.disponible === false){
      console.log("El libro está siendo utilizado por otro estudiante");
    } else{
      if(hayLibro===0){
        estudiante.librosActuales.push(1);
      }else{
        let cantLibros = estudiante.librosActuales.pop();
        estudiante.librosActuales.push(cantLibros+1);
      }
      libro.prestamos.push({"estudiante": estudiante.nombre, "fechaPrestamo":fechaPrestamo, "fechaDevolucion": null});
      libro.disponible=false;
      console.log("El libro es tuyo!Procura devolverlo en 3 meses y cuidarlo")
    }
  }
  
}


/**
 * 2. Función para buscar libros
 * 
 * Desarrolla una función de búsqueda flexible que permita encontrar libros 
 * según diversos criterios como título, autor, categoría y disponibilidad.
 * 
 * @param {object} criterios - Objeto con los criterios de búsqueda
 * @return {array} - Array con los libros que cumplen los criterios
 */
function buscarLibros(criterios) {
  // Tu código aquí
  // Ejemplo de criterios: {titulo: "javascript", disponible: true}
  let criterio = criterios.key;
  switch(criterio){
    case "titulo":
      break;
    case "autor":
      break;
    case "categoria":
      break;
    case "disponibilidad":
      break;
    case null:
      for(let i = 0; i < biblioteca.libros.length-1; i++){
        let libro = biblioteca.libros.find(libro => libro.id == i);
        if(libro.disponible === criterios.disponible){
          console.log(libro);
        }
      }
  }
}


// ALGUNOS CASOS DE PRUEBA
// Descomentar para probar tu implementación


console.log("Probando préstamo de libro:");
console.log(prestarLibro(1, 3, "2025-09-13"));
/*
console.log("\nBuscando libros de programación disponibles:");
console.log(buscarLibros({categoria: "Programación", disponible: true}));

*/

