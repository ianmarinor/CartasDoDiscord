export function gerarNumero(min, max, decimals) {
    if (decimals) {
      return (Math.random() * (max - min) + min).toFixed(decimals);
    } else {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }



 // SISTEMA DE LEVELS COM FRONTEIRA FIXA 

// let life = 10




// let levels = [ [80,'L1' ],  [60,'L2'] , [40,'L3'], [20,'L4'] ,   [0,'L5']  ]

// for (const x of levels) {

//     if(x[0] < life){
    
//         console.log(x[1])
//         break;
//     }
    
// }





// SISTEMA DE LEVELS COM FRONTEIRA DINAMICA


let life = 84





let levels = [ [gerarNumero(76,84),'L1' ],  [gerarNumero(56,64),'L2'] , [gerarNumero(34,46),'L3'], [gerarNumero(14,26),'L4'] ,   [gerarNumero(0,14),'L5']  ]

for (const x of levels) {

    if(x[0] < life){
        console.log('x[0]: ', x[0]);
        
        console.log(x[1])
        break;
    }
    
}