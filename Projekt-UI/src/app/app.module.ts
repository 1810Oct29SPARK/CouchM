import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';
/**
 * added above module to the module.ts to allow angular to recognize the use of ngModel in the app.component.html
 * must be imported below
 */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PerkChartComponent } from './perk-chart/perk-chart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { IntroComponent } from './intro/intro.component';
import { DiceTrayComponent } from './dice-tray/dice-tray.component';
import { CombatComponent } from './combat/combat.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    PerkChartComponent,
    WelcomeComponent,
    IntroComponent,
    DiceTrayComponent,
    CombatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent] /** lists all the components it analyzes our index.html file */
})
export class AppModule { }
