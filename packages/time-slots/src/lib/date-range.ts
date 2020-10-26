import { getDateAdapter } from './date-adapter';

export class DateRange {
  /**
   * @param from ISO Date string
   * @param to ISO Date string
   */
  static fromStrings(from: string, to: string) {
    return this.fromDates(new Date(from), new Date(to));
  }

  static fromDates(from: Date, to: Date) {
    return new DateRange(from, to);
  }

  static fromDateRange(dateRange: DateRange) {
    return dateRange.clone();
  }

  constructor(public readonly from: Date, public readonly to: Date) {
    if (to < from) {
      throw new Error(`DateRange: Date to is smaller than date from!
      From: ${from}
      To: ${to}`);
    }
  }

  clone() {
    return new DateRange(new Date(this.from), new Date(this.to));
  }

  /**
   * Returns array of days dates in the range
   */
  takeDays() {
    return this.takeDates(
      () => getDateAdapter().differenceInDays(this.to, this.from),
      (i) => getDateAdapter().addDays(this.from, i),
    );
  }

  intersectsWith(range: DateRange) {
    const ourFromTime = this.from.getTime();
    const ourToTime = this.to.getTime();
    const theirFromTime = range.from.getTime();
    const theirToTime = range.to.getTime();

    return (
      (ourFromTime <= theirFromTime && ourToTime >= theirFromTime) ||
      (ourFromTime >= theirFromTime && ourFromTime <= theirToTime)
    );
  }

  protected takeDates(
    countExtractor: () => number,
    dateTaker: (n: number) => Date,
  ): Date[] {
    const count = countExtractor();
    const dates = new Array<Date>(count + 1);

    for (let i = 0; i <= count; i++) {
      dates[i] = dateTaker(i);
    }

    return dates;
  }
}
