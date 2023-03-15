import { gerarNumero } from "./script.js"

export function cidade(){

    let cidades = [
        "de Caxias do Sul",
        "de Itapira",
        "de Ubatuba",
        "de Sao Jose Dos Pinhais",
        "do Rio de Janeiro",
        "de Maringá",
        "de Porto Alegre",
        "da Lapa",
        "de Jaraguá",
        "de Santo André",
    ]
return cidades[gerarNumero(0,9)]}