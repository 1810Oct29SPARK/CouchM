/**
 * this file is being referenced by the app.module.ts as what should be recognized by Angular at start up
 */

import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root', /** the selector is how Angular can take the entire component and insert it into another html file*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  userInfo = {
    id: 0,
    name: '',
    strength: 0,
    perception: 0,
    endurance: 0,
    charisma: 0,
    intelligence: 0,
    agility: 0,
    luck: 0
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      // console.log(data)
      this.userInfo.id = data['id'];
      this.userInfo.name = data['name'];
      this.userInfo.strength = data['strength'];
      this.userInfo.perception = data['perception'];
      this.userInfo.endurance = data['endurance'];
      this.userInfo.charisma = data['charisma'];
      this.userInfo.intelligence = data['intelligence'];
      this.userInfo.agility = data['agility'];
      this.userInfo.luck = data['luck'];
      console.log(this.userInfo);
    })
  }
}
