// var parola = prompt('inserisci una parola');
// var inverse='';
// for (var i = 0; i < parola.length; i++){
// inverse = parola[i] + inverse;
// };
// console.log(inverse);

// if (parola == inverse) {
//   alert('la parola è palindroma');
// } else{
//   alert('la parola non è palindroma')
// }
var parola = prompt('inserisci una parola');
console.log(isPalindromo(parola));

function isPalindromo(name) {
  var inverse='';
  var messaggio;
  for (var i = 0; i < parola.length; i++){
  inverse = parola[i] + inverse;
  };
  if (parola == inverse) {
    messaggio = 'la parola è palindroma';
  } else{
    messaggio = 'la parola non è palindroma';
  }
  return messaggio;
}
