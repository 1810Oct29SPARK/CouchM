import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/**
 * added above module to the module.ts to allow angular to recognize the use of ngModel in the app.component.html
 * must be imported below
 */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PerkChartComponent } from './perk-chart/perk-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    PerkChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] /** lists all the components it analyzes our index.html file */
})
export class AppModule { }
