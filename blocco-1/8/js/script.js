var numero = prompt('Inserire numero di 4 cifre');
var somma = 0;

if (numero.length !== 4) {
  alert('Devono essere 4 cifre');
}else{
  for(var x = 0; x < 4; x++){
    somma+= parseInt(numero[x])
  }
  console.log('La somma è: '+ somma)
}
