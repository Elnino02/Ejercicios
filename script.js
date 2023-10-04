//ejercicio 1
//const array =  [2, 25, 20, 5, 50];
//const NumMayorOIgual = array.filter(function (mayor){
  // return mayor >= 5; 
//});
//NumMayorOIgual.forEach(function(imprimir){
//console.log(imprimir);
//});


//ejercicio 2

//const arreglo = ['naranja', 'platano', 'manzana', 'fresa', 'kiwi'];
//const frutas = arreglo.slice (2, -1);
//console.log(frutas);

//ejercicio 3
const array = [5, 10, 15, 20];
const suma = 10;
const numeros = array.map(num => num + suma);
console.log(numeros);

//ejercicio 4
const arr = ['H', 'I', 'J'];
const arr1 = ['K' ,'L','M'];
const juntar = arr.concat(arr1);
console.log(juntar);

//ejercicio 5
const arre = ['Mexico' , 'USA', 'Francia'];
console.log(arre.includes('Francia'));