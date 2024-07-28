import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculator-component',
  templateUrl: './age-calculator-component.component.html',
  styleUrl: './age-calculator-component.component.scss',
})
export class AgeCalculatorComponentComponent {
  public startMonth: string = 'Jan';
  public startDay: number = 1;
  public startYear: number = 2024;
  public startDayList: number[] = [];
  public endDay: number = 5;
  public endMonth: string = 'Jan';
  public endYear: number = 2024;
  public endMonthList: number[] = [];
  public monthsList: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  public validationMessage: string = '';
  public isShowResult: boolean = false;
  // Result properties
  public ageInYears: string = '';
  public ageInMonths: string = '';
  public ageInWeeks: string = '';
  public ageInDays: string = '';
  public ageInHours: string = '';
  public ageInMinutes: string = '';
  public ageInSeconds: string = '';
  constructor() {
    this.createMonthDays('START');
    this.createMonthDays('END');
  }
  createMonthDays(from: string) {
    if (from === 'START') {
      let year =
        this.startYear && ('' + this.startYear).length !== 4
          ? 2024
          : this.startYear;
      const monthIndex = this.monthsList.findIndex(
        (month) => month === this.startMonth
      );
      const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
      this.startDayList = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    } else {
      let year =
        this.endYear && ('' + this.endYear).length !== 4 ? 2024 : this.endYear;
      const monthIndex = this.monthsList.findIndex(
        (month) => month === this.endMonth
      );
      const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
      this.endMonthList = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    }
  }
  calculateAge() {
    const startDate = new Date(
      `${this.startMonth} ${this.startDay}, ${this.startYear}`
    );
    const endDate = new Date(
      `${this.endMonth} ${this.endDay}, ${this.endYear}`
    );

    if (!this.startMonth || !this.startDay || !this.startYear || !this.endMonth || !this.endDay || !this.endYear) {
      this.validationMessage = "All fields must be filled out.";
      this.isShowResult = false;
      return;
    }
    if (startDate > new Date()) {
      this.validationMessage = "Date of birth cannot be a future date.";
      this.isShowResult = false;
      return;
    }
    if (endDate < startDate) {
      this.validationMessage = "End date must be after start date.";
      this.isShowResult = false;
      return;
    }

    this.validationMessage = '';
    this.isShowResult = true;

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const totalWeeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;
    const totalMonths = years * 12 + months;
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;

    // Update result properties
    this.ageInYears = `${years} years ${months} months ${days} days`;
    this.ageInMonths = `${totalMonths} months ${days} days`;
    this.ageInWeeks = `${totalWeeks} weeks ${remainingDays} days`;
    this.ageInDays = `${totalDays} days`;
    this.ageInHours = `${totalHours} hours`;
    this.ageInMinutes = `${totalMinutes} minutes`;
    this.ageInSeconds = `${totalSeconds} seconds`;
  }

  clearFields() {
    this.startMonth = 'Jan';
    this.startDay = 1;
    this.startYear = 2024;
    this.endMonth = 'Jan';
    this.endDay = 5;
    this.endYear = 2024;
    this.createMonthDays('START');
    this.createMonthDays('END');
    this.ageInYears = '';
    this.ageInMonths = '';
    this.ageInWeeks = '';
    this.ageInDays = '';
    this.ageInHours = '';
    this.ageInMinutes = '';
    this.ageInSeconds = '';
    this.isShowResult = false;
  }
}
