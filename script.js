function pulisciLista(input) {
  return input
    .split(",")
    .map(valore => parseFloat(valore.trim()))
    .filter(valore => !isNaN(valore));
}

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
      "Per raggiungere questa media servirebbe " + votoNecessario.toFixed(2) + ", quindi non è possibile con un solo esame.";
  } else if (votoNecessario < 18) {
    document.getElementById("risultatoVotoMinimo").innerText =
      "Ti basterebbe almeno 18. Il voto teorico richiesto sarebbe " + votoNecessario.toFixed(2) + ".";
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

  if (mancanti <= 0) {
    document.getElementById("risultatoCFUMancanti").innerText =
      "Hai raggiunto o superato i CFU richiesti.";
  } else {
    document.getElementById("risultatoCFUMancanti").innerText =
      "Ti mancano " + mancanti + " CFU.";
  }
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

  const annuo = tipo === "settimanale" ? stipendio * 52 : stipendio * 12;

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
}