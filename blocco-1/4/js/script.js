var nome = prompt('Inserire Nome');
var nomi = ['Aldo','Giovanni','Giacomo','Massimo'];
var controlloNomi;


var controlloNomi = false;

for (var i = 0; i <= nomi.length; i++) {
  if (nome === nomi[i]) {
    controlloNomi = true;
  }
}
if (controlloNomi) {
  console.log('Puoi partecipare');
}else {
  console.log('Non puoi partecipare');
}
