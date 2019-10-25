import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceRollService {

  constructor() { }

  rollDice() {
    let result = Math.random().toPrecision(6);
  }

  dice = {
    sides: 6,
    roll: this.rollDie()
  }

  rollDie(){
    Math.floor(Math.random() * this.dice.sides) + 1;
  }
}
