var numeroUno = prompt('Inserire il primo numero');
var numeroDue = prompt('Inserire il secondo numero');
var stampa = document.getElementById('stampa');
if (numeroUno > numeroDue) {
  console.log(numeroUno);
}else if (numeroUno < numeroDue) {
  console.log(numeroDue);
}else {
  console.log('Siamo pari');
}
