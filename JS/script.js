let kmViaggiatore = parseInt(prompt('Inserisci numero di km'));
let etaViaggiatore = parseInt(prompt('Inserisci età viaggiatore'));

// DATI
const prezzoKm = 0.21
const scontoMinorenni = 0.2
const scontoSenior = 0.4

// CALCOLO PREZZO INTERO
const prezzoIntero = (kmViaggiatore * prezzoKm).toFixed(2);
console.log('Prezzo Intero:', `${prezzoIntero} €`);

// CONDIZIONI SCONTI MINORENNI E SENIOR
if (etaViaggiatore<18){
  let prezzoScontato = (prezzoIntero - scontoMinorenni * prezzoIntero).toFixed(2);
    console.log('Prezzo scontato:', `${prezzoScontato} €`);
} else if (etaViaggiatore>=65){
  let prezzoScontato = prezzoIntero - scontoSenior * prezzoIntero;
  console.log('Prezzo scontato:', `${prezzoScontato} €`);
}
