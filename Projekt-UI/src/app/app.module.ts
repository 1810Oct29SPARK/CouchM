import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/**
 * added above module to the module.ts to allow angular to recognize the use of ngModel in the app.component.html
 * must be imported below
 */

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PerkChartComponent } from './perk-chart/perk-chart.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'perks', component: PerkChartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    PerkChartComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent] /** lists all the components it analyzes our index.html file */
})
export class AppModule { }
