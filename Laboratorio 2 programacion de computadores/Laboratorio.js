//Luis Alexander Hernandez Martinez

let notas = [7, 9, 8, 10, 6];

function calcularPromedio(notas) {
    let suma = 0;
 
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i]; 
    }
    
    let promedio = suma / notas.length;
    return promedio;
}

let nombre = "Luis";

let promedioFinal = calcularPromedio(notas);
console.log("El promedio de las notas de " + nombre + " es: " + promedioFinal);
