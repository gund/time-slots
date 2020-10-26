import { TimeRange } from './time-range';

export function excludeTimeSlots(
  slots: TimeRange[],
  excludedSlots: TimeRange[],
): TimeRange[] {
  return slots.filter(
    (slot) =>
      !excludedSlots.some((excludedSlot) => excludedSlot.intersectsWith(slot!)),
  );
}
