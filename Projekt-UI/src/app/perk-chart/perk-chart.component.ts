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
  perks: Array<string>;

  userInfo = this.fb.group({
    id: '',
    name: '',
    ranger: 0,
    assault: 0,
    defense: 0,
    perks: []
  });

  selectedPerks: string[] = [];

  description: string = "Hover over perks to learn their benefits";

  perkButton: string = "Submit";

  lvlTwoRan: boolean = false;
  lvlTwoAss: boolean = false;
  lvlTwoDef: boolean = false;
  lvlThreeRan: boolean = false;
  lvlThreeAss: boolean = false;
  lvlThreeDef: boolean = false;
  lvlFourRan: boolean = false;
  lvlFourAss: boolean = false;
  lvlFourDef: boolean = false;

  onHover(string) {
    if (string === 'RP1') {
      this.description = 'Ranger Perk level 1';
    }
    if (string === 'AP1') {
      this.description = 'Assault Perk level 1';
    }
    if (string === 'DP1') {
      this.description = 'Defense Perk level 1';
    }
    if (string === 'RP2') {
      this.description = 'Ranger Perk level 2';
    }
    if (string === 'AP2') {
      this.description = 'Assault Perk level 2';
    }
    if (string === 'DP2') {
      this.description = 'Defense Perk level 2';
    }
    if (string === 'RP3') {
      this.description = 'Ranger Perk level 3';
    }
    if (string === 'AP3') {
      this.description = 'Assault Perk level 3';
    }
    if (string === 'DP3') {
      this.description = 'Defense Perk level 3';
    }
    if (string === 'RP4') {
      this.description = 'Ranger Perk level 4';
    }
    if (string === 'AP4') {
      this.description = 'Assault Perk level 4';
    }
    if (string === 'DP4') {
      this.description = 'Defense Perk level 4';
    }
  }

  offHover() {
    // this.description = "Hover over perks to learn their benefits";
  }

  choosePerk(perk) {
    if (this.selectedPerks.includes(perk)) {
      this.selectedPerks.splice(this.selectedPerks.indexOf(perk), 1);
    } else {
      if (this.selectedPerks.length < 3) {
        this.selectedPerks.push(perk);
      }
    }
  }

  checkStats() {
    if (this.userInfo.value.ranger > 1) {
      this.lvlTwoRan = true;
    }
    if (this.userInfo.value.assault > 1) {
      this.lvlTwoAss = true;
    }
    if (this.userInfo.value.defense > 1) {
      this.lvlTwoDef = true;
    }
    if (this.userInfo.value.ranger > 2) {
      this.lvlThreeRan = true;
    }
    if (this.userInfo.value.assault > 2) {
      this.lvlThreeAss = true;
    }
    if (this.userInfo.value.defense > 2) {
      this.lvlThreeDef = true;
    }
    if (this.userInfo.value.ranger > 3) {
      this.lvlFourRan = true;
    }
    if (this.userInfo.value.assault > 3) {
      this.lvlFourAss = true;
    }
    if (this.userInfo.value.defense > 3) {
      this.lvlFourDef = true;
    }
  } 
  
  enterUserPerks() {
    this.perkButton = "Let's Continue";
    this.userInfo.value.perks = this.selectedPerks;
    console.log(this.userInfo.value);
    this.dataService.userStats(this.userInfo.value).subscribe(data => {
      let dbInfo = data.body;
      this.id = dbInfo['id'];
      this.ranger = dbInfo['ranger'];
      this.assault = dbInfo['assault'];
      this.defense = dbInfo['defense'];
      this.perks = dbInfo['perks'];
      this.changeUserInfo();
    })
    setTimeout(() => {
      this.router.navigateByUrl('/perks');
    }, 2000);
  }

  changeUserInfo() {
    this.dataService.changeUserId(this.id);
    this.dataService.changeUserName(this.traveler);
    this.dataService.changeUserRan(this.ranger);
    this.dataService.changeUserAss(this.assault);
    this.dataService.changeUserDef(this.defense);
    this.dataService.changeUserPerks(this.perks);
  }

  ngOnInit() {

    this.dataService.id.subscribe(id => this.id = id);
    this.dataService.traveler.subscribe(name => this.traveler = name);
    this.dataService.ranger.subscribe(ranger => this.ranger = ranger);
    this.dataService.assault.subscribe(assault => this.assault = assault);
    this.dataService.defense.subscribe(defense => this.defense = defense);
    this.dataService.perks.subscribe(perks => this.perks = perks);
    this.userInfo.setValue({
      id: this.id,
      name: this.traveler,
      ranger: this.ranger,
      assault: this.assault,
      defense: this.defense,
      perks: this.perks
    })

    console.log(this.userInfo.value);
    this.checkStats();
  }

}
