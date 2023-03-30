// let inv = [
//   {
//     cargo: "semCargo",
//   },
  
  
// ];

// let counts = {

//     'semCargo': 5,
//     'people': 0,
//     'gentleman': 2,
//     'nobre': 0,
//     'lord': 0,
//     'ministro': 3,
//     'primeMinister': 0,
//     'premioMarino': 0,

// };

// inv.forEach((x) => {
//   // cria um atributo de nome 'x.cargo' que é (inicialmente undefined)
//   // Esse atributo recem criado tem o valor dele mesmo (se true) mais 1
//   // se o valor é false, será 0 + 1
//   counts[x.cargo] = counts[x.cargo]  + 1;
// });

// // console.log(counts);



// let arr = Object.entries(counts);

// // console.log(counts)
// console.log(arr);


// let vencedorNum = arr[0]
// let vencedor

// for(let i =0 ; i<8; i++){
    
//     let conco = arr[i][1]
//     let concorrente = arr[i]

//     // se campeao for menor **OU IGUAL** troca de campeao
//    if(vencedorNum >= conco){
    
//    } else {
//     vencedorNum = conco
//     vencedor = concorrente

//     //multiplicador
//     if(vencedorNum > 1){

//         concorrente.push((i + 1) * (vencedorNum - 1)) 
//     } else {    
//         concorrente.push(1)
//     }
//    }

//     // console.log(conco);
// }

// console.log('vencedor: ', vencedor);
// let multiplicador = vencedor[2]
// console.log('multiplicador: ', multiplicador);