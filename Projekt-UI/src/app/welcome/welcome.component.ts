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
    perks: []
  });

  id: any;
  traveler;
  health;
  ranger;
  assault;
  defense;
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
      this.health = dbInfo['health'];
      this.ranger = dbInfo['ranger'];
      this.assault = dbInfo['assault'];
      this.defense = dbInfo['defense'];
      this.perks = dbInfo['perks'];
      this.changeUserInfo();
    })
    this.traveler = this.userInfo.value.name;
    this.userInfo.get("name").disable();
    this.welcomeButton = "Welcome";
    setTimeout(() => {
      this.router.navigateByUrl('/calculator');
    }, 2000);
  }

  changeUserInfo() {
    this.dataService.changeUserId(this.id);
    this.dataService.changeUserName(this.traveler);
    this.dataService.changeUserHealth(this.health);
    this.dataService.changeUserRan(this.ranger);
    this.dataService.changeUserAss(this.assault);
    this.dataService.changeUserDef(this.defense);
    this.dataService.changeUserPerks(this.perks);
  }

  ngOnInit() {
    this.dataService.id.subscribe(id => this.id = id);
    this.dataService.traveler.subscribe(name => this.traveler = name);
    this.dataService.health.subscribe(health => this.health = health);
    this.dataService.ranger.subscribe(ranger => this.ranger = ranger);
    this.dataService.assault.subscribe(assault => this.assault = assault);
    this.dataService.defense.subscribe(defense => this.defense = defense);
    this.dataService.perks.subscribe(perks => this.perks = perks);
  }
}
