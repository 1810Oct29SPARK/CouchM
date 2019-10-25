import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  // ViewChild(WelcomeComponent) welcome: WelcomeComponent;

  ngOnInit() {

  }

}
