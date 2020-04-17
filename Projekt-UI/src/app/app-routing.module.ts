import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { PerkChartComponent } from './perk-chart/perk-chart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { IntroComponent } from './intro/intro.component';
import { DiceTrayComponent } from './dice-tray/dice-tray.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'perks', component: PerkChartComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'dice', component: DiceTrayComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }