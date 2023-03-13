let ian = {

    hp: 100,
    _buff: 40,
    __barreira: 20,
    _totalHp: true,

    damageTaken: 0,
    mit: 0,

    tick(){

        this._totalHp = this.hp + this._buff
        console.group(' INITIAL ');
                console.log( 'total', this._totalHp  );
                console.log( 'hp', this.hp  );
                console.log( ' _buff',this._buff  );
                console.log( '_barreira',this._barreira );
                console.log( 'dmgTaken',this._damageTaken );
                console.groupEnd()
    },

    useBarrier(damage){

        if (  this._barreira > 0){

            this._barreira -= damage

            this.mit += damage
           if (this._barreira <= 0) this._barreira = 0

            console.group('somente com tank do _barreira');
            console.log( 'total', this._totalHp  );
            console.log( 'hp', this.hp  );
            console.log( ' _buff',this._buff  );
            console.log( '_barreira',this._barreira  );
            console.log( 'mit',this.mit  );
            console.log( 'dmgTaken',this._damageTaken );
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

            this._buff -= n
            this._damageTaken += n

            if (  this._buff > 0){
                this._totalHp = this.hp + this._buff

                console.group('somente com tank do  _buff');
                console.log( 'total', this._totalHp  );
                console.log( 'hp', this.hp  );
                console.log( ' _buff',this._buff  );
                console.log( '_barreira',this._barreira  );
                console.log( 'mit',this.mit  );
                console.log( 'dmgTaken',this._damageTaken );
                console.groupEnd()
                return
            }


            this.hp +=  this._buff 
            

            this._buff = 0
            this._totalHp = this.hp + this._buff
            console.group('tank do  _buff e hp pu  _buff == 0');
            console.log( 'total', this._totalHp  );
            console.log( 'hp', this.hp  );
            console.log( ' _buff',this._buff  );
            console.log( '_barreira',this._barreira );
            console.log( 'mit',this.mit  );
            console.log( 'dmgTaken',this._damageTaken );
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

