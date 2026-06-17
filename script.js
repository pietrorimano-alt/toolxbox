function calcolaMedia() {
  const input = document.getElementById("voti").value;

  const voti = input
    .split(",")
    .map(voto => parseFloat(voto.trim()))
    .filter(voto => !isNaN(voto));

  if (voti.length === 0) {
    document.getElementById("risultatoMedia").innerText = "Inserisci almeno un voto valido.";
    return;
  }

  const somma = voti.reduce((totale, voto) => totale + voto, 0);
  const media = somma / voti.length;

  document.getElementById("risultatoMedia").innerText =
    "La tua media è: " + media.toFixed(2);
}

function calcolaPercentuale() {
  const numero = parseFloat(document.getElementById("numero").value);
  const percentuale = parseFloat(document.getElementById("percentuale").value);

  if (isNaN(numero) || isNaN(percentuale)) {
    document.getElementById("risultatoPercentuale").innerText = "Inserisci valori validi.";
    return;
  }

  const risultato = (numero * percentuale) / 100;

  document.getElementById("risultatoPercentuale").innerText =
    percentuale + "% di " + numero + " è " + risultato.toFixed(2);
}

function calcolaStipendio() {
  const stipendio = parseFloat(document.getElementById("stipendio").value);
  const tipo = document.getElementById("tipoStipendio").value;

  if (isNaN(stipendio)) {
    document.getElementById("risultatoStipendio").innerText = "Inserisci uno stipendio valido.";
    return;
  }

  let annuo = 0;

  if (tipo === "settimanale") {
    annuo = stipendio * 52;
  } else {
    annuo = stipendio * 12;
  }

  document.getElementById("risultatoStipendio").innerText =
    "Guadagno annuo: €" + annuo.toFixed(2);
}

function calcolaEta() {
  const data = document.getElementById("dataNascita").value;

  if (!data) {
    document.getElementById("risultatoEta").innerText = "Inserisci una data.";
    return;
  }

  const nascita = new Date(data);
  const oggi = new Date();

  let eta = oggi.getFullYear() - nascita.getFullYear();
  const mese = oggi.getMonth() - nascita.getMonth();

  if (mese < 0 || (mese === 0 && oggi.getDate() < nascita.getDate())) {
    eta--;
  }

  document.getElementById("risultatoEta").innerText =
    "Hai " + eta + " anni.";
}