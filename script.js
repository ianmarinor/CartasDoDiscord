const totalNumOfSeeds = 9000000000000000 + 1000000000000000;
function seedRNG() {
  return Math.floor(Math.random() * totalNumOfSeeds);
}

// This function generates a seed or takes a seed as input
// the input will always be translated to the same seed if an integer
// if a string, it'll be converted
let input = "";
function generateSeed(input) {
  //se a chave for LETRA!
  if (input.length > 9) {
    if (
      parseInt(input) >= 100000000000000 &&
      parseInt(input) <= 999999999999999
    ) {
      return parseInt(input);
    } else {
      if (input.length >= 3 && input.length <= 25) {
        let sum = 1;
        for (let i = 0; i < input.length; i++) {
          sum = sum + input[i].charCodeAt();
          console.log(sum);
        }
        return sum * 516515615165159;
      } else {
        return seedRNG();
      }
    }
  } else {
    if (input.length >= 3) {
      let sum = 1;
      for (let i = 0; i < input.length; i++) {
        sum = sum + input[i].charCodeAt();
        console.log(sum);
      }
      return sum * 516515615165159;
    } else {
      return seedRNG();
    }
  }
}

// generateSeed('')
// let seed = generateSeed()
// console.log('Seed: ', seed);

// generateSeed('a')

// ***********************
// LINK SEED TO ELEMENT
//**************************/

//integrante
//THIS FUNCTION WILL TAKE A SEED FROM FUNCTION ABOVE AND CHOOSE AN USER

let seedString = "";
function escolherIntegrante() {
  seedString = generateSeed(input).toString();
  console.log("tamanho seed: " + seedString.length);
  // console.log("integrante seed", seedString);
  if (
    seedString[1] == 1
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Gandalf");
  } else if (
    seedString[1] == 2
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Turu");
  } else if (
    seedString[1] == 3
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Nefesto");
  } else if (
    seedString[1] == 4
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Blackao");
  } else if (
    seedString[1] == 5
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Sr. Antonio");
  } else if (
    seedString[1] == 6
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Pedro");
  } else if (
    seedString[1] == 7
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Curtas");
  } else if (
    seedString[1] == 8
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Twelve");
  } else if (
    seedString[1] == 9
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Junks");
  } else if (
    seedString[1] == 0
    // &&
    // seedString[2] == 0
  ) {
    return (integrante = "Murillo");
  }
  // else if
  //     (
  //     // seedString[0] == 1  &&
  //     seedString[1]
  //     )
  //     {return integrante = 'Curtas'
  // } else
  //     {return integrante = 'SEM NOME'}
}
//cidade
// THIS FUNCTION WILL TAKE A SEED FROM FUNCTION ABOVE AND CHOOSE AN USER
// ******************************************************************
let cidade = "";
function escolherCidade() {
  // console.log('string cidade', seedString)
  if (
    // seedString[4] == 0 &&
    seedString[3] == 0
  ) {
    return (cidade = "de Caxias do Sul");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 1
  ) {
    return (cidade = "de Itapira");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 2
  ) {
    return (cidade = "de Ubatuba");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 3
  ) {
    return (cidade = "de Sao Jose Dos Pinhais");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 4
  ) {
    return (cidade = "do Rio de Janeiro");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 5
  ) {
    return (cidade = "de Maringá");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 6
  ) {
    return (cidade = "de Itanhaém");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 7
  ) {
    return (cidade = "da Lapa");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 8
  ) {
    return (cidade = "de Jaraguá");
  } else if (
    // seedString[4] == 0 &&
    seedString[3] == 9
  ) {
    return (cidade = "de Santo André");
  }
}
//CARGO
//THIS FUNCTION WILL TAKE A SEED FROM FUNCTION ABOVE AND CHOOSE A ROLE
let cargo = "";
function escolherCargo() {
  // console.log("stringCargo", seedString);
  if (
    seedString[11] == 2 &&
    seedString[12] == 3 &&
    seedString[13] == 4 &&
    seedString[14] == 4
  ) {
    return (cargo = "carta-premiomarino");
  } else if (
    seedString[11] == 5 &&
    seedString[12] == 3 &&
    seedString[13] == 4 &&
    seedString[14] <= 4
  ) {
    return (cargo = "carta-primeminister");
  } else if (
    seedString[12] == 2 &&
    seedString[13] == 8 &&
    seedString[14] <= 4
  ) {
    return (cargo = "carta-ministro");
  } else if (seedString[13] == 4 && seedString[14] == 2) {
    return (cargo = "carta-lord");
  } else if (seedString[13] == 1 && seedString[14] >= 4) {
    return (cargo = "carta-nobre");
  } else if (seedString[13] == 9) {
    return (cargo = "carta-gentleman");
  } else if (seedString[13] == 7 && seedString[14] >= 4 && seedString[4] != 4) {
    return (cargo = "carta-monark");
  } else if (seedString[14] >= 8) {
    return (cargo = "carta-people");
  } else {
    return (cargo = "carta-semcargo");
  }
}

let especial = "";
function escolherEspecial() {
  // console.log('stringEspecial', seedString)
  if (
    seedString[5] == 8 &&
    seedString[6] == 9 &&
    seedString[7] == 9 &&
    seedString[8] == 1 &&
    seedString[9] >= 4
  ) {
    return (especial = "especial-tenica");
  } else if (
    seedString[5] == 8 &&
    seedString[6] == 3 &&
    seedString[7] == 4 &&
    seedString[8] == 4
  ) {
    return (especial = "");
  } else if (
    seedString[5] == 8 &&
    seedString[6] == 1 &&
    seedString[7] == 7 &&
    seedString[8] >= 4
  ) {
    return (especial = "");
  } else if (seedString[5] == 8 && seedString[6] == 4 && seedString[7] == 2) {
    return (especial = "");
  } else if (seedString[5] == 8 && seedString[6] == 1 && seedString[7] <= 3) {
    return (especial = "");
  } else if (seedString[5] == 8 && seedString[6] >= 8) {
    return (especial = "carta-speaker");
  } else if (seedString[5] == 8 && seedString[6] <= 4) {
    return (especial = "especial-click");
  } else {
    return (especial = "");
  }
}

let variante = "";

function escolherVariante() {
  console.log("stringvariante", seedString);

  variante = "";
  if (seedString[4] == 4) {
    if (seedString[5] == 9 && seedString[6] == 0) {
      return (variante = "farmacêutico");
    } else if (seedString[5] == 9 && seedString[6] == 1) {
      return (variante = "bão");
    } else if (seedString[5] == 9 && seedString[6] == 2) {
      return (variante = "apenas");
    } else if (seedString[5] == 9 && seedString[6] == 3) {
      return (variante = "fonte");
    } else if (seedString[5] == 9 && seedString[6] == 4) {
      return (variante = "ixqueiro");
    } else if (seedString[5] == 9 && seedString[6] == 5) {
      return (variante = "abalo");
    } else if (seedString[5] == 9 && seedString[6] == 6) {
      return (variante = "grito");
    } else if (seedString[5] == 9 && seedString[6] == 7) {
      return (variante = "dia");
    } else if (seedString[5] == 9 && seedString[6] == 8) {
      return (variante = "quimico");
    } else if (seedString[5] == 9 && seedString[6] == 9) {
      return (variante = "pêra");
    } else {
      return (variante = "");
    }
  }
}

//RNG DOS PONTES DE PODER

let pontoPoderSemCargo = () =>
  Math.floor((parseInt(seedString[5]) + parseInt(seedString[0])) / 2 + 1);

let pontoPoderPeople = () =>
  Math.floor((parseInt(seedString[0]) + parseInt(seedString[12])) / 2 + 5);

let pontoPoderGentleman = () =>
  Math.floor((parseInt(seedString[12]) + parseInt(seedString[0])) / 2 + 9);

let pontoPoderMonark = () => Math.floor(Math.random() * 2);

let pontoPoderNobre = () =>
  Math.floor((parseInt(seedString[11]) + parseInt(seedString[10])) / 2 + 13);

let pontoPoderLord = () =>
  Math.floor((parseInt(seedString[10]) + parseInt(seedString[11])) / 2 + 20);

let pontoPoderMinistro = () =>
  Math.floor((parseInt(seedString[10]) + parseInt(seedString[11])) / 2 + 27);

let pontoPoderPrimeMinister = () =>
  Math.floor((parseInt(seedString[0]) + parseInt(seedString[10])) / 2 + 80);

let pontoPoderRNGPremioMarino = () =>
  Math.floor((parseInt(seedString[0]) + parseInt(seedString[5])) / 2 + 120);

let pontoVarianteValor = 0;
function pontoVariante() {
  if (variante != "") {
    return (pontoVarianteValor = Math.floor(
      (parseInt(seedString[0]) + parseInt(seedString[1])) / 2 + 15
    ));
  } else {
    return (pontoVarianteValor = 0);
  }
}

let poder = {};
function escolherPoder() {
  // console.log("pontoVarianteValor: ", pontoVarianteValor);
  if (cargo === "carta-semcargo") {
    return (poder = {
      _ataque: pontoPoderSemCargo() + pontoVarianteValor,
    });
  } else if (cargo === "carta-people") {
    return (poder = {
      _ataque: pontoPoderPeople() + pontoVarianteValor,
    });
  } else if (cargo === "carta-gentleman") {
    return (poder = {
      _ataque: pontoPoderGentleman() + pontoVarianteValor,
    });
  } else if (cargo === "carta-monark") {
    return (poder = {
      _ataque: pontoPoderMonark(),
    });
  } else if (cargo === "carta-nobre") {
    return (poder = {
      _ataque: pontoPoderNobre() + pontoVarianteValor,
    });
  } else if (cargo === "carta-lord") {
    return (poder = {
      _ataque: pontoPoderLord() + pontoVarianteValor,
    });
  } else if (cargo === "carta-ministro") {
    return (poder = {
      _ataque: pontoPoderMinistro() + pontoVarianteValor,
    });
  } else if (cargo === "carta-primeminister") {
    return (poder = {
      _ataque: pontoPoderPrimeMinister() + pontoVarianteValor,
    });
  } else if (cargo === "carta-premiomarino") {
    return (poder = {
      _ataque: pontoPoderRNGPremioMarino() + pontoVarianteValor,
    });
  }
}

//************************************************ */

function fabricaDeCarta(integrante, cidade, cargo, poder, variante, especial) {
  return {
    _integrante: integrante,
    _cidade: cidade,
    _cargo: cargo,
    _poder: poder,
    _variante: variante,
    _especial: especial,
  };
}

//*********************************************************** */
// escolherIntegrante()
// escolherCidade()
// escolherCargo()
// escolherPoder()

////D O M
let button = document.getElementById("btn");
let h1 = document.getElementsByTagName("h1")[0];
let mover = document.getElementById("mover");
let inv = document.getElementById("inv");
let arenaP = document.querySelector(".arena");
let nomeP = document.querySelector(".nome");
let cidadeP = document.querySelector(".cidade");
let retratoP = document.querySelector(".retrato");
let cargoP = document.querySelector(".cargo");
let varianteP = document.querySelector(".variante");
let actionP = document.querySelector(".action");
let novoAtaquerP = document.querySelector(".novoAtaque");
let placarP = document.querySelector(".placar");
//div poder
let ataqueP = document.querySelector(".ataque");
let defesaP = document.querySelector(".defesa");
let especialP = document.querySelector(".especial");

let seedP = document.querySelector(".seed");
//carta
let cartaP = document.getElementById("carta");
// input da seed cliente
// let coloqueSuaSeed = document.getElementById('seed').value
//wrap
let wrap = document.getElementsByClassName("wrap")[0];
//input
let getSeed = document.getElementById("getseed");
//pagin procura seed
let seedCheckInput = document.getElementById("seedcheckinput");
let seedCheckBtn = document.getElementById("seedcheckbtn");
let seedCheckPage = document.getElementById("seedcheck");

function colocarInfoNoWrap() {
  const novaCarta = fabricaDeCarta(
    integrante,
    cidade,
    cargo,
    poder,
    variante,
    especial
  );
  console.log("novaCarta: ", novaCarta);

  //LIMPAR A CARTA
  cartaP.style.backgroundImage = "";
  cartaP.style.border = "none";
  cartaP.style.color = "";
  actionP.style.visibility = "hidden";
  ataqueP.style.textDecorationLine = "";
  novoAtaquerP.innerHTML = "";
  novoAtaquerP.style.fontSize = "";
  retratoP.style.backgroundSize = "";
  cargoP.style.fontSize = "";
  cargoP.style.color = "";
  cargoP.style.fontWeight = "";
  cargoP.style.fontFamily = "";
  ataqueP.style.color = "";
  ataqueP.style.fontSize = "";
  ataqueP.textContent = "";

  cartaParaMover.children[0].children[0].classList.remove("critico");
  cartaParaMover.children[0].children[2].classList.remove("critico");
  cartaParaMover.classList.remove("critico");
  varianteP.classList.remove("critico");
  cartaParaMover.children[3].children[1].classList.remove("critico");

  cartaParaMover.children[0].children[0].style.color = "";
  cartaParaMover.children[0].children[2].style.color = "";
  cartaParaMover.children[0].children[1].style.fontWeight = "";

  //DOM
  nomeP.innerHTML = "&nbsp;" + novaCarta._integrante.toUpperCase();
  cidadeP.innerHTML = "&nbsp;" + novaCarta._cidade;
  ataqueP.innerHTML = novaCarta._poder._ataque + "&#9889;";
  varianteP.innerHTML = novaCarta._variante;
  especialP.innerHTML = novaCarta._especial;
  seedP.innerHTML = "&nbsp;" + seedString;
  arenaP.innerHTML = totalClicks;
  placarP.innerHTML = totalPontos + " PONTOS";

  if (novaCarta._especial != "") {
    cartaP.id = novaCarta._especial;
  } else {
    cartaP.id = novaCarta._cargo;
  }

  retratoP.style.display = "block";

  //colocar retrato
  if (novaCarta._especial == "") {
    if (novaCarta._integrante === "Turu") {
      retratoP.style.backgroundImage = "url('pics/turu.webp')";
    } else if (novaCarta._integrante === "Blackao") {
      retratoP.style.backgroundImage = "url('pics/blackao.jpeg')";
    } else if (novaCarta._integrante === "Gandalf") {
      retratoP.style.backgroundImage = "url('pics/gandarfu.png')";
    } else if (novaCarta._integrante === "Murillo") {
      retratoP.style.backgroundImage = "url('pics/murilo.jpeg')";
    } else if (novaCarta._integrante === "Pedro") {
      retratoP.style.backgroundImage = "url('pics/pedro.png')";
    } else if (novaCarta._integrante === "Nefesto") {
      retratoP.style.backgroundImage = "url('pics/nefesto.png')";
    } else if (novaCarta._integrante === "Sr. Antonio") {
      retratoP.style.backgroundImage = "url('pics/antonio.png')";
    } else if (novaCarta._integrante === "Curtas") {
      retratoP.style.backgroundImage = "url('pics/curtas.png')";
    } else if (novaCarta._integrante === "Junks") {
      retratoP.style.backgroundImage = "url('pics/junks.jpeg')";
    } else if (novaCarta._integrante === "Twelve") {
      retratoP.style.backgroundImage = "url('pics/twelve.png')";
    } else {
      retratoP.style.backgroundImage = "";
    }
  }
  //colocar cargo
  if (novaCarta._especial == "") {
    if (novaCarta._cargo === "carta-semcargo") {
      cargoP.innerHTML = "&nbsp;" + "sem cargo".toUpperCase();
      retratoP.style.border = "";
    } else if (novaCarta._cargo === "carta-people") {
      cargoP.innerHTML = "&nbsp;" + "people".toUpperCase();
      retratoP.style.border = "";
    } else if (novaCarta._cargo === "carta-gentleman") {
      cargoP.innerHTML = "&nbsp;" + "gentleman".toUpperCase();
      retratoP.style.border = "";
    } else if (novaCarta._cargo === "carta-ministro") {
      cargoP.innerHTML = "&nbsp;" + "ministro".toUpperCase() + "👨‍⚖️";
      retratoP.style.border = "";
    } else if (novaCarta._cargo === "carta-lord") {
      cargoP.innerHTML = "&nbsp;" + "lord".toUpperCase() + "👑";
      retratoP.style.border = "";
    } else if (novaCarta._cargo === "carta-nobre") {
      cargoP.innerHTML = "&nbsp;" + "nobre".toUpperCase() + "💙";
      retratoP.style.border = "";
    } else if (novaCarta._cargo === "carta-primeminister") {
      cargoP.innerHTML = "&nbsp;" + "prime minister".toUpperCase() + "💪";
      cargoP.style.backgroundImage = "pics/wrapPremioMarino.webp";
      retratoP.style.border = "";
      seedP.style.color = "white";
    } else if (novaCarta._cargo === "carta-premiomarino") {
      cargoP.innerHTML =
        "&nbsp;" + "&#127942; premio marino &#127942;".toUpperCase();
      retratoP.style.border = "";
    } else if (novaCarta._cargo === "carta-monark") {
      cargoP.innerHTML = "&nbsp;" + "monark" + "&#128169;";
      retratoP.style.border = "";
    } else {
      true;
    }
  }

  //CARTAS ESPECIAIS
  if (novaCarta._especial === "carta-speaker") {
    retratoP.style.backgroundImage = "url('pics/speaker.webp')";
    nomeP.innerHTML = "&nbsp; SPEAKER";
    cidadeP.innerHTML = "";
    cargoP.innerHTML = "MONARK BAN!";
    retratoP.style.border = "2px dotted green";
    especialP.style.visibility = "hidden";
    ataqueP.innerHTML = Math.trunc(parseInt(ataqueP.innerHTML) / 3 + 1) + "😴";
  } else if (novaCarta._especial === "especial-tenica") {
    cargoP.style.fontFamily = "Cormorant Upright";
    retratoP.style.backgroundImage = "url('pics/tenica.webp')";
    retratoP.style.backgroundSize = "139px 150px";
    nomeP.innerHTML = "";
    cidadeP.innerHTML = "";
    cargoP.style.fontSize = "2.5em";
    cargoP.style.fontWeight = "bolder";
    cargoP.innerHTML = "&nbsp; TÉNICA";
    cargoP.style.color = "black";
    retratoP.style.border = "2px double gold";
    ataqueP.style.color = "black";
    ataqueP.innerHTML = parseInt(ataqueP.innerHTML) * 109 + "👑";
    seedP.style.color = "black";

    ataqueP.style.fontSize = "1.5em";
    especialP.style.visibility = "hidden";
  } else if (novaCarta._especial === "especial-click") {
    retratoP.style.backgroundImage = "url('pics/clickretrato.webp')";
    retratoP.style.backgroundSize = "cover";
    nomeP.innerHTML = "";
    cidadeP.innerHTML = "";
    especialP.style.visibility = "hidden";
    cargoP.style.fontSize = "2.3em";
    cargoP.style.fontWeight = "bolder";
    cargoP.innerHTML = "CLICKS";
    cargoP.style.color = "gray";
    // retratoP.style.border = '2px double gold'
    ataqueP.style.color = "black";
    ataqueP.style.fontSize = "1.5em";
    // actionP.style.visibility = 'visible'
    ataqueP.textContent = parseInt(ataqueP.textContent) * 2 + 1 + "🔄";
    seedP.style.color = "black";
  }

  //CARTAS VARIANTES
  if (novaCarta._variante != "" && novaCarta._cargo != "carta-monark") {
    // actionP.style.visibility = 'visible'
    varianteP.style.fontFamily = "Righteous";
    varianteP.style.textShadow = "-2px 5px 5px #010101";
    varianteP.style.fontSize = "1.1em";

    if (novaCarta._variante === "farmacêutico") {
      varianteP.innerHTML = "💊" + novaCarta._variante.toUpperCase() + "💊";
      cartaP.style.color = "white";
      cartaP.style.backgroundImage =
        'url("pics/variantes/varianteGandalf.gif")';
      cartaP.style.border = "3px white solid";
      varianteP.style.fontSize = "1em";
    } else if (novaCarta._variante === "bão") {
      varianteP.innerHTML =
        "👌 " + "AÔPA, " + novaCarta._variante.toUpperCase() + " 👌";
      cartaP.style.color = "orange";
      cartaP.style.backgroundImage = 'url("pics/variantes/varianteTuru.gif")';
      cartaP.style.border = "3px orange solid";
    } else if (novaCarta._variante === "apenas") {
      varianteP.innerHTML = "🤤 " + novaCarta._variante.toUpperCase() + " 🤤";
      cartaP.style.color = "wheat";
      cartaP.style.backgroundImage =
        'url("pics/variantes/varianteNefesto.gif")';
      cartaP.style.border = "3px wheat solid";
    } else if (novaCarta._variante === "fonte") {
      varianteP.innerHTML =
        "😖" + "COMO MUDA A " + novaCarta._variante.toUpperCase() + "😖";
      cartaP.style.color = "  white";

      cartaP.style.backgroundImage =
        'url("pics/variantes/varianteBlackao.gif")';
      cartaP.style.border = "3px white solid";
      varianteP.style.fontSize = "0.86em";
      // varianteP.style.textShadow = '-2px 5px 5px #ffffff'
    } else if (novaCarta._variante === "ixqueiro") {
      varianteP.innerHTML =
        "&#127940;" +
        "CHIQUEIRO, " +
        novaCarta._variante.toUpperCase() +
        "&#127940;";
      cartaP.style.color = " #d8fbb5";
      varianteP.style.fontSize = "1em";

      cartaP.style.backgroundImage =
        'url("pics/variantes/varianteAntonio.gif")';
      cartaP.style.border = "3px #d8fbb5 solid";
      varianteP.style.fontSize = "0.86em";
    } else if (novaCarta._variante === "abalo") {
      varianteP.innerHTML =
        "🎉" + "UM " + novaCarta._variante.toUpperCase() + "! 🎉";
      cartaP.style.color = "  #fbb5f2 ";

      cartaP.style.backgroundImage = 'url("pics/variantes/variantePedro.gif")';
      cartaP.style.border = "3px #fbb5f2 solid";
    } else if (novaCarta._variante === "grito") {
      varianteP.innerHTML = "📢AAAAAAAAAAHHH!!!!!📢";
      cartaP.style.color = "   #42b028   ";

      cartaP.style.backgroundImage = 'url("pics/variantes/varianteCurtas.gif")';
      cartaP.style.border = "3px  #25a406  solid";
      varianteP.style.fontSize = "0.86em";
    } else if (novaCarta._variante === "dia") {
      varianteP.innerHTML = "⛪ TODO DIA ISSO ⛪";
      cartaP.style.color = "   #27ebe2     ";

      cartaP.style.backgroundImage = 'url("pics/variantes/varianteTwelve.gif")';
      cartaP.style.border = "3px  #27ebe2   solid";
      varianteP.style.fontSize = "0.99em";
    } else if (novaCarta._variante === "quimico") {
      varianteP.innerHTML = "🐶 O PUGO 🐶";
      cartaP.style.color = "white";
      cartaP.style.backgroundImage = 'url("pics/variantes/varianteJunks.gif")';
      cartaP.style.border = "3px  white   solid";
    } else if (novaCarta._variante === "pêra") {
      varianteP.innerHTML = "🥛 LEITE COM PÊRA 🍐";
      cartaP.style.color = "white";
      cartaP.style.backgroundImage =
        'url("pics/variantes/varianteMurillo.gif")';
      cartaP.style.border = "3px  white   solid";
      varianteP.style.fontSize = "0.90em";
    } else {
    }
  }
}

function colocarInput() {
  input = getSeed.value;
  // input = 13315754569994
}

//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */
//*************************MOVER CARTA PARA O INVENTARIO */
//****************************************************** */

// function cardShrinker(cartaGrande){
//     cartaGrande.style.height = '49%'
//     cartaGrande.style.width = '38%'
//     // cartaGrande.style.fontSize = '10px'
//     // cartaGrande.children[1].style.backgroundSize = '139px 87px'

// }

let cartaParaMover = document.getElementById("pack").firstElementChild;
let copyCard = "";

function moverCarta() {
  let seedCopyCard = cartaParaMover.children[4].textContent;
  //  seedNode = .children[4].textContent

  copyCard = cartaParaMover.cloneNode(true);
  // copySeed = copy.getElementsByClassName('seed')
  // cardShrinker(copyCard)
  //   if(parseInt(input) > 99999999){
  //       false

  //   } else
  {
    if (inv.children[0].id != "empty") {
      if (
        inv.children[0].children[4].textContent !=
        cartaParaMover.children[4].textContent
      ) {
        if (inv.children[1].id == "empty") {
          if (
            copyCard.children[0].children[1].textContent != "" ||
            copyCard.children[0].children[3].textContent != ""
          ) {
            copyCard.children[3].children[2].style.visibility = "visible";
          }

          inv.replaceChild(copyCard, inv.children[1]);
          somaPontos();
        } else if (
          inv.children[2].id == "empty" &&
          seedCopyCard != inv.children[1].children[4].textContent
        ) {
          if (
            copyCard.children[0].children[1].textContent != "" ||
            copyCard.children[0].children[3].textContent != ""
          ) {
            copyCard.children[3].children[2].style.visibility = "visible";
          }

          inv.replaceChild(copyCard, inv.children[2]);
          somaPontos();
        } else if (
          inv.children[3].id == "empty" &&
          seedCopyCard != inv.children[2].children[4].textContent
        ) {
          if (
            copyCard.children[0].children[1].textContent != "" ||
            copyCard.children[0].children[3].textContent != ""
          ) {
            copyCard.children[3].children[2].style.visibility = "visible";
          }

          inv.replaceChild(copyCard, inv.children[3]);
          somaPontos();
        }
      }
    } else {
      // if (cartaParaMover.children[0].children[1].textContent != ''){
      //     copyCard.children[3].children[2].style.visibility = 'visible'
      // }
      if (
        copyCard.children[0].children[1].textContent != "" ||
        copyCard.children[0].children[3].textContent != ""
      ) {
        copyCard.children[3].children[2].style.visibility = "visible";
      }

      inv.replaceChild(copyCard, inv.children[0]);
      somaPontos();
    }
  }
  criarBtn();
}

function moverCartaMonark() {
  copyCard = cartaParaMover.cloneNode(true);
  copyCardSeed = copyCard.children[4].textContent;
  copyCardName = copyCard.children[0].children[0].textContent;
  // var slotSeed = inv.children[0].children[4].textContent
  // VAR slotName = inv.children[0].children[0].children[0].textContent

  if (parseInt(input) > 99999999) {
    false;
  } else {
    if (copyCard.id === "carta-monark") {
      if (inv.children[0].id === "empty" && copyCard.id === "carta-monark") {
        inv.replaceChild(copyCard, inv.children[0]);
        somaPontos();
      } else if (
        inv.children[1].id === "empty" &&
        copyCard.id === "carta-monark" &&
        copyCardSeed != inv.children[0].children[4].textContent
      ) {
        inv.replaceChild(copyCard, inv.children[1]);
        somaPontos();
      } else if (
        inv.children[2].id === "empty" &&
        copyCard.id === "carta-monark" &&
        copyCardSeed != inv.children[1].children[4].textContent
      ) {
        inv.replaceChild(copyCard, inv.children[2]);
        somaPontos();
      } else if (
        inv.children[3].id === "empty" &&
        copyCard.id === "carta-monark" &&
        copyCardSeed != inv.children[2].children[4].textContent
      ) {
        inv.replaceChild(copyCard, inv.children[3]);
        somaPontos();

        //MONARK SUBSTITUI O HOMONIMO -------------------------
      } else if (
        copyCardName === inv.children[0].children[0].children[0].textContent &&
        copyCard.id != inv.children[0].id
      ) {
        inv.replaceChild(copyCard, inv.children[0]);
        somaPontos();
      } else if (
        copyCardName === inv.children[1].children[0].children[0].textContent &&
        copyCard.id != inv.children[1].id
      ) {
        inv.replaceChild(copyCard, inv.children[1]);
        somaPontos();
      } else if (
        copyCardName === inv.children[2].children[0].children[0].textContent &&
        copyCard.id != inv.children[2].id
      ) {
        inv.replaceChild(copyCard, inv.children[2]);
        somaPontos();
      } else if (
        copyCardName === inv.children[3].children[0].children[0].textContent &&
        copyCard.id != inv.children[3].id
      ) {
        inv.replaceChild(copyCard, inv.children[3]);
        somaPontos();
      }
      tudo();
    }
  }
}

const cartaParaMoverNome = cartaParaMover.children[0].children[0].textContent;
const cartaParaMoverCidade = cartaParaMover.children[0].children[1].textContent;

function critico() {
  //nome
  let = corDoNome = cartaParaMover.children[0].children[0];
  let = corDaCidade = cartaParaMover.children[0].children[2];

  cartaParaMover.children[0].children[1].style.color = "";
  //cidade
  cartaParaMover.children[0].children[0].style.color = "";
  //cidade negrito
  cartaParaMover.children[0].children[1].style.fontWeight = "";
  cartaParaMover.classList.remove("critico");
  //PODER
  let poderTremer = cartaParaMover.children[3].children[0];
  let poderNovo = cartaParaMover.children[3].children[1];

  //gandalf
  if (
    cartaParaMover.id != "carta-monark" &&
    cartaParaMover.id != "carta-speaker" &&
    cartaParaMover.children[0].children[3].textContent == ""
  ) {
    if (seedString[1] == "1" && seedString[3] == "0") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";

      if (variante == "farmacêutico") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 5 + "⚡";
        poderNovo.style.fontSize = "1.5em";
      }
    }

    //turu
    if (seedString[1] == "2" && seedString[3] == "1") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";

      if (variante == "bão") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
      }
    }
    //nefesto
    if (seedString[1] == "3" && seedString[3] == "2") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";

      if (variante == "apenas") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
      }
    }
    //blackao
    if (seedString[1] == "4" && seedString[3] == "3") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";

      if (variante == "fonte") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
      }
    }
    //antonio
    if (seedString[1] == "5" && seedString[3] == "4") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";

      if (variante == "ixqueiro") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
      }
    }
    //pedro
    if (seedString[1] == "6" && seedString[3] == "5") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";

      if (variante == "abalo") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
      }
    }
    //curtas
    if (seedString[1] == "7" && seedString[3] == "6") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";

      if (variante == "grito") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
      }
    }
    //twelve
    if (seedString[1] == "8" && seedString[3] == "7") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";

      if (variante == "dia") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
      }
    }
    //junks
    if (seedString[1] == "9" && seedString[3] == "8") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";

      if (variante == "quimico") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
      }
    }
    //murilo
    if (seedString[1] == "0" && seedString[3] == "9") {
      corDaCidade.classList.add("critico");
      corDoNome.classList.add("critico");
      cartaParaMover.children[0].children[1].style.fontWeight = "bold";

      poderTremer.style.textDecorationLine = "line-through";
      poderNovo.textContent = parseInt(poderTremer.textContent) * 2 + "⚡";

      if (variante == "pêra") {
        cartaParaMover.classList.add("critico");
        varianteP.classList.add("critico");
        poderNovo.classList.add("critico");

        poderTremer.style.textDecorationLine = "line-through";
        poderNovo.textContent = parseInt(poderTremer.textContent) * 6 + "⚡";
        poderNovo.style.fontSize = "1.5em";
      }
    }
  }
}

// //////////////////////////////////////////////
// PODERES DECK
//
//
////////////////////////////////////////////////

function criarBtn() {
  console.log("rodou o loop");

  for (let i = 0; i < 4; i++) {
    //se i nao for vazio
    if (inv.children[i].id != "empty") {
      // e se tiver botao na carta
      if (
        inv.children[i].children[3].children[2].style.visibility == "visible"
      ) {
        // console.log("butao visivel");

        // PODER VARIANTES
        // se nao for especial
        if (inv.children[i].children[0].children[1].textContent != "") {
          inv.children[i].children[3].children[2].addEventListener(
            "click",
            testinho
          );

          // essa funçao se ativa quando clico no butao das cartas variante no deck
          function testinho(e) {
            let poderCartaPack = cartaParaMover.children[3].children[0];
            let poderNovoCartaPack = cartaParaMover.children[3].children[1];
            let cartaNaoEspecial =
              cartaParaMover.children[0].children[3].textContent == "";
            let cartaNaoVariante =
              cartaParaMover.children[0].children[1].textContent == "";
            let cartaNaoMonark = cartaParaMover.id != "carta-monark";
            // let poderCartaInv = inv.children[i].children[3].children[2]

            // se a carta para mover nao for especial
            if (cartaNaoEspecial && cartaNaoVariante && cartaNaoMonark) {
              let cartaVariante = e.target.offsetParent;
              let emojiVariante = "🌟";
              // console.log('cartaVariante: ', cartaVariante);

              let cartaVariantePoderVelho =
                cartaVariante.children[3].children[0];
              // console.log('cartaVariantePoderVelho: ', cartaVariantePoderVelho);

              let cartaVariantePoderNovo =
                cartaVariante.children[3].children[1];
              // console.log('cartaVariantePoderNovo: ', cartaVariantePoderNovo);

              let varianteTemPoderNovo =
                cartaVariante.children[3].children[1].textContent != "";
              // console.log('varianteTemPoderNovo: ', varianteTemPoderNovo);

              // a o butao fica invisivel quando clicado
              e.target.style.visibility = "hidden";

              //se nao CartaPMover NAO tiver poder novo
              if (poderNovoCartaPack.textContent == "") {
                if (varianteTemPoderNovo) {
                  // transforme poder velho da CartaPack em novo da inv
                  poderCartaPack.textContent =
                    parseInt(cartaVariantePoderNovo.textContent) +
                    emojiVariante;

                  // se nao, transforme poder velho CartaPMover em poder velho inv
                } else {
                  // transaforme o poder velho da CartaPack no poder velho da carta inv 0
                  poderCartaPack.textContent =
                    parseInt(cartaVariantePoderVelho.textContent) +
                    emojiVariante;
                }
              }

              // se carta para mover TIVER poder novo
              else {
                // e se a carta inv tiver poder novo
                if (varianteTemPoderNovo) {
                  // transforme poder novo da CartaPack em novo da inv
                  poderNovoCartaPack.textContent =
                    parseInt(cartaVariantePoderNovo.textContent) +
                    emojiVariante;
                } else {
                  // transforme o poder novo da CartaPack no poder velho da inv 0
                  poderNovoCartaPack.textContent =
                    parseInt(cartaVariantePoderVelho.textContent) +
                    emojiVariante;
                }
              }
            }
          }
        }

        //   PODER SPEAKER
        if (inv.children[i].id == "carta-speaker" && inv.children[i].children[0].id != "foi") {
          inv.children[i].children[3].children[2].addEventListener(
            "click",
            explusarMonark
          );
          inv.children[i].children[0].id = "foi";
          console.log("adicionei o botao ao inv" + i);}

          function explusarMonark(e) {
            let varianteSpeaker = e.target.offsetParent;
            let pontoSpeaker = varianteSpeaker.children[3].children[0];

            function multiSpeaker() {
              return Math.floor(Math.random() * 1 + 3);
            }

            for (let j = 0; j < 4; j++) {
              console.log(j);

              // se a carta for de qualquer cargo sem ser esses elencados perde ponto
              if (

                inv.children[j].id != "carta-speaker" &&
                inv.children[j].id != "carta-monark" &&
                inv.children[j].id != "empty"

              ) {
                if (parseInt(pontoSpeaker.textContent) > 4) {
                  pontoSpeaker.textContent =
                  Math.trunc(parseInt(pontoSpeaker.textContent) / 2) + "😴";
                  console.log("perdeu 2 pontos");
                }
              };

              if (inv.children[j].id == "carta-monark") {

                pontoSpeaker.textContent =
                parseInt(pontoSpeaker.textContent) * multiSpeaker() + "😡";
                console.log("ganhou * 3!!!!");


                inv.children[j].remove();
                inv.appendChild(document.createElement("div")).id = "empty";

                

                // pontoSpeaker = Math.trunc(parseInt(pontoSpeaker) * 2) + '😡'

                somaPontos();
                tudo();
              }
            }
          }
        }

        // PODER CLICKS
        if (
          inv.children[i].id == "especial-click" &&
          inv.children[i].children[0].id != "foi"
        ) {
          inv.children[i].children[3].children[2].addEventListener(
            "click",
            cartaClique
          );
          inv.children[i].children[0].id = "foi";
          // console.log("adicionei o botao ao inv" + i);
        }

        function cartaClique(e) {
          console.log("carta clique rodou");

          let varianteClique = e.target.offsetParent;

          totalClicks =
            totalClicks +
            parseInt(varianteClique.children[3].children[0].textContent);

          varianteClique.children[3].children[2].style.visibility = "hidden";
          button.style.backgroundColor = "";
          button.innerHTML = "NEW CARD";
          arenaP.innerHTML = totalClicks;
          varianteClique.remove();
          inv.appendChild(document.createElement("div")).id = "empty";
          tudo();
        }

        // PODER TENICA
        if (
          inv.children[i].id == "especial-tenica" &&
          inv.children[i].children[0].id != "foi"
        ) {
          inv.children[i].children[3].children[2].addEventListener(
            "click",
            cartaTenica
          );
          inv.children[i].children[0].id = "foi";
          console.log("adicionei o botao ao inv" + i);
        }

        function cartaTenica(e) {
          let varianteTenica = e.target.offsetParent;
          console.log("varianteTenica: ", varianteTenica);

          varianteTenica.children[3].children[2].style.visibility = "hidden";

          let poderCartaPack = cartaParaMover.children[3].children[0];
          let poderNovoCartaPack = cartaParaMover.children[3].children[1];
          // tudo()

          if (
            cartaParaMover.id != "especial-click" &&
            cartaParaMover.id != "especial-tenica"
          ) {
            if (poderNovoCartaPack.textContent != "") {
              poderNovoCartaPack.textContent =
                parseInt(poderNovoCartaPack.textContent) +
                parseInt(varianteTenica.children[3].children[0].textContent) +
                "👑";
            } else {
              poderCartaPack.textContent =
                parseInt(poderCartaPack.textContent) +
                parseInt(varianteTenica.children[3].children[0].textContent) +
                "👑";
            }
          }

          for (j = 0; j < 4; j++) {
            if (
              inv.children[j].id != "especial-click" &&
              inv.children[j].id != "empty" &&
              inv.children[j].id != "especial-tenica"
            ) {
              console.log(j);

              // se o poder novo for presente
              if (inv.children[j].children[3].children[1].textContent != "") {
                inv.children[j].children[3].children[1].textContent =
                  parseInt(
                    inv.children[j].children[3].children[1].textContent
                  ) +
                  parseInt(varianteTenica.children[3].children[0].textContent) +
                  "👑";
              } else {
                inv.children[j].children[3].children[0].textContent =
                  parseInt(
                    inv.children[j].children[3].children[0].textContent
                  ) +
                  parseInt(varianteTenica.children[3].children[0].textContent) +
                  "👑";
              }
            }
          }
          somaPontos();
        }
      }
    }
  }


// if (inv.children[0].id != 'empty' && inv.children[1].id != 'empty' && inv.children[2].id != 'empty' && inv.children[3].id != 'empty') {

//     console.log ('sem loop')

// }

/****************************************** */
// TIRAR CARTA DO INVENTARIO
// /******************************************** */

btnReset = document.getElementById("btnReset");

function deletarDeck(e) {
  // 1.0Se a carta nao for Monark
  if (
    e.target.id != "carta-monark" &&
    e.target.parentElement.id != "carta-monark" &&
    e.target.parentElement.parentElement.id != "carta-monark" &&
    e.target.id != "inv" &&
    e.target.id != "empty" &&
    e.target.className != "action"
  ) {
    // console.log('carta nao é monark')

    // 1.1 se for a carta inteira
    if (e.target.id != "inv" && e.target.childElementCount === 5) {
      console.log("carta inteira");
      e.target.remove();
      inv.appendChild(document.createElement("div")).id = "empty";
      somaPontos();

      //1.2 se nao for a seed
    } else if (
      e.target.id != "inv" &&
      e.target.childElementCount != 5 &&
      e.target.className != "seed"
    ) {
      // console.log('nao é a seed')

      // 1.2.1 se for filho da carta
      if (
        e.target.parentElement.children[0].className ===
          "nameAndCidadeWrapper" &&
        e.target.id != "inv"
      ) {
        // console.log('filho da carta')
        e.target.parentElement.remove();
        inv.appendChild(document.createElement("div")).id = "empty";
        somaPontos();
      }

      // 1.2.2 se nao for nada disso, sera filho do filho
      else {
        // console.log('filho do filho')
        e.target.parentElement.parentElement.remove();
        inv.appendChild(document.createElement("div")).id = "empty";
        somaPontos();
      }
    }
  }
}

function resetarDeck() {
  // let empty = document.createElement('div').id = "empty"
  let empty0 = document.createElement("div");
  let empty1 = document.createElement("div");
  let empty2 = document.createElement("div");
  let empty3 = document.createElement("div");
  critico();

  for (let i = 0; i < 4; i++) {
    inv.removeChild(inv.children[0]);
    // inv.appendChild(empty)
    // inv.replaceChild(inv.children[i], inv.appendChild(document.createElement('div')).id = "empty")
  }

  inv.appendChild(empty0).id = "empty";
  inv.appendChild(empty1).id = "empty";
  inv.appendChild(empty2).id = "empty";
  inv.appendChild(empty3).id = "empty";

  // inv.removeChild(inv.children[0])
  // inv.appendChild(empty)
  // console.log('kek')
  totalClicks = totalClicks + 1;
  somaPontos();
}

/////// CRITICO

function blockInv() {
  if (parseInt(input) > 99999999) {
    inv.style.border = "3px dotted red";
  } else {
    inv.style.border = "";
  }
}
let totalClicks = 50;

function tudo() {
  // VOLTAR A CONDICAO PRA (totalClicks > 0)
  if (totalClicks >= 0) {
    button.style.backgroundColor = "";
    button.innerHTML = "NEW CARD";
    colocarInput();
    escolherIntegrante();
    escolherCidade();
    escolherCargo();
    escolherVariante();
    escolherEspecial();
    pontoVariante();
    escolherPoder();
    colocarInfoNoWrap();
    critico();
    moverCartaMonark();

    clicks();
  } else {
    button.style.backgroundColor = "red";
    button.innerHTML = "0 CLICKS";
  }
}

function clicks() {
  totalClicks--;
  // console.log('click: ' + totalClicks);
}
let totalPontos = 0;

function somaPontos() {
  let ponto0 = 0;
  let ponto1 = 0;
  let ponto2 = 0;
  let ponto3 = 0;

  // inv 0
  if (
    inv.children[0].id != "empty" &&
    inv.children[0].children[0].children[3].textContent != "especial-click"
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero
    if (inv.children[0].children[3].children[1].textContent != "") {
      ponto0 = parseInt(inv.children[0].children[3].children[1].textContent);
      // se nao, pegue o poder velho
    } else {
      ponto0 = parseInt(inv.children[0].children[3].children[0].textContent);
    }
  }

  // inv 1
  if (
    inv.children[1].id != "empty" &&
    inv.children[1].children[0].children[3].textContent != "especial-click"
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero
    if (inv.children[1].children[3].children[1].textContent != "") {
      ponto1 = parseInt(inv.children[1].children[3].children[1].textContent);
      // se nao, pegue o poder velho
    } else {
      ponto1 = parseInt(inv.children[1].children[3].children[0].textContent);
    }
  }

  // inv 2
  if (
    inv.children[2].id != "empty" &&
    inv.children[2].children[0].children[3].textContent != "especial-click"
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero
    if (inv.children[2].children[3].children[1].textContent != "") {
      ponto2 = parseInt(inv.children[2].children[3].children[1].textContent);
      // se nao, pegue o poder velho
    } else {
      ponto2 = parseInt(inv.children[2].children[3].children[0].textContent);
    }
  }

  // inv 3
  if (
    inv.children[3].id != "empty" &&
    inv.children[3].children[0].children[3].textContent != "especial-click"
  ) {
    // se poder novo da carta inv 0 for presente pegue seu numero
    if (inv.children[3].children[3].children[1].textContent != "") {
      ponto3 = parseInt(inv.children[3].children[3].children[1].textContent);
      // se nao, pegue o poder velho
    } else {
      ponto3 = parseInt(inv.children[3].children[3].children[0].textContent);
    }
  }

  totalPontos = ponto0 + ponto1 + ponto2 + ponto3;
  placarP.innerHTML = totalPontos + " PONTOS";
  //  console.log('--------')
  //  console.log('ponto inv 0: ' + ponto0)
  //  console.log('ponto inv 1: ' + ponto1)
  //  console.log('ponto inv 2: ' + ponto2)
  //  console.log('ponto inv 3: ' + ponto3)
  //  console.log('--------')
}

button.addEventListener("click", tudo);
button.addEventListener("click", blockInv);

cartaParaMover.addEventListener("click", moverCarta);
inv.addEventListener("click", deletarDeck);

btnReset.addEventListener("click", resetarDeck);
// btnReset.addEventListener('click', moverCartaMonark)
btnReset.addEventListener("click", tudo);
