import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DiceRollService } from '../dice-roll.service';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';
import { CombatService } from './../combat.service';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dice-tray',
  templateUrl: './dice-tray.component.html',
  styleUrls: ['./dice-tray.component.css']
})
export class DiceTrayComponent implements OnInit {

  @Input() message: string;

  @Output() diceMessage = new EventEmitter<string>();

  constructor(private diceService: DiceRollService, private dataService: DataService, private fb: FormBuilder, private combatService: CombatService) {
    this.subscription = this.combatService.getMessage().subscribe(message => this.messageFromCombat = message);
  }

  id = "";
  name = "";
  health;
  ranger;
  assault;
  defense;
  move;
  perks: Array<string>;

  userInfo = this.fb.group({
    id: '',
    name: '',
    health: 0,
    ranger: 0,
    assault: 0,
    defense: 0,
    move: 5,
    perks: []
  });

  diceResult: number[] = [];

  numberOfDice: number = 3;

  totalRoll: number;

  hits: string;

  blocks: string;

  subscription: Subscription;

  messageFromCombat: string = '';

  rangerTwo: boolean = false;
  rangerThree: boolean = false;
  rangerFour: boolean = false;

  assaultTwo: boolean = false;
  assaultThree: boolean = false;
  assaultFour: boolean = false;

  defenseTwo: boolean = false;
  defenseThree: boolean = false;
  defenseFour: boolean = false;

  rollDice(number) {
    this.diceResult = [];
    for (let i = 0; i < this.numberOfDice; i++) {
      this.diceResult.push(this.diceService.rollDie(number));
    }
    // this.diceResult.sort((n1, n2) => n1 - n2);
    console.log(this.diceResult);
    // Total of diceResults combined
    // this.totalRoll = this.diceResult.reduce((a, b) => a + b, 0);
    if (this.messageFromCombat.includes('attack')) {
      let successRolls = this.attack(this.diceResult);
      console.log(successRolls);
      console.log("Successful attacks: " + successRolls.length.toString());
      let successfulAttacks = successRolls.length;
      // this.hits = successRolls.length.toString();
      this.defend(successfulAttacks);
      console.log("Attacks blocked: " + this.blocks);
      console.log("Damage inflicted: " + this.hits);
    } else if (this.messageFromCombat.includes('defend')) {
      // this.defend(this.diceResult);
    }
    this.updateCombat(this.hits + "," + this.blocks);
    this.messageFromCombat = '';
  }

  attack(rolls: number[]) {
    if (this.rangerTwo) {
      return rolls.filter((n) => n >= 4);
    } else if (this.rangerThree) {
      return rolls.filter((n) => n >= 3);
    } else if (this.rangerFour) {
      return rolls.filter((n) => n >= 2);
    } else {
      return rolls.filter((n) => n >= 5);
    }
  }

  defend(success: number) {
    let defenseRoll: number[] = [];
    for (let i = 0; i < success; i++) {
      defenseRoll.push(this.diceService.rollDie(success));
    }
    console.log("Defense roll results: " + defenseRoll);
    if (this.defenseTwo) {
      let successfulBlocks = defenseRoll.filter((n) => n >= 4);
      this.blocks = successfulBlocks.length.toString();
      let failedBlocks = defenseRoll.filter((n) => n < 4);
      this.hits = failedBlocks.length.toString();
    } else if (this.defenseThree) {
      let successfulBlocks = defenseRoll.filter((n) => n >= 3);
      this.blocks = successfulBlocks.length.toString();
      let failedBlocks = defenseRoll.filter((n) => n < 3);
      this.hits = failedBlocks.length.toString();
    } else if (this.defenseFour) {
      let successfulBlocks = defenseRoll.filter((n) => n >= 2);
      this.blocks = successfulBlocks.length.toString();
      let failedBlocks = defenseRoll.filter((n) => n < 2);
      this.hits = failedBlocks.length.toString();
    } else {
      let successfulBlocks = defenseRoll.filter((n) => n >= 5);
      this.blocks = successfulBlocks.length.toString();
      let failedBlocks = defenseRoll.filter((n) => n < 5);
      this.hits = failedBlocks.length.toString();
    }
  }

  updateCombat(message: string) {
    this.diceMessage.emit(message);
  }

  ngOnInit() {

    this.dataService.id.subscribe(id => this.id = id);
    this.dataService.name.subscribe(name => this.name = name);
    this.dataService.health.subscribe(health => this.health = health);
    this.dataService.ranger.subscribe(ranger => this.ranger = ranger);
    this.dataService.assault.subscribe(assault => this.assault = assault);
    this.dataService.defense.subscribe(defense => this.defense = defense);
    this.dataService.move.subscribe(move => this.move = move);
    this.dataService.perks.subscribe(perks => this.perks = perks);
    this.userInfo.setValue({
      id: this.id,
      name: this.name,
      health: this.health,
      ranger: this.ranger,
      assault: this.assault,
      defense: this.defense,
      move: this.move,
      perks: this.perks
    })

    console.log(this.userInfo.value);

    if (this.userInfo.value.ranger === 2) {
      this.rangerTwo = true;
    } else if (this.userInfo.value.ranger === 3) {
      this.rangerThree = true;
    } else if (this.userInfo.value.ranger === 4) {
      this.rangerFour = true;
    }

    if (this.userInfo.value.assault === 2) {
      this.assaultTwo = true;
      this.numberOfDice = 4;
    } else if (this.userInfo.value.assault === 3) {
      this.assaultThree = true;
      this.numberOfDice = 5;
    } else if (this.userInfo.value.assault === 4) {
      this.assaultFour = true;
      this.numberOfDice = 6;
    }

    if (this.userInfo.value.defense === 2) {
      this.defenseTwo = true;
    } else if (this.userInfo.value.defense === 3) {
      this.defenseThree = true;
    } else if (this.userInfo.value.defense === 4) {
      this.defenseFour = true;
    }
  }

}
