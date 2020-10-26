export interface DateAdapter {
  addDays(date: Date, days: number): Date;
  addHours(date: Date, hours: number): Date;
  addMinutes(date: Date, minutes: number): Date;
  addSeconds(date: Date, seconds: number): Date;
  addMilliseconds(date: Date, ms: number): Date;

  subDays(date: Date, days: number): Date;
  subHours(date: Date, hours: number): Date;
  subMinutes(date: Date, minutes: number): Date;
  subSeconds(date: Date, secs: number): Date;
  subMilliseconds(date: Date, ms: number): Date;

  differenceInDays(from: Date, to: Date): number;
  differenceInHours(from: Date, to: Date): number;
  differenceInMilliseconds(from: Date, to: Date): number;
  differenceInMinutes(from: Date, to: Date): number;
  differenceInSeconds(from: Date, to: Date): number;
}

let dateAdapter: DateAdapter | undefined;

export class DateAdapterMissingError extends Error {
  constructor() {
    super(
      'No date adapter provided! Please use `provideDateAdapter()` function!',
    );
  }
}

export function provideDateAdapter(adapter: DateAdapter) {
  dateAdapter = adapter;
}

export function getDateAdapter() {
  if (!dateAdapter) {
    throw new DateAdapterMissingError();
  }

  return dateAdapter;
}
