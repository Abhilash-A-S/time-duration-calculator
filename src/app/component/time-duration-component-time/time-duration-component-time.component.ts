import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-time-duration-component-time',
  templateUrl: './time-duration-component-time.component.html',
  styleUrl: './time-duration-component-time.component.scss',
})
export class TimeDurationComponentTimeComponent {
  public isMobile: boolean = false;
  public startMonth: string = 'Jan';
  public startDay: number = 1;
  public startYear: number = 2024;
  public startHours: number = 10;
  public startMinutes: number = 12;
  public startSeconds: number = 12;
  public startPeriod: string = 'AM';
  public startDayList: number[] = [];

  public endMonth: string = 'Jan';
  public endDay: number = 1;
  public endYear: number = 2024;
  public endHours: number = 12;
  public endMinutes: number = 1;
  public endSeconds: number = 1;
  public endPeriod: string = 'AM';
  public endMonthList: number[] = [];
  public formattedStartTime: string | undefined;
  public formattedEndTime: string | undefined;
  public result: boolean = false;
  public durationResult: any;
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
  public resultTextMessage: string = '';
  public resultText: string = '';
  public daysText: string = '';
  public hoursText: string = '';
  public minutesText: string = '';
  public secondsText: string = '';
  public isShowResult: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.createMonthDays('START');
    this.createMonthDays('END');
  }
  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
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
  convertTo24Hour(hours: number, period: string): number {
    if (period === 'PM' && hours < 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    return hours;
  }
  calculateDuration() {
    this.isShowResult = false;
    this.validationMessage = '';
    if (
      !this.startMonth ||
      !this.startDay ||
      !this.startYear ||
      !this.startHours ||
      !this.startMinutes ||
      !this.startSeconds ||
      !this.startPeriod
    ) {
      this.validationMessage =
        'Please fill in all the start date and time fields.';
      return;
    }
    if (
      !this.endMonth ||
      !this.endDay ||
      !this.endYear ||
      !this.endHours ||
      !this.endMinutes ||
      !this.endSeconds ||
      !this.endPeriod
    ) {
      this.validationMessage =
        'Please fill in all the end date and time fields.';
      return;
    }
    const startDate = new Date(
      `${this.startMonth} ${this.startDay}, ${
        this.startYear
      } ${this.convertTo24Hour(this.startHours, this.startPeriod)}:${
        this.startMinutes
      }:${this.startSeconds}`
    );
    const endDate = new Date(
      `${this.endMonth} ${this.endDay}, ${this.endYear} ${this.convertTo24Hour(
        this.endHours,
        this.endPeriod
      )}:${this.endMinutes}:${this.endSeconds}`
    );
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      this.validationMessage = 'The entered start or end date-time is invalid.';
      return;
    }
    const durationMs = endDate.getTime() - startDate.getTime();
    if (durationMs < 0) {
      this.validationMessage = 'End time must be after start time';
      return;
    }

    const seconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;
    this.resultTextMessage = `
      The time between ${this.startMonth}. ${this.startDay}, ${this.startYear}, ${this.startHours}:${this.startMinutes}:${this.startSeconds} ${this.startPeriod} and 
      ${this.endMonth}. ${this.endDay}, ${this.endYear}, ${this.endHours}:${this.endMinutes}:${this.endSeconds} ${this.endPeriod} is:`;

    this.resultText = `${days} day${
      days !== 1 ? 's' : ''
    }, ${remainingHours} hour${
      remainingHours !== 1 ? 's' : ''
    }, ${remainingMinutes} minute${
      remainingMinutes !== 1 ? 's' : ''
    }, and ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}
    `;
    this.daysText = `${(durationMs / (1000 * 60 * 60 * 24)).toFixed(6)} day`;
    this.hoursText = `${hours} hours`;
    this.minutesText = `${minutes} minutes`;
    this.secondsText = `${seconds} seconds`;
    this.isShowResult = true;
  }
  clearForm() {
    this.validationMessage = '';
    this.resultTextMessage = '';
    this.resultText = '';
    this.daysText = '';
    this.hoursText = '';
    this.minutesText = '';
    this.secondsText = '';
    this.isShowResult = false;
  }
}
