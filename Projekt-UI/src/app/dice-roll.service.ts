import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceRollService {

  constructor() { }

  rollDie(dice: number) {
    return Math.floor(Math.random() * dice) + 1;
  }
}
