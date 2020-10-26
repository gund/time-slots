import { DateRange } from './date-range';
import { TimeInterval } from './time-interval';
import { TimeRange } from './time-range';

type DateToTimeRangeMapper = (day: Date) => TimeRange[];

export function generateTimeSlots(
  dateRange: DateRange,
  timeRange: TimeRange,
  interval?: TimeInterval,
): TimeRange[] {
  const dayToSingleRange: DateToTimeRangeMapper = (day) => [
    TimeRange.fromTimeDates(timeRange.from, timeRange.to, day),
  ];

  const dayToIntervalRanges: DateToTimeRangeMapper = (day) =>
    timeRange.createIntervalsFor(day, interval!);

  return dateRange
    .takeDays()
    .map(interval ? dayToIntervalRanges : dayToSingleRange)
    .flat();
}
