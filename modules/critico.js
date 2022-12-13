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
        energia:{
          ataqueNovo: 'visible',
          ataque: 'line-through',
          ataqueNovoFontSize: '1.75em',
          ataqueNovoCritico: 'critico'
          
        }
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
        energia:{
          ataqueNovo: 'visible',
          ataque: 'line-through',
          ataqueNovoFontSize: '',
          
          ataqueNovoCritico: ''
        }
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
        cidadeP: "",
        varianteP: "critico",
        cartaP: "",
      },energia:{
        ataqueNovo: 'visible',
        ataque: 'line-through',
        ataqueNovoFontSize: '1.75em',
        
          ataqueNovoCritico: ''
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
        nomeP: "",
        cidadeP: "",
        varianteP: "",
        cartaP: "",
      },energia:{
        ataqueNovo: 'hidden',
        ataqueNovoFontSize: '',
        ataque: '',
        ataqueNovoCritico: ''
      }
    };
    //   console.log('criticoTag: ', criticoTag);
    //   console.log('variante.name: ', variante.nome);
  }
}
