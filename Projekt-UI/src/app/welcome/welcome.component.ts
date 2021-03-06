/**
 * this file is being referenced by the app.module.ts as what should be recognized by Angular at start up
 */

import { Component, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome', /** the selector is how Angular can take the entire component and insert it into another html file*/
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {

  allowUserInput = false;

  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router) {

  }

  disable = false;

  userInfo = this.fb.group({
    id: '',
    name: '',
    health: 0,
    ranger: 0,
    assault: 0,
    defense: 0,
    move: 0,
    perks: []
  });

  id: any;
  name;
  health;
  ranger;
  assault;
  defense;
  move;
  perks: Array<string>;

  welcomeButton = "Enter";

  onNameEnter(event: any) {
    console.log(event);
  }

  submitted = true;

  createNewUser() {
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
      this.changeUserInfo();
      this.router.navigateByUrl('/calculator');
    })
    this.name = this.userInfo.value.name;
    this.welcomeButton = "Welcome";
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
  }
}
