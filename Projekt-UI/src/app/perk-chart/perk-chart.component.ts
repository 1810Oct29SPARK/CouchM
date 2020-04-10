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
