export function tenicaEnergia() {
  return Math.floor(Math.random() * 200 + 150);
}

export function abelhaEnergia() {
  return Math.floor(Math.random() * 140 + 130);
}

export function abelhaDecrease() {
  return Math.floor(Math.random() * 20 + 5);
}

export function abelhaLowHp() {
  return Math.floor(Math.random() * 3 + 3);
}

export function abelhaDecreaseComTuru() {
  return Math.floor(Math.random() * 50 + 25);
}

let frasesAbelhaTuru = [
  "afff morri",
  " bane esse bosta",
  "pq tanto odio :(",
  "morri kk",
  "rip",
  'o fala bosta',
  'me matou de novo',
  'viva a 1.15',
  'removed herobrine'
];

export function frasesAbelha() {
  return frasesAbelhaTuru[Math.floor(Math.random() * 9 + 0)];
}


let frasesComunista = [
  "PAZ, PAO E TERRA",
  "HASTA LA REVOLUCION!",
  "UNI-VOS!",
  "PAZ ENTRE NOS, GUERRA AOS SENHORES",
  'ТОВАРИЩ!',
  'FORMADEORGANIZA',
  'ABAIXO À BURGUESIA!',
  'DEFINA COMUNISO, CAMARADA!',
  'TENHO NOJO DE BURGUES'
];


let valoresComunista= [333,333,333,333,666,666,999]
export function comunistaPE() {
  return valoresComunista[Math.floor(Math.random() * 7 + 0)] 
}
export function frasesComuna(){
 return frasesComunista[Math.floor(Math.random() * frasesComunista.length)]
}