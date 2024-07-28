import { Component } from '@angular/core';

@Component({
  selector: 'app-time-calculator-expression',
  templateUrl: './time-calculator-expression.component.html',
  styleUrl: './time-calculator-expression.component.scss',
})
export class TimeCalculatorExpressionComponent {
  expression: string = '2d 3h 45m 12s + 1h 20s - 1850s';
  finalResult: any = null;
  isShowResult = false;
  enteredExpression: string[] = [];
  intermediateResults: string[] = [];
  public errorMessage: string = '';
  calculate(): void {
    this.errorMessage = '';
    this.isShowResult = false;
    // const operations = this.expression.split(/\s+(?=[+-])/); // Split by + or - and keep the delimiter
    let totalSeconds = 0;
    this.intermediateResults = [];
    // Validate the input expression
    const operations = this.expression.match(/([+-]?\s*\d+[dhms])/g);
    if (
      !operations ||
      operations.join(' ').replace(/\s+/g, '') !==
        this.expression.replace(/\s+/g, '')
    ) {
      this.errorMessage =
        'Invalid input. Please enter a valid time expression.';
      return;
    }
    this.enteredExpression = this.expression.split(/\s*(?=[+-])\s*/);
    operations.forEach((op, index) => {
      const sign = index !== 0 ? (op[0] === '-' ? '-' : '+') : ' ';
      const valueInSeconds = this.parseTime(op.slice(sign === '-' ? 1 : 0));
      const delta = (sign === '-' ? -1 : 1) * valueInSeconds;
      totalSeconds += delta;
      const intermediateDays = Math.floor(totalSeconds / (24 * 3600));
      const intermediateHours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
      const intermediateMinutes = Math.floor((totalSeconds % 3600) / 60);
      const intermediateSeconds = totalSeconds % 60;

      this.intermediateResults.push(
        `${sign} ${Math.abs(intermediateDays)}d ${Math.abs(
          intermediateHours
        )}h ${Math.abs(intermediateMinutes)}m ${Math.abs(intermediateSeconds)}s`
      );
    });

    const finalDays = Math.floor(totalSeconds / (24 * 3600));
    const finalHours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const finalMinutes = Math.floor((totalSeconds % 3600) / 60);
    const finalSeconds = totalSeconds % 60;

    const detailed = `${finalDays}d ${finalHours}h ${finalMinutes}m ${finalSeconds}s`;
    const totalDays = totalSeconds / (24 * 3600);
    const totalHours = totalSeconds / 3600;
    const totalMinutes = totalSeconds / 60;

    this.finalResult = {
      detailed,
      days: totalDays.toFixed(6),
      hours: totalHours.toFixed(5),
      minutes: totalMinutes.toFixed(3),
      seconds: totalSeconds,
    };
    this.isShowResult = true;
  }

  clear(): void {
    this.expression = '';
    this.finalResult = null;
    this.intermediateResults = [];
  }

  private parseTime(timeString: string): number {
    const timeRegex = /(\d+)([dhms])/g;
    let match;
    let totalSeconds = 0;

    while ((match = timeRegex.exec(timeString)) !== null) {
      const value = parseInt(match[1], 10);
      const unit = match[2];

      switch (unit) {
        case 'd':
          totalSeconds += value * 24 * 3600;
          break;
        case 'h':
          totalSeconds += value * 3600;
          break;
        case 'm':
          totalSeconds += value * 60;
          break;
        case 's':
          totalSeconds += value;
          break;
      }
    }

    return totalSeconds;
  }
  clearTime() {
    this.errorMessage = '';
    this.expression = '2d 3h 45m 12s + 1h 20s - 1850s';
    this.isShowResult = false;
  }
}
