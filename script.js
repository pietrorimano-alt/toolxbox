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
    "La media è: " + media.toFixed(2);
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

function calcolaSconto() {
  const prezzo = parseFloat(document.getElementById("prezzo").value);
  const sconto = parseFloat(document.getElementById("sconto").value);

  if (isNaN(prezzo) || isNaN(sconto)) {
    document.getElementById("risultatoSconto").innerText = "Inserisci valori validi.";
    return;
  }

  const risparmio = (prezzo * sconto) / 100;
  const prezzoFinale = prezzo - risparmio;

  document.getElementById("risultatoSconto").innerText =
    "Prezzo finale: €" + prezzoFinale.toFixed(2) + " | Risparmi: €" + risparmio.toFixed(2);
}

function calcolaIva() {
  const prezzo = parseFloat(document.getElementById("prezzoIva").value);
  const iva = parseFloat(document.getElementById("iva").value);

  if (isNaN(prezzo) || isNaN(iva)) {
    document.getElementById("risultatoIva").innerText = "Inserisci valori validi.";
    return;
  }

  const valoreIva = (prezzo * iva) / 100;
  const totale = prezzo + valoreIva;

  document.getElementById("risultatoIva").innerText =
    "Totale con IVA: €" + totale.toFixed(2) + " | IVA: €" + valoreIva.toFixed(2);
}

function calcolaStipendio() {
  const stipendio = parseFloat(document.getElementById("stipendio").value);
  const tipo = document.getElementById("tipoStipendio").value;

  if (isNaN(stipendio)) {
    document.getElementById("risultatoStipendio").innerText = "Inserisci uno stipendio valido.";
    return;
  }

  let annuo = tipo === "settimanale" ? stipendio * 52 : stipendio * 12;

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

function calcolaBMI() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altezzaCm = parseFloat(document.getElementById("altezza").value);

  if (isNaN(peso) || isNaN(altezzaCm) || altezzaCm <= 0) {
    document.getElementById("risultatoBMI").innerText = "Inserisci peso e altezza validi.";
    return;
  }

  const altezzaM = altezzaCm / 100;
  const bmi = peso / (altezzaM * altezzaM);

  document.getElementById("risultatoBMI").innerText =
    "Il tuo BMI è: " + bmi.toFixed(2);
}

function calcolaRisparmio() {
  const mensile = parseFloat(document.getElementById("risparmioMensile").value);

  if (isNaN(mensile)) {
    document.getElementById("risultatoRisparmio").innerText = "Inserisci un importo valido.";
    return;
  }

  const annuale = mensile * 12;

  document.getElementById("risultatoRisparmio").innerText =
    "Risparmio annuale: €" + annuale.toFixed(2);
}

document.getElementById("searchInput").addEventListener("input", function () {
  const ricerca = this.value.toLowerCase();
  const strumenti = document.querySelectorAll(".tool-card");

  strumenti.forEach(tool => {
    const nome = tool.getAttribute("data-name").toLowerCase();
    const titolo = tool.querySelector("h3").innerText.toLowerCase();

    if (nome.includes(ricerca) || titolo.includes(ricerca)) {
      tool.style.display = "block";
    } else {
      tool.style.display = "none";
    }
  });
});