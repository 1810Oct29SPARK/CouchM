import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-perk-chart',
  templateUrl: './perk-chart.component.html',
  styleUrls: ['./perk-chart.component.css']
})
export class PerkChartComponent implements OnInit {

  constructor(private dataService: DataService) { }

  specialStats = {
    strength: 0,
    perception: 0,
    endurance: 0,
    charisma: 0,
    intelligence: 0,
    agility: 0,
    luck: 0
  }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.specialStats.strength = data['strength'];
      this.specialStats.perception = data['perception'];
      this.specialStats.endurance = data['endurance'];
      this.specialStats.charisma = data['charisma'];
      this.specialStats.intelligence = data['intelligence'];
      this.specialStats.agility = data['agility'];
      this.specialStats.luck = data['luck'];
    })
  }

}
