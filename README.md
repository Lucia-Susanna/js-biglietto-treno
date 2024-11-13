BIGLIETTO DEL TRENO
===
repo: je-biglietto-treno

Istruzioni:
- il programma deve chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero e in base a questi due dati inseriti deve calcolare il  prezzo del biglietto

Dati a disposizione:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 

Svolgimento:
- creo due variabili in cui inserirsco in ciascuna un prompt. il primo sarà per inserire il numero di km e nel secondo l'età.
- moltiplicando il valore della variabile km * il prezzo a km ottengo il prezzo intero
- if in cui indico che se il dato dell'età è < di 18 devo applicare al prezzo intero uno sconto del 20%
- else if nel caso in cui iò valore dell'età dia >= 65 applico al prezzo intero uno sconto del 40%
- ogni valore che mi indica un prezzo dovrà essere arrotondato alla secondaa cifra decimale aggiungendo un toFixed(2)
