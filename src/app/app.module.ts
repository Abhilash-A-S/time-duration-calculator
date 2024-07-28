import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModuleList } from './material-module';
import { HeaderComponent } from './component/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TimeDurationComponentComponent } from './component/time-duration-component/time-duration-component.component';
import { DateCalculatorComponentComponent } from './component/date-calculator-component/date-calculator-component.component';
import { AgeCalculatorComponentComponent } from './component/age-calculator-component/age-calculator-component.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './component/footer/footer.component';
import { TimeDurationPageComponent } from './pages/time-duration-page/time-duration-page.component';
import { TimeDurationComponentTimeComponent } from './component/time-duration-component-time/time-duration-component-time.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ValidateInputDirective } from './directive/validate-input.directive';
import { AgeCalculatorPageComponent } from './pages/age-calculator-page/age-calculator-page.component';
import { TimeCalculatorPageComponent } from './pages/time-calculator-page/time-calculator-page.component';
import { TimeCalculatorExpressionComponent } from './component/time-calculator-expression/time-calculator-expression.component';
import { VerticalPanelComponent } from './component/vertical-panel/vertical-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    TimeDurationComponentComponent,
    DateCalculatorComponentComponent,
    AgeCalculatorComponentComponent,
    FooterComponent,
    TimeDurationPageComponent,
    TimeDurationComponentTimeComponent,
    ValidateInputDirective,
    AgeCalculatorPageComponent,
    TimeCalculatorPageComponent,
    TimeCalculatorExpressionComponent,
    VerticalPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModuleList,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
