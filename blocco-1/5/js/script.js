var array = [];
var numero;
for(var i = 1; i <= 6; i++){
  numero = parseInt(prompt('inserire numero'));
  if (numero % 2 !== 0) {
    array.push(numero);
  }

}
console.log(array);
