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
  traveler = "";
  ranger;
  assault;
  defense;

  userInfo = this.fb.group({
    id: '',
    name: '',
    ranger: 1,
    assault: 1,
    defense: 1
  });

  resetValues = {
    id: this.id,
    name: this.traveler,
    ranger: 1,
    assault: 1,
    defense: 1
  }

  totalPoints = 9;
  minLimitRan: boolean = false;
  minLimitAss: boolean = false;
  minLimitDef: boolean = false;
  maxLimit: boolean = false;

  updateButton = "Enter";

  onHoverUpdate() {
    this.updateButton = "Let's Continue";
  }

  offHoverUpdate() {
    this.updateButton = "Enter";
  }

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
      this.id = dbInfo['id'];
      this.ranger = dbInfo['ranger'];
      this.assault = dbInfo['assault'];
      this.defense = dbInfo['defense'];
      this.changeUserInfo();
    })
    setTimeout(() => {
      this.router.navigateByUrl('/perks');
    }, 2000);
  }

  resetUserStats() {
    this.totalPoints = 21;
    this.userInfo.setValue({
      id: this.id,
      name: this.traveler,
      ranger: this.ranger,
      assault: this.assault,
      defense: this.defense
    })
    console.log(this.userInfo.value)
  }

  changeUserInfo() {
    this.dataService.changeUserId(this.id);
    this.dataService.changeUserName(this.traveler);
    this.dataService.changeUserRan(this.ranger);
    this.dataService.changeUserAss(this.assault);
    this.dataService.changeUserDef(this.defense);
  }

  ngOnInit() {

    this.dataService.id.subscribe(id => this.id = id);
    this.dataService.traveler.subscribe(name => this.traveler = name);
    this.dataService.ranger.subscribe(ranger => this.ranger = ranger);
    this.dataService.assault.subscribe(assault => this.assault = assault);
    this.dataService.defense.subscribe(defense => this.defense = defense);
    this.userInfo.setValue({
      id: this.id,
      name: this.traveler,
      ranger: this.ranger,
      assault: this.assault,
      defense: this.defense
    })

    console.log(this.userInfo.value);

  }

}
