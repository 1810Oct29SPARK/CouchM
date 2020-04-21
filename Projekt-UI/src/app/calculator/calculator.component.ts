import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator', /** it is possible to use [app-calculator] to reference this component as an attribute of a div,
  as well as putting a . in front to use as a class within a div to achieve the same result as adding the app-calculator tag in
  the app.component.html */
  templateUrl: './calculator.component.html', /** it is possible to use `<html-tags></html-tags>` to achieve the same effect, as long as the html is not extensive */
  styleUrls: ['./calculator.component.css'] /** the same above can be done here by removing "Urls" from the variable name, and simply writing
  css code within backticks */
})
export class CalculatorComponent implements OnInit {

  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router) { }

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
    health: 10,
    ranger: 1,
    assault: 1,
    defense: 1,
    move: 5,
    perks: []
  });

  resetValues = {
    id: this.id,
    name: this.name,
    health: 10,
    ranger: 1,
    assault: 1,
    defense: 1,
    move: 5,
    perks: []
  }

  totalPoints = 3;
  minLimitRan: boolean = false;
  minLimitAss: boolean = false;
  minLimitDef: boolean = false;
  maxLimit: boolean = false;

  updateButton = "Enter";

  // i know this is not even remotely elegant, don't look at me.

  addRan() {
    if (this.totalPoints > 0) {
      this.userInfo.value.ranger += 1;
      this.totalPoints--;
    } else {
      this.maxLimit = true;
    }
  }

  subRan() {
    if (this.userInfo.value.ranger > 1) {
      this.userInfo.value.ranger -= 1;
      this.totalPoints++;
    } else {
      this.minLimitRan = true;
    }
  }

  addAss() {
    if (this.totalPoints > 0) {
      this.userInfo.value.assault += 1;
      this.totalPoints--;
    } else {
      this.maxLimit = true;
    }
  }

  subAss() {
    if (this.userInfo.value.assault > 1) {
      this.userInfo.value.assault -= 1;
      this.totalPoints++;
    } else {
      this.minLimitAss = true;
    }
  }

  addDef() {
    if (this.totalPoints > 0) {
      this.userInfo.value.defense += 1;
      this.totalPoints--;
    } else {
      this.maxLimit = true;
    }
  }

  subDef() {
    if (this.userInfo.value.defense > 1) {
      this.userInfo.value.defense -= 1;
      this.totalPoints++;
    } else {
      this.minLimitDef = true;
    }
  }

  // there's gotta be a better way to do this ^

  enterUserStats() {
    this.updateButton = "Let's Continue";
    this.dataService.userStats(this.userInfo.value).subscribe(data => {
      let dbInfo = data.body;
      console.log(dbInfo);
      this.id = dbInfo['id'];
      this.health = dbInfo['health'];
      this.ranger = dbInfo['ranger'];
      this.assault = dbInfo['assault'];
      this.defense = dbInfo['defense'];
      this.move = dbInfo['move'];
      this.perks = dbInfo['perks'];
      this.changeUserInfo();
      this.router.navigateByUrl('/perks');
    })
  }

  resetUserStats() {
    this.totalPoints = 3;
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
    console.log(this.userInfo.value)
  }

  changeUserInfo() {
    this.dataService.changeUserId(this.id);
    this.dataService.changeUserName(this.name);
    this.dataService.changeUserHealth(this.health);
    this.dataService.changeUserRan(this.ranger);
    this.dataService.changeUserAss(this.assault);
    this.dataService.changeUserDef(this.defense);
    this.dataService.changeUserMove(this.move);
    this.dataService.changeUserPerks(this.perks);
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
