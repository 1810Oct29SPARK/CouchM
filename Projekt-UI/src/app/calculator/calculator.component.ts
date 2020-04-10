import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calculator', /** it is possible to use [app-calculator] to reference this component as an attribute of a div,
  as well as putting a . in front to use as a class within a div to achieve the same result as adding the app-calculator tag in
  the app.component.html */
  templateUrl: './calculator.component.html', /** it is possible to use `<html-tags></html-tags>` to achieve the same effect, as long as the html is not extensive */
  styleUrls: ['./calculator.component.css'] /** the same above can be done here by removing "Urls" from the variable name, and simply writing
  css code within backticks */
})
export class CalculatorComponent implements OnInit {

  constructor(private dataService: DataService, private fb: FormBuilder) { }

  id = "";
  traveler = "";
  strength;
  perception;
  endurance;
  charisma;
  intelligence;
  agility;
  luck;

  userInfo = this.fb.group({
    id: this.id,
    name: this.traveler,
    strength: this.strength,
    perception: this.perception,
    endurance: this.endurance,
    charisma: this.charisma,
    intelligence: this.intelligence,
    agility: this.agility,
    luck: this.luck
  });

  totalPoints = 21;
  minLimitStr: boolean = false;
  minLimitPer: boolean = false;
  minLimitEnd: boolean = false;
  minLimitCha: boolean = false;
  minLimitInt: boolean = false;
  minLimitAgi: boolean = false;
  minLimitLuck: boolean = false;
  maxLimit: boolean = false;

  // i know this is not even remotely elegant, don't look at me.

  addStr() {
    if (this.totalPoints > 0) {
      this.userInfo.value.strength += 1;
      this.totalPoints--;
    } else {
      this.maxLimit = true;
    }
  }

  subStr() {
    if (this.userInfo.value.strength > 1) {
      this.userInfo.value.strength -= 1;
      this.totalPoints++;
    } else {
      this.minLimitStr = true;
    }
  }

  addPer() {
    if (this.totalPoints > 0) {
      this.userInfo.value.perception += 1;
      this.totalPoints--;
    } else {
      this.maxLimit = true;
    }
  }

  subPer() {
    if (this.userInfo.value.perception > 1) {
      this.userInfo.value.perception -= 1;
      this.totalPoints++;
    } else {
      this.minLimitPer = true;
    }
  }

  addEnd() {
    if (this.totalPoints > 0) {
      this.userInfo.value.endurance += 1;
      this.totalPoints--;
    } else {
      this.maxLimit = true;
    }
  }

  subEnd() {
    if (this.userInfo.value.endurance > 1) {
      this.userInfo.value.endurance -= 1;
      this.totalPoints++;
    } else {
      this.minLimitEnd = true;
    }
  }

  addCha() {
    if (this.totalPoints > 0) {
      this.userInfo.value.charisma += 1;
      this.totalPoints--;
    } else {
      this.maxLimit = true;
    }
  }

  subCha() {
    if (this.userInfo.value.charisma > 1) {
      this.userInfo.value.charisma -= 1;
      this.totalPoints++;
    } else {
      this.minLimitCha = true;
    }
  }

  addInt() {
    if (this.totalPoints > 0) {
      this.userInfo.value.intelligence += 1;
      this.totalPoints--;
    } else {
      this.maxLimit = true;
    }
  }

  subInt() {
    if (this.userInfo.value.intelligence > 1) {
      this.userInfo.value.intelligence -= 1;
      this.totalPoints++;
    } else {
      this.minLimitInt = true;
    }
  }

  addAgi() {
    if (this.totalPoints > 0) {
      this.userInfo.value.agility += 1;
      this.totalPoints--;
    } else {
      this.maxLimit = true;
    }
  }

  subAgi() {
    if (this.userInfo.value.agility > 1) {
      this.userInfo.value.agility -= 1;
      this.totalPoints++;
    } else {
      this.minLimitAgi = true;
    }
  }

  addLuck() {
    if (this.totalPoints > 0) {
      this.userInfo.value.luck += 1;
      this.totalPoints--;
    } else {
      this.maxLimit = true;
    }
  }

  subLuck() {
    if (this.userInfo.value.luck > 1) {
      this.userInfo.value.luck -= 1;
      this.totalPoints++;
    } else {
      this.minLimitLuck = true;
    }
  }

  // there's gotta be a better way to do this ^

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

    console.log(this.userInfo.value);

  }

}
