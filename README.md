<div align='center' > ## 🎴 TENICARTAS 🎴 </div>

### ⬇️ ESPECIAL CARDS METHODS⬇️
---
🔹`addBuff(n)` 

 - Will increase `this.buff` by `n`

---
🔹` activateButtonForCardId(_cartaId, _arena)` 
 - Checks if there is a card in `_arena` with the value of `_cartaId` as its `cartaId` value.
   - If yes, set `this._invHiddenButton` to `false`.
   - If not, set `this._invHiddenButton` to `true`.
- If `_arena` is empty, its value will be equal to **are**.
- ***REQUIRES REVISION***

---
🔹`areaAtack()`

 - Will damage every card on ***are*** if they're not invisible.
 - Damage will be `this.dano`.

---
🔹`ataque(dmg, ammO, _spread)`

- Will attack one random card within ***are*** following this hierarchy if they're not invisible: tank > especial > normal > miniBoss > boss
  
   - ***REQUIRES IMPLEMENTATION***

- `dmg` 
  - Amount of damage to be used. If not set it'll be taken from `this.dano`.


- `ammO` 
  - Amount of ammo to be cosumed with the attack. 
  - If not set it'll be 1.
  

- `_spread` 
   - An array of 2 values: 
      - First one will be a boolean. 
      If true there'll be dmg spread between left and right cards.
      - Second value will be damage to be spread.

    - Damage to be spread will be divided by 3 if `this.tank` is true and 6 if not.
    - If not set `_spread[0]` will be false.
---
🔹`buildUlt(n)`

 - Increase the `this.ulti` attribute by `n`.
 - Change ulti value over the DOM and adds its css class `this.ulti` equals 100.

---
🔹`buildUltAuto()`

 - Has 33% chance of increasing `this.ulti` by 1 when when run.
 - Is run every round.

---
🔹`changeEmojiToDefault()`
 - Will set `this.emoji` value to `this._defaultEmoji` value.

----------------- 
🔹 `checkFullHp()` 

- Returns `true` if `this.hp` equals `this._fullHp`

---
  `changeRetrato(img)` 
 - Set `this._retratoP` background image value to `img`.

---
`disableButton(_trigger, _element)`


---
`dmg(n)`

  - Will call `useBarrier()` on its call.
    - If `useBarrier()` returns `true`, `dmg()` will be stopped from running.
  - If `this.hashp` is equal to `false` it'll run `kill()` and return.
  - Will decrease `this.buff` by `n`
    -  If after the deacrease, `this.buff` is a positive number, it'll return.
    -  If not, it'll take `this.buff` value and sum it with `this.hp` value.
    -  Will set  `this.buff` to 0, run  `efeitoDano()` and `setTotalHp()`.
    -  If `this.totalHp` less the 0, runs `kill()`

---
`giveAllyEmoji(ally)`

 - If `this.statusEmoji` value equals `false`, sets its value to `ally`.
    - ***NEEDS REVISION*** 

----
 `heal(n, _delay)`
- Will increase `this.hp` by `n`
- Will delay its action by the value of `_delay` in ms.
    - If `_delay` not set will delay by a random number between 350 and 650. 
- Will not work if at least one of `this._dead` or `this._fullHp` is true.

---
`kill(absolute)`
- If `absolute` is false and card is creeper, will run `explode` and return.
   - ***NEEDS REVISION***
- Will run `elimCard ...` functions depending on `this.parent` amd set `this.dead` to true.

----------------- 
 `place()` 

 - Sets the position over the dom  of the card ( `this._cardP` )
it's called uppon. 
 - Is run automatically by `tick()` every 5ms.

---
`removeBuff(n)`
  - Decrease `this.buff` by `n`.
  - if `this.buff` is less than 0, sets it to 0.

---
`setEmoji(x)`
- Will set `this.emoji` value to `x` value.

---
`setHp(n)`

- Will set `this.hp` and `this.maxHealth` as `n`.


----------------- 
`setTotalHp()` 

- Sums up `this.hp` with `this._buff` and returns `this._totalHp`

---
`useBarrier(_damage)`
 - This function is called by `dmg()`.
 - If `this.barreira` is bigger than 0, will decrease its value and increase `this.mit` by `_damage` and return `true`.
 - If `this.barreira`'s value is less than 0, will return `false`

---
`code`
`code`