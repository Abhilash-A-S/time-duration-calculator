import { Component } from '@angular/core';
import { TimeDuration } from '../../model/time-duration';
import { TimeDurationService } from '../../services/time-duration.service';

@Component({
  selector: 'app-time-duration-component',
  templateUrl: './time-duration-component.component.html',
  styleUrl: './time-duration-component.component.scss',
})
export class TimeDurationComponentComponent {
  constructor(private timeDurationService: TimeDurationService) {}
  public endTime: TimeDuration = {
    startPeriod: 'AM',
    hours: 9,
    minutes: 20,
    second: 30,
  } as TimeDuration;
  public startTime: TimeDuration = {
    startPeriod: 'AM',
    hours: 8,
    minutes: 20,
    second: 30,
  } as TimeDuration;
  public isShowResult: boolean = false;
  public formattedStartTime: string = '';
  public formattedEndTime: string = '';
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;
  public decimalHours: number = 0;
  public totalMinutes: number = 0;
  public totalSeconds: number = 0;
  public errorMessage: string = '';
  public calculateDuration() {
    this.isShowResult = false;
    this.errorMessage = '';
    if (!this.timeDurationService.isValidTime(this.startTime)) {
      this.errorMessage = 'Please enter a valid start time';
      return;
    }
    if (!this.timeDurationService.isValidTime(this.endTime)) {
      this.errorMessage = 'Please enter a valid end time';
      return;
    }
    const start24Hours = this.timeDurationService.convertTo24Hour({
      ...this.startTime,
    });
    const end24Hours = this.timeDurationService.convertTo24Hour({
      ...this.endTime,
    });
    let duration = (end24Hours - start24Hours) / 1000;
    if (duration < 0) {
      duration += 24 * 3600; // add 24 hours in seconds if end time is on the next day
    }

    this.hours = Math.floor(duration / 3600);
    duration %= 3600;
    this.minutes = Math.floor(duration / 60);
    this.seconds = duration % 60;
    this.isShowResult = true;
    this.formattedStartTime = this.timeDurationService.formatTime({
      ...this.startTime,
    });
    this.formattedEndTime = this.timeDurationService.formatTime({
      ...this.endTime,
    });
    this.decimalHours = Math.floor(
      this.hours + this.minutes / 60 + this.seconds / 3600
    );
    this.totalMinutes = Math.floor(this.hours * 60 + this.minutes);
    this.totalSeconds = Math.floor(
      this.hours * 3600 + this.minutes * 60 + this.seconds
    );
  }
  public clearButtonClick() {
    this.endTime = { startPeriod: 'AM' } as TimeDuration;
    this.startTime = { startPeriod: 'AM' } as TimeDuration;
  }
}
