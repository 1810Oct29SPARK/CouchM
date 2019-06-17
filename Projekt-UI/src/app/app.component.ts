/**
 * this file is being referenced by the app.module.ts as what should be recognized by Angular at start up
 */

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root', /** the selector is how Angular can take the entire component and insert it into another html file*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  playerData: any[];

  constructor(private http: HttpClient) { }
  
  // showData() {
  //   this.http.getData().subscribe(
  //     (data:any[]) => this.playerData = data
  //   )
  // }

  allUserData = 'http://localhost:8085/user/all';

  getData(){
    return this.http.get(this.allUserData)
    .subscribe(
      (data: any[]) => this.playerData = data
    )
  }

  ngOnInit() {
    console.log(this.playerData);
  }
  
  name;
}
