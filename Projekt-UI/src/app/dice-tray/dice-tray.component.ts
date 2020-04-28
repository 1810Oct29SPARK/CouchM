import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DiceRollService } from '../dice-roll.service';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';
import { CombatService } from './../combat.service';
import { Subscription } from 'rxjs';

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

  numberOfDice: number = 1;

  totalRoll: number;

  hits: string;

  subscription: Subscription;

  messageFromCombat: string;

  rollDice(number) {
    this.diceResult = [];
    for (let i = 0; i < this.numberOfDice; i++) {
      this.diceResult.push(this.diceService.rollDie(number));
    }
    // this.diceResult.sort((n1, n2) => n1 - n2);
    console.log(this.diceResult);
    // Total of diceResults combined
    // this.totalRoll = this.diceResult.reduce((a, b) => a + b, 0);
    let successRolls = this.diceResult.filter((n) => n >= 4);
    this.hits = successRolls.length.toString();
    this.numberOfDice = 1;
    this.updateCombat(this.hits);
    this.messageFromCombat = '';
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
  }

}
