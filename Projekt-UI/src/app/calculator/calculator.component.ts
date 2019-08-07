import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calculator', /** it is possible to use [app-calculator] to reference this component as an attribute of a div,
  as well as putting a . in front to use as a class within a div to achieve the same result as adding the app-calculator tag in
  the app.component.html */
  templateUrl: './calculator.component.html', /** it is possible to use `<html-tags></html-tags>` to achieve the same effect, as long as the html is not extensive */
  styleUrls: ['./calculator.component.css'] /** the same above can be done here by removing "Urls" from the variable name, and simply writing
  css code within backticks */
})
export class CalculatorComponent implements OnInit {

  constructor(private dataService: DataService) { }

  specialStats = {
    strength: 1,
    perception: 1,
    endurance: 1,
    charisma: 1,
    intelligence: 1,
    agility: 1,
    luck: 1
  }

  addStr(){
    this.specialStats.strength += 1;
  }

  subStr(){
    this.specialStats.strength -= 1;
  }

  ngOnInit() {



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
