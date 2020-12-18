var parolaUno = prompt('Inserire una parola');
var parolaDue = prompt('Inserire una parola');
if (parolaUno.length > parolaDue.length) {
  console.log(parolaUno);
}else if (parolaUno.length < parolaDue.length) {
  console.log(parolaDue);
}else {
  console.log('Uguali');
}
