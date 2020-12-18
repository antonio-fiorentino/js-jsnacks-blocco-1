var somma = 0;
var media;
for (var i = 1; i <= 10; i++) {
  somma+= parseInt(i);
  media=(somma/i);
}
console.log('La somma è: ' + somma);
console.log('La media è: ' + media);
