import { Injectable } from '@angular/core';
import { TimeDuration } from '../model/time-duration';

@Injectable({
  providedIn: 'root',
})
export class TimeDurationService {
  constructor() {}
  formatTime(timeInfo: TimeDuration): string {
    return `${timeInfo.hours.toString().padStart(2, '0')}:${timeInfo.minutes
      .toString()
      .padStart(2, '0')}:${timeInfo.second.toString().padStart(2, '0')} ${
      timeInfo.startPeriod
    }`;
  }
  convertTo24Hour(timeInfo: TimeDuration): number {
    if (timeInfo.startPeriod === 'PM' && timeInfo.hours !== 12) {
      timeInfo.hours += 12;
    } else if (timeInfo.startPeriod === 'AM' && timeInfo.hours === 12) {
      timeInfo.hours = 0;
    }
    return new Date(
      1970,
      0,
      1,
      timeInfo.hours,
      timeInfo.minutes,
      timeInfo.second
    ).getTime();
  }
  isValidTime(timeInfo: TimeDuration): boolean {
    if (
      timeInfo.hours === null ||
      !timeInfo.minutes === null ||
      !timeInfo.second === null
    ) {
      return false;
    }
    return (
      timeInfo.hours >= 0 &&
      timeInfo.hours <= 12 &&
      timeInfo.minutes >= 0 &&
      timeInfo.minutes < 60 &&
      timeInfo.second >= 0 &&
      timeInfo.second < 60
    );
  }
}
