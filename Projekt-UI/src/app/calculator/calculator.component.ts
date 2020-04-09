import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { UserInfoCookieService } from '../user-info-cookie.service';

@Component({
  selector: 'app-calculator', /** it is possible to use [app-calculator] to reference this component as an attribute of a div,
  as well as putting a . in front to use as a class within a div to achieve the same result as adding the app-calculator tag in
  the app.component.html */
  templateUrl: './calculator.component.html', /** it is possible to use `<html-tags></html-tags>` to achieve the same effect, as long as the html is not extensive */
  styleUrls: ['./calculator.component.css'] /** the same above can be done here by removing "Urls" from the variable name, and simply writing
  css code within backticks */
})
export class CalculatorComponent implements OnInit {

  constructor(private dataService: DataService, private userCookie: UserInfoCookieService) { }

  // local test
  specialStats = {
    strength: 1,
    perception: 1,
    endurance: 1,
    charisma: 1,
    intelligence: 1,
    agility: 1,
    luck: 1
  };

  points = 21;
  minLimitStr: boolean = false;
  minLimitPer: boolean = false;
  minLimitEnd: boolean = false;
  minLimitCha: boolean = false;
  minLimitInt: boolean = false;
  minLimitAgi: boolean = false;
  minLimitLuck: boolean = false;

  // i know this is not even remotely elegant, don't look at me.

  addStr() {
    this.specialStats.strength += 1;
    console.log(this.specialStats.strength);
  }

  subStr() {
    if (this.specialStats.strength > 1) {
      this.specialStats.strength -= 1;
    } else {
      this.minLimitStr = true;
    }
    console.log(this.specialStats.strength);
  }

  addPer() {
    this.specialStats.perception += 1;
    console.log(this.specialStats.perception);
  }

  subPer() {
    if (this.specialStats.perception > 1) {
      this.specialStats.perception -= 1;
    } else {
      this.minLimitPer = true;
    }
    console.log(this.specialStats.perception);
  }

  addEnd() {
    this.specialStats.endurance += 1;
    console.log(this.specialStats.endurance);
  }

  subEnd() {
    if (this.specialStats.endurance > 1) {
      this.specialStats.endurance -= 1;
    } else {
      this.minLimitEnd = true;
    }
    console.log(this.specialStats.endurance);
  }

  addCha() {
    this.specialStats.charisma += 1;
    console.log(this.specialStats.charisma);
  }

  subCha() {
    if (this.specialStats.charisma > 1) {
      this.specialStats.charisma -= 1;
    } else {
      this.minLimitCha = true;
    }
    console.log(this.specialStats.charisma);
  }

  addInt() {
    this.specialStats.intelligence += 1;
    console.log(this.specialStats.intelligence);
  }

  subInt() {
    if (this.specialStats.intelligence > 1) {
      this.specialStats.intelligence -= 1;
    } else {
      this.minLimitInt = true;
    }
    console.log(this.specialStats.intelligence);
  }

  addAgi() {
    this.specialStats.agility += 1;
    console.log(this.specialStats.agility);
  }

  subAgi() {
    if (this.specialStats.agility > 1) {
      this.specialStats.agility -= 1;
    } else {
      this.minLimitAgi = true;
    }
    console.log(this.specialStats.agility);
  }

  addLuck() {
    this.specialStats.luck += 1;
    console.log(this.specialStats.luck);
  }

  subLuck() {
    if (this.specialStats.luck > 1) {
      this.specialStats.luck -= 1;
    } else {
      this.minLimitLuck = true;
    }
    console.log(this.specialStats.luck);
  }

  // there's gotta be a better way to do this ^

  userInfo: any = [];

  key;

  ngOnInit() {

    // this.userCookie.getUserInfoCookie()

    // code below fetches the info from the db; keep for now

    // this.dataService.getData().subscribe(data => {
    //   this.specialStats.strength = data['strength'];
    //   this.specialStats.perception = data['perception'];
    //   this.specialStats.endurance = data['endurance'];
    //   this.specialStats.charisma = data['charisma'];
    //   this.specialStats.intelligence = data['intelligence'];
    //   this.specialStats.agility = data['agility'];
    //   this.specialStats.luck = data['luck'];
    // })
  }

}
