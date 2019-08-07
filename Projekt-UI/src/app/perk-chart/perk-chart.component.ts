import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-perk-chart',
  templateUrl: './perk-chart.component.html',
  styleUrls: ['./perk-chart.component.css']
})
export class PerkChartComponent implements OnInit {

  constructor(private dataService: DataService) { }

  userInfo = {
    strength: 0,
    perception: 0,
    endurance: 0,
    charisma: 0,
    intelligence: 0,
    agility: 0,
    luck: 0
  }

  getUserInfo() {
    this.dataService.getData().subscribe(data => {
      this.userInfo.strength = data['strength'];
      this.userInfo.perception = data['perception'];
      this.userInfo.endurance = data['endurance'];
      this.userInfo.charisma = data['charisma'];
      this.userInfo.intelligence = data['intelligence'];
      this.userInfo.agility = data['agility'];
      this.userInfo.luck = data['luck'];
    })
  }

  ngOnInit() {
    
  }

}
