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
  ranger;
  assault;
  defense;

  userInfo = this.fb.group({
    id: '',
    name: '',
    ranger: 0,
    assault: 0,
    defense: 0
  });

  selectedPerks: string[] = [];

  lvlTwoRan: boolean = false;
  lvlTwoAss: boolean = false;
  lvlTwoDef: boolean = false;
  lvlThreeRan: boolean = false;
  lvlThreeAss: boolean = false;
  lvlThreeDef: boolean = false;
  lvlFourRan: boolean = false;
  lvlFourAss: boolean = false;
  lvlFourDef: boolean = false;

  choosePerk(perk) {
    if (this.selectedPerks.includes(perk)) {
      this.selectedPerks.splice(this.selectedPerks.indexOf(perk), 1);
      console.log(this.selectedPerks);
    } else {
      this.selectedPerks.push(perk);
      console.log(this.selectedPerks);
    }
  }

  checkStats() {
    if (this.userInfo.value.ranger > 1) {
      this.lvlTwoRan = true;
      console.log(this.lvlTwoRan);
    }
    if (this.userInfo.value.assault > 1) {
      this.lvlTwoAss = true;
      console.log(this.lvlTwoAss);
    }
    if (this.userInfo.value.defense > 1) {
      this.lvlTwoDef = true;
      console.log(this.lvlTwoDef);
    }
    if (this.userInfo.value.ranger > 2) {
      this.lvlThreeRan = true;
      console.log(this.lvlThreeRan);
    }
    if (this.userInfo.value.assault > 2) {
      this.lvlThreeAss = true;
      console.log(this.lvlThreeAss);
    }
    if (this.userInfo.value.defense > 2) {
      this.lvlThreeDef = true;
      console.log(this.lvlThreeDef);
    }
    if (this.userInfo.value.ranger > 3) {
      this.lvlFourRan = true;
      console.log(this.lvlFourRan);
    }
    if (this.userInfo.value.assault > 3) {
      this.lvlFourAss = true;
      console.log(this.lvlFourAss);
    }
    if (this.userInfo.value.defense > 3) {
      this.lvlFourDef = true;
      console.log(this.lvlFourDef);
    }
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
    this.checkStats();
  }

}
