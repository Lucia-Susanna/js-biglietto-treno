let kmViaggiatore = parseInt(prompt('Inserisci numero di km'));
let etaViaggiatore = parseInt(prompt('Inserisci età viaggiatore'));

const prezzoKm = 0.21

const prezzoIntero = (kmViaggiatore * prezzoKm).toFixed(2);
console.log(prezzoIntero);
