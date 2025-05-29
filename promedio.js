function calcularPromedio(lista) {
    const suma = lista.reduce((a, b) => a + b, 0);
    return suma / lista.length;
}

// Ejemplo de uso
const numeros = [10, 20, 30, 40];
console.log("Promedio:", calcularPromedio(numeros));
