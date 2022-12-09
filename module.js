export function seed(seed,isReal,seedFalsa,isPutByPlayer ) {
    return{
      _seed: seed,
      _seedString: seed.toString(),
      _isSeedReal: isReal,
      _seedFalsaInput: seedFalsa,
      _seedLength:  seed.toString().length,
      _isPutByPlayer: isPutByPlayer
  
    }
  }