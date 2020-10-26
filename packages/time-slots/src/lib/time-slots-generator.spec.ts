import { dateFnsAdapter } from 'packages/time-slots/date-adapter/date-fns';

import { provideDateAdapter } from './date-adapter';
import { DateRange } from './date-range';
import { TimeInterval } from './time-interval';
import { TimeRange } from './time-range';
import { generateTimeSlots } from './time-slots-generator';

describe('generateTimeSlots() function', () => {
  beforeAll(() => provideDateAdapter(dateFnsAdapter));

  it('should return array of one `TimeRange` for each day between dates within time range', () => {
    expect(
      generateTimeSlots(
        DateRange.fromDates(new Date(2020, 10, 15), new Date(2020, 10, 20)),
        TimeRange.fromTimeStrings('9:01:01:01', '17:30:59:59'),
      ),
    ).toEqual([
      TimeRange.fromDates(
        new Date(2020, 10, 15, 9, 1, 1, 1),
        new Date(2020, 10, 15, 17, 30, 59, 59),
      ),
      TimeRange.fromDates(
        new Date(2020, 10, 16, 9, 1, 1, 1),
        new Date(2020, 10, 16, 17, 30, 59, 59),
      ),
      TimeRange.fromDates(
        new Date(2020, 10, 17, 9, 1, 1, 1),
        new Date(2020, 10, 17, 17, 30, 59, 59),
      ),
      TimeRange.fromDates(
        new Date(2020, 10, 18, 9, 1, 1, 1),
        new Date(2020, 10, 18, 17, 30, 59, 59),
      ),
      TimeRange.fromDates(
        new Date(2020, 10, 19, 9, 1, 1, 1),
        new Date(2020, 10, 19, 17, 30, 59, 59),
      ),
      TimeRange.fromDates(
        new Date(2020, 10, 20, 9, 1, 1, 1),
        new Date(2020, 10, 20, 17, 30, 59, 59),
      ),
    ]);
  });

  describe('with time interval', () => {
    it('should return array of `TimeRange`s for each day between dates within time range', () => {
      expect(
        generateTimeSlots(
          DateRange.fromDates(new Date(2020, 10, 15), new Date(2020, 10, 16)),
          TimeRange.fromTimeStrings('10:00', '13:00'),
          TimeInterval.minutes(30),
        ),
      ).toEqual([
        TimeRange.fromDates(
          new Date(2020, 10, 15, 10),
          new Date(2020, 10, 15, 10, 29, 59),
        ),
        TimeRange.fromDates(
          new Date(2020, 10, 15, 10, 30),
          new Date(2020, 10, 15, 10, 59, 59),
        ),
        TimeRange.fromDates(
          new Date(2020, 10, 15, 11),
          new Date(2020, 10, 15, 11, 29, 59),
        ),
        TimeRange.fromDates(
          new Date(2020, 10, 15, 11, 30),
          new Date(2020, 10, 15, 11, 59, 59),
        ),
        TimeRange.fromDates(
          new Date(2020, 10, 15, 12),
          new Date(2020, 10, 15, 12, 29, 59),
        ),
        TimeRange.fromDates(
          new Date(2020, 10, 15, 12, 30),
          new Date(2020, 10, 15, 12, 59, 59),
        ),

        TimeRange.fromDates(
          new Date(2020, 10, 16, 10),
          new Date(2020, 10, 16, 10, 29, 59),
        ),
        TimeRange.fromDates(
          new Date(2020, 10, 16, 10, 30),
          new Date(2020, 10, 16, 10, 59, 59),
        ),
        TimeRange.fromDates(
          new Date(2020, 10, 16, 11),
          new Date(2020, 10, 16, 11, 29, 59),
        ),
        TimeRange.fromDates(
          new Date(2020, 10, 16, 11, 30),
          new Date(2020, 10, 16, 11, 59, 59),
        ),
        TimeRange.fromDates(
          new Date(2020, 10, 16, 12),
          new Date(2020, 10, 16, 12, 29, 59),
        ),
        TimeRange.fromDates(
          new Date(2020, 10, 16, 12, 30),
          new Date(2020, 10, 16, 12, 59, 59),
        ),
      ]);
    });
  });
});
