var numeroA = prompt('Scrivi un numero');
var numeroB = prompt('Scrivi un numero');
var numeroC = prompt('Scrivi un numero');
var numeroD = prompt('Scrivi un numero');
var numeroE = prompt('Scrivi un numero');

var numeri = []

numeri.push(numeroA , numeroB , numeroC , numeroD , numeroE);



for (var i = 0; i < numeri.length; i++) {
  console.log(numeri[i] + numeri[i])
}
