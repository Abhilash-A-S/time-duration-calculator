import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeDurationPageComponent } from './pages/time-duration-page/time-duration-page.component';
import { AgeCalculatorPageComponent } from './pages/age-calculator-page/age-calculator-page.component';
import { TimeCalculatorPageComponent } from './pages/time-calculator-page/time-calculator-page.component';

const routes: Routes = [
  { path: '',
     component: TimeDurationPageComponent },
  { path: 'agecalculator', 
    component: AgeCalculatorPageComponent },
  {
    path: 'time-duration-calculator',
    component: TimeDurationPageComponent,
  },
  { path: 'time-calculator',
     component: TimeCalculatorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
