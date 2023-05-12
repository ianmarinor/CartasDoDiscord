
let rein = {
    targetPoint: 2
}

let road = {
    targetPoint: 4
}

let dva ={
    targetPoint: 6
}

let team = [rein,road,dva]

let target

function chooseTarget(){

    let pool = []

    team.map(
        (x)=>{

            if(!x.empty){
                pool.push(x.targetPoint)
                
            }

        }
    )

    target = pool.indexOf(Math.max(...pool))
    console.log(pool);
    console.log('target: ', target);
    
    
}
chooseTarget()
