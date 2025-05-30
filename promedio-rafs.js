function calcularPromedio(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error('Se requiere un array no vacío de números');
  }
  
  const suma = numeros.reduce((total, num) => total + num, 0);
  return suma / numeros.length;
}

module.exports = calcularPromedio;