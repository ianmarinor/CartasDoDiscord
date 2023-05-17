
let lucio= {

  hasCooldOwn: true,
  naturalCooldown: 10,
  cooldown: 10,
  startedCoolDown: false,

  onCoolDownFinish(){

  }

}


function coolDown(){

  

  setTimeout(()=>{

    lucio.cooldown--

    if(lucio.cooldown == 1){

      lucio.cooldown = lucio.naturalCooldown
      lucio.onCoolDownFinish()
      
    }
  }

    

  ,1000)


}