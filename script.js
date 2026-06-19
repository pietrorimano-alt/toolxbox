function pulisciLista(input) {
  return input
    .split(",")
    .map(valore => parseFloat(valore.trim()))
    .filter(valore => !isNaN(valore));
}

/* STUDENTI */

function calcolaMedia() {
  const voti = pulisciLista(document.getElementById("voti").value);

  if (voti.length === 0) {
    document.getElementById("risultatoMedia").innerText = "Inserisci almeno un voto valido.";
    return;
  }

  const somma = voti.reduce((totale, voto) => totale + voto, 0);
  const media = somma / voti.length;

  document.getElementById("risultatoMedia").innerText =
    "La media è: " + media.toFixed(2);
}

function calcolaMediaUniversitaria() {
  const voti = pulisciLista(document.getElementById("votiUni").value);
  const cfu = pulisciLista(document.getElementById("cfuUni").value);

  if (voti.length === 0 || cfu.length === 0 || voti.length !== cfu.length) {
    document.getElementById("risultatoMediaUni").innerText =
      "Inserisci lo stesso numero di voti e CFU.";
    return;
  }

  let sommaPesata = 0;
  let totaleCFU = 0;

  for (let i = 0; i < voti.length; i++) {
    sommaPesata += voti[i] * cfu[i];
    totaleCFU += cfu[i];
  }

  const media = sommaPesata / totaleCFU;

  document.getElementById("risultatoMediaUni").innerText =
    "Media ponderata: " + media.toFixed(2) + " | CFU totali: " + totaleCFU;
}

function calcolaCFU() {
  const cfu = pulisciLista(document.getElementById("listaCfu").value);

  if (cfu.length === 0) {
    document.getElementById("risultatoCFU").innerText = "Inserisci almeno un CFU valido.";
    return;
  }

  const totale = cfu.reduce((somma, valore) => somma + valore, 0);

  document.getElementById("risultatoCFU").innerText =
    "CFU totali: " + totale;
}

function calcolaVotoLaurea() {
  const media = parseFloat(document.getElementById("mediaLaurea").value);
  const puntiTesi = parseFloat(document.getElementById("puntiTesi").value);

  if (isNaN(media) || isNaN(puntiTesi)) {
    document.getElementById("risultatoLaurea").innerText = "Inserisci valori validi.";
    return;
  }

  const base = (media * 110) / 30;
  const votoFinale = base + puntiTesi;

  document.getElementById("risultatoLaurea").innerText =
    "Base: " + base.toFixed(2) + " | Voto stimato: " + votoFinale.toFixed(2) + "/110";
}

function convertiTrentaCentodieci() {
  const voto = parseFloat(document.getElementById("votoTrentesimi").value);

  if (isNaN(voto) || voto < 0 || voto > 30) {
    document.getElementById("risultatoConversioneVoto").innerText =
      "Inserisci un voto valido tra 0 e 30.";
    return;
  }

  const risultato = (voto * 110) / 30;

  document.getElementById("risultatoConversioneVoto").innerText =
    voto + "/30 corrisponde a circa " + risultato.toFixed(2) + "/110";
}

function calcolaVotoMinimo() {
  const mediaAttuale = parseFloat(document.getElementById("mediaAttuale").value);
  const cfuAttuali = parseFloat(document.getElementById("cfuAttuali").value);
  const cfuProssimo = parseFloat(document.getElementById("cfuProssimo").value);
  const mediaObiettivo = parseFloat(document.getElementById("mediaObiettivo").value);

  if (
    isNaN(mediaAttuale) ||
    isNaN(cfuAttuali) ||
    isNaN(cfuProssimo) ||
    isNaN(mediaObiettivo) ||
    cfuAttuali <= 0 ||
    cfuProssimo <= 0
  ) {
    document.getElementById("risultatoVotoMinimo").innerText =
      "Inserisci valori validi.";
    return;
  }

  const votoNecessario =
    ((mediaObiettivo * (cfuAttuali + cfuProssimo)) - (mediaAttuale * cfuAttuali)) / cfuProssimo;

  if (votoNecessario > 30) {
    document.getElementById("risultatoVotoMinimo").innerText =
      "Servirebbe " + votoNecessario.toFixed(2) + ", quindi non è possibile con un solo esame.";
  } else if (votoNecessario < 18) {
    document.getElementById("risultatoVotoMinimo").innerText =
      "Ti basterebbe almeno 18. Voto teorico richiesto: " + votoNecessario.toFixed(2) + ".";
  } else {
    document.getElementById("risultatoVotoMinimo").innerText =
      "Devi prendere almeno " + votoNecessario.toFixed(2) + " al prossimo esame.";
  }
}

function calcolaCFUMancanti() {
  const conseguiti = parseFloat(document.getElementById("cfuConseguiti").value);
  const totali = parseFloat(document.getElementById("cfuTotaliLaurea").value);

  if (isNaN(conseguiti) || isNaN(totali) || totali <= 0 || conseguiti < 0) {
    document.getElementById("risultatoCFUMancanti").innerText =
      "Inserisci valori validi.";
    return;
  }

  const mancanti = totali - conseguiti;

  document.getElementById("risultatoCFUMancanti").innerText =
    mancanti <= 0
      ? "Hai raggiunto o superato i CFU richiesti."
      : "Ti mancano " + mancanti + " CFU.";
}

/* FINANZA */

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

function calcolaInteresseComposto() {
  const capitale = parseFloat(document.getElementById("capitaleIniziale").value);
  const tasso = parseFloat(document.getElementById("tassoInteresse").value);
  const anni = parseFloat(document.getElementById("anniInvestimento").value);

  if (isNaN(capitale) || isNaN(tasso) || isNaN(anni) || capitale <= 0 || anni <= 0) {
    document.getElementById("risultatoInteresseComposto").innerText =
      "Inserisci valori validi.";
    return;
  }

  const finale = capitale * Math.pow(1 + tasso / 100, anni);
  const guadagno = finale - capitale;

  document.getElementById("risultatoInteresseComposto").innerText =
    "Capitale finale: €" + finale.toFixed(2) + " | Guadagno: €" + guadagno.toFixed(2);
}

function calcolaObiettivoRisparmio() {
  const obiettivo = parseFloat(document.getElementById("obiettivoRisparmio").value);
  const mesi = parseFloat(document.getElementById("mesiRisparmio").value);

  if (isNaN(obiettivo) || isNaN(mesi) || obiettivo <= 0 || mesi <= 0) {
    document.getElementById("risultatoObiettivoRisparmio").innerText =
      "Inserisci valori validi.";
    return;
  }

  const mensile = obiettivo / mesi;

  document.getElementById("risultatoObiettivoRisparmio").innerText =
    "Devi risparmiare circa €" + mensile.toFixed(2) + " al mese.";
}

function calcolaRataPrestito() {
  const importo = parseFloat(document.getElementById("importoPrestito").value);
  const tassoAnnuo = parseFloat(document.getElementById("tassoPrestito").value);
  const anni = parseFloat(document.getElementById("anniPrestito").value);

  if (isNaN(importo) || isNaN(tassoAnnuo) || isNaN(anni) || importo <= 0 || anni <= 0) {
    document.getElementById("risultatoRataPrestito").innerText =
      "Inserisci valori validi.";
    return;
  }

  const mesi = anni * 12;
  const tassoMensile = tassoAnnuo / 100 / 12;

  let rata;

  if (tassoMensile === 0) {
    rata = importo / mesi;
  } else {
    rata = importo * (tassoMensile * Math.pow(1 + tassoMensile, mesi)) /
      (Math.pow(1 + tassoMensile, mesi) - 1);
  }

  document.getElementById("risultatoRataPrestito").innerText =
    "Rata mensile stimata: €" + rata.toFixed(2);
}

/* LAVORO */

function calcolaStipendio() {
  const stipendio = parseFloat(document.getElementById("stipendio").value);
  const tipo = document.getElementById("tipoStipendio").value;

  if (isNaN(stipendio)) {
    document.getElementById("risultatoStipendio").innerText = "Inserisci uno stipendio valido.";
    return;
  }

  const annuo = tipo === "settimanale" ? stipendio * 52 : stipendio * 12;

  document.getElementById("risultatoStipendio").innerText =
    "Guadagno annuo: €" + annuo.toFixed(2);
}

function calcolaMensile() {
  const annuo = parseFloat(document.getElementById("stipendioAnnuo").value);

  if (isNaN(annuo)) {
    document.getElementById("risultatoMensile").innerText = "Inserisci un valore valido.";
    return;
  }

  document.getElementById("risultatoMensile").innerText =
    "Stipendio mensile: €" + (annuo / 12).toFixed(2);
}

function calcolaGuadagnoOrario() {
  const stipendio = parseFloat(document.getElementById("stipendioMensile").value);
  const ore = parseFloat(document.getElementById("oreMensili").value);

  if (isNaN(stipendio) || isNaN(ore) || ore <= 0) {
    document.getElementById("risultatoOrario").innerText = "Inserisci valori validi.";
    return;
  }

  document.getElementById("risultatoOrario").innerText =
    "Guadagno orario: €" + (stipendio / ore).toFixed(2);
}

function calcolaOreMese() {
  const oreGiorno = parseFloat(document.getElementById("oreGiornaliere").value);
  const giorni = parseFloat(document.getElementById("giorniLavorativi").value);

  if (isNaN(oreGiorno) || isNaN(giorni)) {
    document.getElementById("risultatoOreMese").innerText = "Inserisci valori validi.";
    return;
  }

  document.getElementById("risultatoOreMese").innerText =
    "Ore lavorate nel mese: " + (oreGiorno * giorni);
}

function calcolaStraordinario() {
  const paga = parseFloat(document.getElementById("pagaOraria").value);
  const oreExtra = parseFloat(document.getElementById("oreExtra").value);

  if (isNaN(paga) || isNaN(oreExtra)) {
    document.getElementById("risultatoStraordinario").innerText = "Inserisci valori validi.";
    return;
  }

  document.getElementById("risultatoStraordinario").innerText =
    "Compenso straordinario: €" + (paga * oreExtra).toFixed(2);
}

/* SALUTE */

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

function calcolaAcqua() {
  const peso = parseFloat(document.getElementById("pesoAcqua").value);

  if (isNaN(peso) || peso <= 0) {
    document.getElementById("risultatoAcqua").innerText =
      "Inserisci un peso valido.";
    return;
  }

  const acqua = peso * 0.035;

  document.getElementById("risultatoAcqua").innerText =
    "Dovresti bere circa " + acqua.toFixed(2) + " litri al giorno.";
}

function calcolaCalorie() {
  const peso = parseFloat(document.getElementById("pesoCalorie").value);

  if (isNaN(peso) || peso <= 0) {
    document.getElementById("risultatoCalorie").innerText =
      "Inserisci un peso valido.";
    return;
  }

  const calorie = peso * 30;

  document.getElementById("risultatoCalorie").innerText =
    "Fabbisogno stimato: " + calorie.toFixed(0) + " kcal/giorno.";
}

function calcolaPesoIdeale() {
  const altezza = parseFloat(document.getElementById("altezzaIdeale").value);

  if (isNaN(altezza) || altezza <= 0) {
    document.getElementById("risultatoPesoIdeale").innerText =
      "Inserisci un'altezza valida.";
    return;
  }

  const altezzaM = altezza / 100;
  const pesoIdeale = 22 * (altezzaM * altezzaM);

  document.getElementById("risultatoPesoIdeale").innerText =
    "Peso ideale stimato: " + pesoIdeale.toFixed(1) + " kg";
}

/* AUTO VIAGGI */

function calcolaCostoViaggioAuto() {
  const distanza = parseFloat(document.getElementById("distanzaViaggio").value);
  const consumo = parseFloat(document.getElementById("consumoAuto").value);
  const prezzoCarburante = parseFloat(document.getElementById("prezzoCarburante").value);
  const pedaggi = parseFloat(document.getElementById("pedaggiViaggio").value) || 0;
  const speseExtra = parseFloat(document.getElementById("speseExtraViaggio").value) || 0;
  const persone = parseFloat(document.getElementById("personeViaggio").value) || 1;

  if (
    isNaN(distanza) ||
    isNaN(consumo) ||
    isNaN(prezzoCarburante) ||
    distanza <= 0 ||
    consumo <= 0 ||
    prezzoCarburante <= 0 ||
    persone <= 0
  ) {
    document.getElementById("risultatoCostoViaggioAuto").innerText =
      "Inserisci distanza, consumo, prezzo carburante e persone validi.";
    return;
  }

  const litri = (distanza * consumo) / 100;
  const costoCarburante = litri * prezzoCarburante;
  const totale = costoCarburante + pedaggi + speseExtra;
  const quotaPersona = totale / persone;

  document.getElementById("risultatoCostoViaggioAuto").innerText =
    "Carburante: €" + costoCarburante.toFixed(2) +
    " | Litri stimati: " + litri.toFixed(2) +
    " | Totale: €" + totale.toFixed(2) +
    " | A persona: €" + quotaPersona.toFixed(2);
}

/* RICERCA */

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const ricerca = this.value.toLowerCase().trim();
    const strumenti = document.querySelectorAll(".tool-card");
    const categorie = document.querySelectorAll(".category");

    strumenti.forEach(tool => {
      const nome = tool.getAttribute("data-name") ? tool.getAttribute("data-name").toLowerCase() : "";
      const titolo = tool.querySelector("h3").innerText.toLowerCase();

      if (ricerca === "" || nome.includes(ricerca) || titolo.includes(ricerca)) {
        tool.style.display = "block";
      } else {
        tool.style.display = "none";
      }
    });

    categorie.forEach(categoria => {
      const strumentiVisibili = categoria.querySelectorAll(".tool-card[style='display: block;']");

      if (ricerca === "" || strumentiVisibili.length > 0) {
        categoria.style.display = "block";
      } else {
        categoria.style.display = "none";
      }
    });
  });

  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const primoRisultato = document.querySelector(".tool-card[style='display: block;']");

      if (primoRisultato) {
        primoRisultato.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    }
  });
    if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("service-worker.js")
      .then(function () {
        console.log("Service Worker registrato");
      })
      .catch(function (error) {
        console.log("Errore Service Worker:", error);
      });
  });
 }
}
