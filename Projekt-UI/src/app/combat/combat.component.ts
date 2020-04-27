import { Component, OnInit } from '@angular/core';
import { DiceRollService } from '../dice-roll.service';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  constructor(private diceService: DiceRollService, private dataService: DataService, private fb: FormBuilder, private router: Router) { }

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

  createOrk() {
    this.dataService.createOrk().subscribe(data => {
      let dbInfo = data.body;
      console.log(dbInfo);
      this.wordsArray.push("An Ork has appeared.");
      this.getAllOrks();
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

    setTimeout(() => {
      this.wordsArray.push("Generate an opponent with the 'Ork' button on the right.")
    }, 1000);
  }

}
