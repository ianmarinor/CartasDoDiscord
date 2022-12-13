import { seedObj } from "./seedFabricator.js";
import { variante } from "./variante.js";

export let criticoTag;

export function criticoCheck() {
  let seedString = seedObj._seedString;

  if (seedString[1] == seedString[2]) {
    if (variante.nome != "" && seedString[1] == seedString[6]) {
      //ULTRACRITICO
      criticoTag = {
        noCrit: false,
        critico: false,
        superCritico: false,
        ultraCritico: true,
        multi: 6,
        css: {
          nomeP: "critico",
          cidadeP: "critico",
          varianteP: "critico",
          cartaP: "critico",
        },
        cssRemove: {
          nomeP: "",
          cidadeP: "",
          varianteP: "",
          cartaP: "",
        },
      };
    } else {
      //CRITICO
      criticoTag = {
        noCrit: false,
        critico: true,
        superCritico: false,
        ultraCritico: false,
        multi: 2,
        css: {
          nomeP: "critico",
          cidadeP: "critico",
          varianteP: "",
          cartaP: "",
        },

        cssRemove: {
          nomeP: "",
          cidadeP: "",
          varianteP: "critico",
          cartaP: "critico",
        },
      };
    }
  } else if (variante.nome != "" && seedString[1] == seedString[6]) {
    //SUPERCRITICO
    criticoTag = {
      critico: false,
      superCritico: true,
      ultraCritico: false,
      multi: 3,
      css: {
        nomeP: "critico",
        cidadeP: "f",
        varianteP: "critico",
        cartaP: "f",
      },
      cssRemove: {
        nomeP: "",
        cidadeP: "critico",
        varianteP: "",
        cartaP: "fcritico",
      }
    };
  } else {
    //NAO CRITICO
    criticoTag = {
      noCrit: true,
      critico: false,
      superCritico: false,
      ultraCritico: false,
      multi: 1,
      css: {
        nomeP: "f",
        cidadeP: "f",
        varianteP: "f",
        cartaP: "f",
      },
      cssRemove: {
        nomeP: "",
        cidadeP: "",
        varianteP: "",
        cartaP: "",
      },
    };
    //   console.log('criticoTag: ', criticoTag);
    //   console.log('variante.name: ', variante.nome);
  }
}
