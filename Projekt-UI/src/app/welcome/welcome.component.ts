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
    strength: 0,
    perception: 0,
    endurance: 0,
    charisma: 0,
    intelligence: 0,
    agility: 0,
    luck: 0
  });

  id = "";
  traveler = "";
  strength;
  perception;
  endurance;
  charisma;
  intelligence;
  agility;
  luck;

  welcomeButton = "Enter";

  onHoverWelcome() {
    this.welcomeButton = "Welcome";
  }

  offHoverWelcome() {
    this.welcomeButton = "Enter";
  }

  onNameEnter(event: any) {
    console.log(event);
  }

  submitted = true;

  userDataCookie: any = [];

  createNewUser() {
    this.dataService.createUser(this.userInfo.value).subscribe(data => {
      console.log(data.body);
      let dbInfo = data.body;
      console.log(dbInfo['id'])
      this.id = dbInfo['id'];
      console.log(this.id)
      this.strength = dbInfo['strength'];
      this.perception = dbInfo['perception'];
      this.endurance = dbInfo['endurance'];
      this.charisma = dbInfo['charisma'];
      this.intelligence = dbInfo['intelligence'];
      this.agility = dbInfo['agility'];
      this.luck = dbInfo['luck'];
    })
    this.traveler = this.userInfo.value.name;
    this.userInfo.get("name").disable();
    this.changeUserInfo();
    setTimeout(() => {
      this.router.navigateByUrl('/calculator');
    }, 2000);
  }

  changeUserInfo() {
    console.log(this.id)
    this.dataService.changeUserId(this.id);
    console.log(this.traveler)
    this.dataService.changeUserName(this.traveler);
    console.log(this.strength)
    this.dataService.changeUserStr(this.strength);
    console.log(this.perception)
    this.dataService.changeUserPer(this.perception);
    console.log(this.endurance)
    this.dataService.changeUserEnd(this.endurance);
    console.log(this.charisma)
    this.dataService.changeUserCha(this.charisma);
    console.log(this.intelligence)
    this.dataService.changeUserInt(this.intelligence);
    console.log(this.agility)
    this.dataService.changeUserAgi(this.agility);
    console.log(this.luck)
    this.dataService.changeUserLuck(this.luck);
  }

  ngOnInit() {
    this.dataService.id.subscribe(id => this.id = id);
    this.dataService.traveler.subscribe(name => this.traveler = name);
    this.dataService.strength.subscribe(strength => this.strength = strength);
    this.dataService.perception.subscribe(perception => this.perception = perception);
    this.dataService.endurance.subscribe(endurance => this.endurance = endurance);
    this.dataService.charisma.subscribe(charisma => this.charisma = charisma);
    this.dataService.intelligence.subscribe(intelligence => this.intelligence = intelligence);
    this.dataService.agility.subscribe(agility => this.agility = agility);
    this.dataService.luck.subscribe(luck => this.luck = luck);
  }
}
