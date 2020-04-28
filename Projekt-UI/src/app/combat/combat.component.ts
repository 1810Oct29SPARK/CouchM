import { Component, OnInit } from '@angular/core';
import { DiceRollService } from '../dice-roll.service';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CombatService } from './../combat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  constructor(private diceService: DiceRollService, private dataService: DataService, private fb: FormBuilder, private router: Router, private combatService: CombatService) {
    this.subscription = this.combatService.getMessage().subscribe(message => this.messageFromDice = message);
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

  wordsArray: Array<string> = ["Let's get you acquainted with how combat works."];

  orksArray: Array<Object> = [];

  orks;

  subscription: Subscription;

  messageFromDice;

  combatMessage: string;

  // distanceBetween: number = 0;

  createOrk() {
    this.dataService.createOrk().subscribe(data => {
      let dbInfo = data.body;
      console.log(dbInfo);
      // this.distanceBetween = 15;
      if (this.orksArray.length === 0) {
        // this.wordsArray.push("An Ork has appeared " + this.distanceBetween + " meters away.");
        this.wordsArray.push("An Ork has appeared.");
      } else {
        // this.wordsArray.push("Another Ork has appeared " + this.distanceBetween + " meters away.");
        this.wordsArray.push("Another Ork has appeared.");
      }
      // this.getAllOrks();
      this.orksArray.push(dbInfo);
      this.orks = this.orksArray.length;
      console.log(this.orksArray);
    });
  }

  getAllOrks() {
    this.dataService.getAllOrks().subscribe(data => {
      let dbInfo = data.body;
      console.log(dbInfo);
      this.orksArray.push(dbInfo);
      this.orks = this.orksArray.length;
    })
  }

  attack() {
    console.log("attack")
    this.combatService.updateMessage("attack");
  }

  defend() {
    console.log("defend")
  }

  showMessageFromDice(message: any) {
    console.log(message)
    this.wordsArray.push(message);
  }

  ngOnInit() {
    // console.log(this.distanceBetween)

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

    if (this.userInfo.value.name === 'Traveler') {
      this.dataService.createUser(this.userInfo.value).subscribe(data => {
        let dbInfo = data.body;
        console.log(dbInfo)
        this.id = dbInfo['id'];
        this.name = dbInfo['name'];
        this.health = dbInfo['health'];
        this.ranger = dbInfo['ranger'];
        this.assault = dbInfo['assault'];
        this.defense = dbInfo['defense'];
        this.move = dbInfo['move'];
        this.perks = dbInfo['perks'];
      })
      this.name = this.userInfo.value.name;
    }


    setTimeout(() => {
      this.wordsArray.push("Generate an opponent with the 'Ork' button on the right.")
    }, 1000);
  }

}
