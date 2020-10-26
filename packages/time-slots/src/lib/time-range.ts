import { DateRange } from './date-range';
import { TimeInterval } from './time-interval';

export class TimeRange extends DateRange {
  /**
   * @param fromTime Time string in format `HH:mm:ss:ms`
   * @param toTime Time string in format `HH:mm:ss:ms`
   * @param date The day component of time range
   */
  static fromTimeStrings(fromTime: string, toTime: string, date?: Date) {
    const [fromHours, fromMins, fromSecs, fromMs] = this.parseTimeStr(fromTime);
    const [toHours, toMins, toSecs, toMs] = this.parseTimeStr(toTime);

    return this.fromTimeDates(
      new Date(0, 0, 0, fromHours, fromMins, fromSecs, fromMs),
      new Date(0, 0, 0, toHours, toMins, toSecs, toMs),
      date,
    );
  }

  /**
   * @param fromTime Time component of from range
   * @param toTime Time component of to range
   * @param date The date component of time range
   */
  static fromTimeDates(fromTime: Date, toTime: Date, date = new Date(0, 0, 0)) {
    return this.fromDates(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        fromTime.getHours(),
        fromTime.getMinutes(),
        fromTime.getSeconds(),
        fromTime.getMilliseconds(),
      ),
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        toTime.getHours(),
        toTime.getMinutes(),
        toTime.getSeconds(),
        toTime.getMilliseconds(),
      ),
    );
  }

  static fromDates(from: Date, to: Date) {
    return new TimeRange(from, to);
  }

  static fromTimeRange(timeRange: TimeRange) {
    return timeRange.clone();
  }

  /**
   * @param time Time string in format `HH:mm:ss:ms`
   */
  private static parseTimeStr(time: string) {
    const [hours, mins = 0, secs = 0, ms = 0] = time.split(':').map(Number);

    return [hours, mins, secs, ms] as const;
  }

  /**
   * Returns intervals for a day in the time range
   */
  createIntervalsFor(day: Date, interval: TimeInterval) {
    const intervalsCount = interval.takeIntervalsFrom(this) ?? 0;
    const intervals = new Array<TimeRange>(intervalsCount);

    for (let i = 0; i < intervalsCount; i++) {
      intervals[i] = TimeRange.fromTimeDates(
        interval.increment(this.from, i),
        interval.increment(this.from, i + 1, true),
        day,
      );
    }

    return intervals;
  }
}
