// let DEBUG = false
let DEBUG = true;

import { seedObj } from "./seedFabricator.js";
import { cargo } from "./cargo.js";
let seedString = seedObj._seedString;
let variantes = [
  {
    nome: "Gandalf",
    display: "💊 FARMACEUTICO 💊",
    css: {
      cartaP_Color: "white",
      cartaP_BGImage: 'url("pics/variantes/varianteGandalf.gif")',
      cartaP_Border: "3px white solid",
      varianteP_FontSize: "0.9em",
    },
  },
  {
    nome: "Turu",
    display: "👌 " + "AÔPA, BÃO 👌",
    css: {
      cartaP_Color: "orange",
      cartaP_BGImage: 'url("pics/variantes/varianteTuru.gif")',
      cartaP_Border: "3px orange solid",
      varianteP_FontSize: "",
    },
  },
  {
    nome: "Nefesto",
    display: "🤤 APENAS 🤤",
    css: {
      cartaP_Color: "wheat",
      cartaP_BGImage: 'url("pics/variantes/varianteNefesto.gif")',
      cartaP_Border: "3px wheat solid",
      varianteP_FontSize: "",
    },
  },
  {
    nome: "Blackao",
    display: "😖 COMO MUDA A FONTE 😖",
    css: {
      cartaP_Color: "#e600e6",
      cartaP_BGImage: 'url("pics/variantes/varianteBlackao.gif")',
      cartaP_Border: "3px white solid",
      varianteP_FontSize: "80%",
    },
  },
  {
    nome: "Sr. Antonio",
    display: "🍲 NEFEIIXTUU 🍲",
    css: {
      cartaP_Color: "#d8fbb5",
      cartaP_BGImage: 'url("pics/variantes/varianteAntonio.gif")',
      cartaP_Border: "3px #d8fbb5 solid",
      varianteP_FontSize: "0.86em",
    },
  },
  {
    nome: "Pedro",
    display: "🎉 UM  ABALO 🎉",
    css: {
      cartaP_Color: "#fbb5f2",
      cartaP_BGImage: 'url("pics/variantes/variantePedro.gif")',
      cartaP_Border: "3px #fbb5f2 solid",
      varianteP_FontSize: "",
    },
  },
  {
    nome: "Curtas",
    display: "📢AAAAAAAAHH!!!📢",
    css: {
      cartaP_Color: "#42b028",
      cartaP_BGImage: 'url("pics/variantes/varianteCurtas.gif")',
      cartaP_Border: "3px  #25a406  solid",
      varianteP_FontSize: "0.90em",
    },
  },
  {
    nome: "Twelve",
    display: "🥾 TODO DIA ISSO 🥾",
    css: {
      cartaP_Color: "#27ebe2",
      cartaP_BGImage: 'url("pics/variantes/varianteTwelve.gif")',
      cartaP_Border: "3px  #27ebe2   solid",
      varianteP_FontSize: "0.90em",
    },
  },
  { nome: "Junks", display: "🛑 PARA DE FALAR 🛑" ,
  css: {
    cartaP_Color: "white",
    cartaP_BGImage: 'url("pics/variantes/varianteMurillo.gif")',
    cartaP_Border: "3px  white   solid",
    varianteP_FontSize: "0.90em",
  }},
  {
    nome: "Murillo",
    display: "🥛 LEITE COM PÊRA 🍐",
    css: {
      cartaP_Color: "white",
      cartaP_BGImage: 'url("pics/variantes/varianteJunks.gif")',
      cartaP_Border: "3px  white   solid",
      varianteP_FontSize: "0.90em",
    },
  },
  { nome: "", display: "" ,
  css: {
    cartaP_Color: "",
    cartaP_BGImage: '',
    cartaP_Border: "",
    varianteP_FontSize: "",
  }},
];

export let variante = "";

// let temVariante =
// console.log(cargo.nome);

export function escolherVariante(teste) {
  let temVariante = cargo.nome !== "semcargo" && cargo.nome !== "people";

  if (!teste) {
    seedString = seedObj._seedString;
  } else {
    seedString = teste;
  }

  console.log(temVariante);
  console.log(cargo.nome);

  if (
    seedString[3] == 6 &&
    seedString[4] == 6 &&
    seedString[5] == 6 &&
    temVariante
  ) {
    DEBUG && console.log("variante: ", variante);
    return (variante = variantes[seedString[6]]);
  } else {
    DEBUG && console.log("variante modulo: ", variante);
    return (variante = variantes[10]);
  }
}
