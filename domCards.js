let menosClickBPicture = "url('pics/clickretrato.webp')";
export let menosClickBlueprint =
  '<div id="-click" class="monark">' +
  '<div class="nameAndCidadeWrapper">' +
  '<p class="nome-inimigo">' +
  "- CARTAS -" +
  "</p>" +
  "</div>" +
  '<div class="retrato" style="display: block; background-image: ' +
  menosClickBPicture +
  '"></div>' +
  '<p class="cargo"></p>' +
  '<div class="poder-inimigo">' +
  '<p class="ataque"></p>' +
  '<p class="novoAtaque"></p>' +
  '<p class="action-inimigo" ></p>' +
  "</div>" +
  '<p class="seed"></p>' +
  '<p class="seloAre"></p>' +
  "</div>";

let camaradaBPicture = "url('pics/retratoCamarada.gif')";
export let camaradaBlueprint =
  '<div id="comunista" class="monark">' +
  '<div class="nameAndCidadeWrapper">' +
  '<p class="nome-inimigo">' +
  "BLACKAO CAMARADA" +
  "</p>" +
  "</div>" +
  '<div class="retrato" style="display: block; background-image: ' +
  camaradaBPicture +
  '"></div>' +
  '<p class="cargo"></p>' +
  '<div class="poder-inimigo">' +
  '<p class="ataque"></p>' +
  '<p class="novoAtaque"></p>' +
  '<p class="action-inimigo" ></p>' +
  "</div>" +
  '<p class="seed"></p>' +
  '<p class="seloAre"></p>' +
  "</div>";

let tankBPicture = "url('pics/tankRetrato.jpg')";
export let tankBlueprint =
  '<div id="tank" class="monark">' +
  '<div class="nameAndCidadeWrapper">' +
  '<p class="nome-inimigo">' +
  "TANK" +
  "</p>" +
  "</div>" +
  '<div class="retrato" style="display: block; background-image: ' +
  tankBPicture +
  '"></div>' +
  '<p class="cargo" style="transform: rotate(0deg)">  <progress style="width: 75%; border: none; background-color: #895538; height: 40%" value="0" max="100"> </progress>   </p>' +
  '<div class="poder-inimigo">' +
  '<p class="ataque"></p>' +
  '<p class="novoAtaque"></p>' +
  '<p class="action-inimigo" ></p>' +
  "</div>" +
  '<p class="seed"></p>' +
  '<p class="seloAre"></p>' +
  "</div>";

let dogBPicture = "url('pics/dogRetrato.webp')";
let dogNome = "UNNAMED <br> DOG";

export let dogBlueprint =
  '<div id="dog" class="monark">' +
  '<div class="nameAndCidadeWrapper">' +
  '<p class="nome-inimigo"  >' +
  dogNome +
  "</p>" +
  "</div>" +
  '<div class="retrato" style="  display: block; background-image: ' +
  dogBPicture +
  '; background-size: cover; "></div>' +
  '<p class="cargo"></p>' +
  '<div class="poder-inimigo">' +
  '<p class="ataque"></p>' +
  '<p class="novoAtaque"></p>' +
  '<p class="action-inimigo" ></p>' +
  "</div>" +
  '<p class="seed"></p>' +
  '<p class="seloAre"></p>' +
  "</div>";

export function blueprintBuilder(_id, _name, _photo) {



  let id = _id
  let name = _name
  let picture =  _photo

  let defaultBlueprint =
    "<div id=" +
    id +
    " class='monark' >" +
    '<div class="nameAndCidadeWrapper">' +
    '<p class="nome-inimigo"  >' +
    name +
    "</p>" +
    '<p class="cidade-inimigo"  >' +
    "</div>" +
    '<div class="retrato" style="  display: block; background-image: ' +
    picture +
    '; background-size: cover; "></div>' +
    '<p class="cargo-inimigo"></p>' +
    '<div class="poder-inimigo">' +
    '<p class="ataque"></p>' +
    '<p class="novoAtaque"></p>' +
    '<p class="action-inimigo" ></p>' +
    "</div>" +
    '<p class="seed"></p>' +
    '<p class="seloAre"></p>' +
    "</div>";

    

    return defaultBlueprint

}
