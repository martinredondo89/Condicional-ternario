// Operador ternario , se puede usar como una expresión if-else de una línea.

// La sintaxis es a ? b : c, donde a es la condición, b es el código que se ejecutará 

// cuando la condición regrese true y c es el código que se ejecutará cuando la condición regrese false.

// La siguiente función usa una if/else declaración para verificar una condición:

/*
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
console.log(findGreater(8,3));
*/

// Esto se puede reescribir usando el operador ternario condicional:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

console.log(findGreater(8,3));