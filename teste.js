let especial = {
    cartaId: 'dva',
    dano: 50,
    custom(){ console.log(555555)},

    print(){
        console.log(2222222222222222)
    }

}

especial.custom()

especial.custom = especial.print


especial.custom()