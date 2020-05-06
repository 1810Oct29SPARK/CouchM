import { Component, OnInit } from '@angular/core';
import { DiceRollService } from '../dice-roll.service';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CombatService } from './../combat.service';
import { Subscription } from 'rxjs';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DiceTrayComponent } from '../dice-tray/dice-tray.component';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  constructor(private dialog: MatDialog, private diceService: DiceRollService, private dataService: DataService, private fb: FormBuilder, private router: Router, private combatService: CombatService) {
    this.subscription = this.combatService.getMessage().subscribe(message => this.messageFromDice = message);
  }

  id = "";
  name = "";
  health;
  ranger;
  assault;
  defense;
  move;
  perks: Array<string>;

  userInfo = this.fb.group({
    id: '',
    name: '',
    health: 0,
    ranger: 0,
    assault: 0,
    defense: 0,
    move: 5,
    perks: []
  });

  wordsArray: Array<string> = ["Let's get you acquainted with how combat works."];

  enemyMap = new Map([]);

  // enemyMapKeys;

  orksArray: Array<Object> = [];

  orks: number = 0;

  subscription: Subscription;

  messageFromDice;

  combatMessage: string;

  enemyType: boolean = false;

  enemySelected: Object;

  // distanceBetween: number = 0;

  createOrk() {
    this.dataService.createOrk().subscribe(data => {
      let dbInfo = data.body;
      console.log(dbInfo);
      // this.distanceBetween = 15;
      if (this.orksArray.length === 0) {
        // this.wordsArray.push("An Ork has appeared " + this.distanceBetween + " meters away.");
        this.wordsArray.push("An Ork has appeared.");
      } else {
        // this.wordsArray.push("Another Ork has appeared " + this.distanceBetween + " meters away.");
        this.wordsArray.push("Another Ork has appeared.");
      }
      this.orksArray.push(dbInfo);
      this.enemyMap.set("Orks", this.orksArray);
      // this.enemyMapKeys = Array.from(this.enemyMap.keys());
      this.orks = this.orksArray.length;
      console.log(this.orksArray);
      // console.log(this.enemyMap.keys());
    });
  }

  getAllOrks() {
    this.dataService.getAllOrks().subscribe(data => {
      let dbInfo = data.body;
      console.log(dbInfo);
      this.orksArray.push(dbInfo);
      this.orks = this.orksArray.length;
    })
  }

  attack() {
    this.wordsArray.push("Select your target.");
    this.enemyType = true;
  }

  selectEnemy(target: Object) {
    console.log(target["name"]);
    this.wordsArray.push("You attack the " + target["name"] + ".");
    this.enemyType = false;
    if (target["name"] === 'Ork') {
      this.combatService.updateMessage("attack");
      console.log("Orks selected")
      this.enemySelected = target;
      console.log(this.enemySelected);
    }
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.height = '100%';
    // dialogConfig.width = '100%';
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.data = {
    //   values: 
    // }

    // const dialogRef = this.dialog.open(DiceTrayComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);


    // })
  }

  defend() {
    this.combatService.updateMessage("defend");
  }

  showMessageFromDice(message: any) {
    console.log(message)
    this.wordsArray.push("You dealt " + message + " damage.");
    // if (this.enemySelected["name"] === "Ork") {
    console.log(this.enemySelected)
    let damage = this.enemySelected["health"] - message;
    this.enemySelected["health"] = damage;
    console.log(this.orksArray[0]["health"]);
    if (this.enemySelected["health"] > 0) {
      console.log("ork health after attack: " + this.enemySelected["health"]);
      this.dataService.updateOrk(this.orksArray[0]).subscribe(data => {
        let dbData = data.body;
        console.log(dbData)
      })
      // this.wordsArray.push("");
    } else if (this.enemySelected["health"] <= 0) {
      console.log("Ork's health is depleted");
      this.dataService.deleteOrk(this.orksArray[0]).subscribe(data => {
        console.log(data);
      });
      this.orksArray = this.orksArray.splice(1, 1);
      this.orks = this.orksArray.length;
      console.log(this.orksArray.length);
      this.wordsArray.push("You've slain an enemy!");
    }

    // When dealing with multiple enemies of the same type, consider taking the roll over damage 
    // (when health is -1 after attacks, for example) and "adding" that to the health of the next enemy in the array

    // }
  }

  ngOnInit() {
    // console.log(this.distanceBetween)

    this.dataService.id.subscribe(id => this.id = id);
    this.dataService.name.subscribe(name => this.name = name);
    this.dataService.health.subscribe(health => this.health = health);
    this.dataService.ranger.subscribe(ranger => this.ranger = ranger);
    this.dataService.assault.subscribe(assault => this.assault = assault);
    this.dataService.defense.subscribe(defense => this.defense = defense);
    this.dataService.move.subscribe(move => this.move = move);
    this.dataService.perks.subscribe(perks => this.perks = perks);
    this.userInfo.setValue({
      id: this.id,
      name: this.name,
      health: this.health,
      ranger: this.ranger,
      assault: this.assault,
      defense: this.defense,
      move: this.move,
      perks: this.perks
    })

    console.log(this.userInfo.value);

    if (this.userInfo.value.name === 'Traveler') {
      this.dataService.createUser(this.userInfo.value).subscribe(data => {
        let dbInfo = data.body;
        console.log(dbInfo)
        this.id = dbInfo['id'];
        this.name = dbInfo['name'];
        this.health = dbInfo['health'];
        this.ranger = dbInfo['ranger'];
        this.assault = dbInfo['assault'];
        this.defense = dbInfo['defense'];
        this.move = dbInfo['move'];
        this.perks = dbInfo['perks'];
      })
      this.name = this.userInfo.value.name;
    }


    setTimeout(() => {
      this.wordsArray.push("Generate an opponent with the 'Ork' button on the right.")
    }, 1000);
  }

}
