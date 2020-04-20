/**
 * this file is being referenced by the app.module.ts as what should be recognized by Angular at start up
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from './route.animations';

@Component({
  selector: 'app-root', /** the selector is how Angular can take the entire component and insert it into another html file*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeAnimation
  ]
})

export class AppComponent {

  constructor() { }

  ngOnInit() {

  }

  pageTransition(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
