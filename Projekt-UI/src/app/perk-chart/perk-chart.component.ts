import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perk-chart',
  templateUrl: './perk-chart.component.html',
  styleUrls: ['./perk-chart.component.css']
})
export class PerkChartComponent implements OnInit {

  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router) { }

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
    this.userInfo.setValue({
      id: this.id,
      name: this.traveler,
      strength: this.strength,
      perception: this.perception,
      endurance: this.endurance,
      charisma: this.charisma,
      intelligence: this.intelligence,
      agility: this.agility,
      luck: this.luck
    })

    console.log(this.userInfo.value);

  }

}
