var pariDispari = prompt('scegli pari o dispari');
console.log(pariDispari);
var numero = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(numero);
// var numeroComputer = Math.floor(Math.random()* 5 + 1);
// console.log(numeroComputer);
// var risultato = numeroComputer + numero;
// console.log(risultato);
// var esito = 'vince il computer';
console.log(giocoPariDispari(pariDispari,numero));

function giocoPariDispari(pariOdispari,number) {
  var numeroComputer = Math.floor(Math.random()* 5 + 1);
  console.log(numeroComputer);
  var risultato = numeroComputer + numero;
  console.log(risultato);
  var esito = 'vince il computer';
  if (risultato % 2 == 0 && pariDispari == 'pari') {
    esito = 'vince il giocatore';
    console.log(esito);
  }
  else if (risultato % 2 > 0 && pariDispari == 'dispari') {
    esito = 'vince il giocatore';
    console.log(esito);
  }
  return esito;
}
