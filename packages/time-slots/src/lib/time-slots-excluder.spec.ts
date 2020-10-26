import { TimeRange } from './time-range';
import { excludeTimeSlots } from './time-slots-excluder';

describe('excludeTimeSlots() function', () => {
  it('should exclude specified time slots', () => {
    expect(
      excludeTimeSlots(
        [
          TimeRange.fromTimeStrings('10:00', '10:29', new Date(2020, 10, 15)),
          TimeRange.fromTimeStrings('10:30', '10:59', new Date(2020, 10, 15)),
          TimeRange.fromTimeStrings('11:00', '11:29', new Date(2020, 10, 15)),
          TimeRange.fromTimeStrings('11:30', '11:59', new Date(2020, 10, 15)),
          TimeRange.fromTimeStrings('12:00', '12:29', new Date(2020, 10, 15)),
          TimeRange.fromTimeStrings('12:30', '12:59', new Date(2020, 10, 15)),

          TimeRange.fromTimeStrings('10:00', '10:29', new Date(2020, 10, 16)),
          TimeRange.fromTimeStrings('10:30', '10:59', new Date(2020, 10, 16)),
          TimeRange.fromTimeStrings('11:00', '11:29', new Date(2020, 10, 16)),
          TimeRange.fromTimeStrings('11:30', '11:59', new Date(2020, 10, 16)),
          TimeRange.fromTimeStrings('12:00', '12:29', new Date(2020, 10, 16)),
          TimeRange.fromTimeStrings('12:30', '12:59', new Date(2020, 10, 16)),
        ],
        [
          TimeRange.fromTimeStrings('11:00', '11:59', new Date(2020, 10, 15)),
          TimeRange.fromTimeStrings('12:00', '12:29', new Date(2020, 10, 16)),
        ],
      ),
    ).toEqual([
      TimeRange.fromTimeStrings('10:00', '10:29', new Date(2020, 10, 15)),
      TimeRange.fromTimeStrings('10:30', '10:59', new Date(2020, 10, 15)),
      // TimeRange.fromTimeStrings('11:00', `11:29`, new Date(2020, 10, 15)),
      // TimeRange.fromTimeStrings('11:30', '11:59', new Date(2020, 10, 15)),
      TimeRange.fromTimeStrings('12:00', '12:29', new Date(2020, 10, 15)),
      TimeRange.fromTimeStrings('12:30', '12:59', new Date(2020, 10, 15)),

      TimeRange.fromTimeStrings('10:00', '10:29', new Date(2020, 10, 16)),
      TimeRange.fromTimeStrings('10:30', '10:59', new Date(2020, 10, 16)),
      TimeRange.fromTimeStrings('11:00', '11:29', new Date(2020, 10, 16)),
      TimeRange.fromTimeStrings('11:30', '11:59', new Date(2020, 10, 16)),
      // TimeRange.fromTimeStrings('12:00', '12:29', new Date(2020, 10, 16)),
      TimeRange.fromTimeStrings('12:30', '12:59', new Date(2020, 10, 16)),
    ]);
  });
});
