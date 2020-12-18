var numero = parseInt(prompt('Scrivi un numero'));
if (numero > 10) {
  alert('Fermati');
}else {
  for (var i = 1 ; i <= numero ; i++) {
    console.log(Math.pow(i, 3));
  }

}
