function calcularPromedio(numeros) {
  if (!numeros || numeros.length === 0) return 0;
  const suma = numeros.reduce((total, num) => total + num, 0);
  return suma / numeros.length;
}

module.exports = calcularPromedio;