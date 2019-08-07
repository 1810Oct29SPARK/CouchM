/**
 * this file is being referenced by the app.module.ts as what should be recognized by Angular at start up
 */

import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root', /** the selector is how Angular can take the entire component and insert it into another html file*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  allowUserInput = false;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    setTimeout(() => {
      this.allowUserInput = true;
    }, 2000);
  }

  disable = false;

  userInfo = this.fb.group({
    id: { value: 0, disabled: this.disable },
    name: '',
    strength: 0,
    perception: 0,
    endurance: 0,
    charisma: 0,
    intelligence: 0,
    agility: 0,
    luck: 0
  });

  traveler = "Traveler";

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

  createNewUser() {
    console.log(this.userInfo.value)
    this.dataService.createUser(this.userInfo.value).subscribe(data => console.log(data))
    this.traveler = this.userInfo.value.name;
    this.userInfo.get("name").disable();
  }

  getUserInfo() {
    this.dataService.getData().subscribe(data => {
      this.userInfo.value.id = data['id'];
      this.userInfo.value.name = data['name'];
      this.userInfo.value.strength = data['strength'];
      this.userInfo.value.perception = data['perception'];
      this.userInfo.value.endurance = data['endurance'];
      this.userInfo.value.charisma = data['charisma'];
      this.userInfo.value.intelligence = data['intelligence'];
      this.userInfo.value.agility = data['agility'];
      this.userInfo.value.luck = data['luck'];
    })
  }

  ngOnInit() {

  }
}
