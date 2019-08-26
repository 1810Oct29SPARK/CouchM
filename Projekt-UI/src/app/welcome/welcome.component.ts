/**
 * this file is being referenced by the app.module.ts as what should be recognized by Angular at start up
 */

import { Component } from '@angular/core';
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

  submitted = true;

  createNewUser() {
    console.log(this.userInfo.value)
    this.dataService.createUser(this.userInfo.value).subscribe(data => console.log(data))
    this.traveler = this.userInfo.value.name;
    this.userInfo.get("name").disable();
    setTimeout(() => {
      this.router.navigateByUrl('/calculator');
    }, 2000);
  }

  ngOnInit() {

  }
}
