// Salviamo in una variabile il nostro bottone "click"
var bottoneGenera = document.getElementById('btn_genera');
console.log(btn_genera);

// Rimaniamo in attesa dell'evento "click" sul nostro bottone
bottoneGenera.addEventListener('click',
// Il bottone viene cliccato
  function () {
    // prendiamo il valore dell'input name_i
    var nome = document.getElementById('name_i').value;
    console.log(nome);
    // prendiamo il valore dell'input num_km
    var kmDaPercorrere = document.getElementById('num_km').value;
    console.log(kmDaPercorrere);
    // prendiamo il valore dell'input fascia_eta
    var fasciaEta = document.getElementById('fascia_eta').value;
    console.log(fasciaEta);

    // Dati calcolo biglietto
    var prezzoKm = 0.21;
    console.log('prezzo al km', prezzoKm);
    var costoBiglietto = prezzoKm * kmDaPercorrere;
    console.log('costo base biglietto', costoBiglietto);

    // Calcolo Biglietto
    var offerta;

    if (fasciaEta == 'young') {
      // sconto 20%
      costoBiglietto = costoBiglietto - (costoBiglietto * 20 / 100);
      offerta = "Sconto Minorenne";
    }
    else if (fasciaEta == 'silver') {
      // sconto 40%
      costoBiglietto = costoBiglietto - (costoBiglietto * 40 / 100);
      offerta = "Sconto Silver";
    }
    else {
      offerta = "Biglietto Standard";
    }

    // lasciamo solo 2 decimali
    costoBiglietto = costoBiglietto.toFixed(2);

    // generatore N. casuale Carrozza e codice CP
    var numCarrozza = Math.floor(Math.random() * 10) + 1;
    var numCP = Math.floor(Math.random() * 90000);

    // Stampiamo nell'HTML
    document.getElementById('nome_passeggero').innerHTML = nome;
    document.getElementById('tipologia_sconto').innerHTML = offerta;
    document.getElementById('numb_train').innerHTML = numCarrozza;
    document.getElementById('code_ip').innerHTML = numCP;
    document.getElementById('price_train').innerHTML = costoBiglietto + '€';

    // Modifico la mia class da none a block
    document.getElementById('informazioni_output').className = 'block';
  }
);


// Salviamo in una variabile il nostro "annulla click";
var bottoneAnnulla = document.getElementById('btn_annulla');

// // Rimaniamo in attesa dell'evento "annulla click"
bottoneAnnulla.addEventListener('click',
  function () {
    // nascondo il biglietto modificando la class a none
    document.getElementById('informazioni_output').className = 'none';

    // svuoto gli input
    document.getElementById('name_i').value  = '';
    document.getElementById('num_km').value = '';
    document.getElementById('fascia_eta').value = '';

    // svuoto il biglietto
    document.getElementById('nome_passeggero').innerHTML = '';
    document.getElementById('tipologia_sconto').innerHTML = '';
    document.getElementById('numb_train').innerHTML = '';
    document.getElementById('code_ip').innerHTML = '';
    document.getElementById('price_train').innerHTML = '';
  }
);
