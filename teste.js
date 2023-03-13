let ian = {

    hp: 100,
    buff: 40,
    barreira: 20,
    totalHp: true,

    damageTaken: 0,
    mit: 0,

    tick(){

        this.totalHp = this.hp + this.buff
        console.group(' INITIAL ');
                console.log( 'total', this.totalHp  );
                console.log( 'hp', this.hp  );
                console.log( 'buff',this.buff  );
                console.log( 'barreira',this.barreira );
                console.log( 'dmgTaken',this.damageTaken );
                console.groupEnd()
    },

    useBarrier(damage){

        if (  this.barreira > 0){

            this.barreira -= damage

            this.mit += damage
           if (this.barreira <= 0) this.barreira = 0

            console.group('somente com tank do barreira');
            console.log( 'total', this.totalHp  );
            console.log( 'hp', this.hp  );
            console.log( 'buff',this.buff  );
            console.log( 'barreira',this.barreira  );
            console.log( 'mit',this.mit  );
            console.log( 'dmgTaken',this.damageTaken );
            console.groupEnd()
            return true
        }

        return false
        
    },


    dmg(n){

        
        console.log('!DAMAGE!', n);
        
            if(this.useBarrier(n)){
                return
            }

            this.buff -= n
            this.damageTaken += n

            if (  this.buff > 0){
                this.totalHp = this.hp + this.buff

                console.group('somente com tank do buff');
                console.log( 'total', this.totalHp  );
                console.log( 'hp', this.hp  );
                console.log( 'buff',this.buff  );
                console.log( 'barreira',this.barreira  );
                console.log( 'mit',this.mit  );
                console.log( 'dmgTaken',this.damageTaken );
                console.groupEnd()
                return
            }


            this.hp +=  this.buff 
            

            this.buff = 0
            this.totalHp = this.hp + this.buff
            console.group('tank do buff e hp pu buff == 0');
            console.log( 'total', this.totalHp  );
            console.log( 'hp', this.hp  );
            console.log( 'buff',this.buff  );
            console.log( 'barreira',this.barreira );
            console.log( 'mit',this.mit  );
            console.log( 'dmgTaken',this.damageTaken );
            console.groupEnd()
    } 


}

function tick(){

setInterval(

   ()=> ian.tick(), 100
    
)

}
ian.tick()
ian.dmg(10)
ian.dmg(10)
ian.dmg(1)
// ian.dmg(41)
// ian.dmg(80)

