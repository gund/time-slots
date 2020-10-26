import {
  addDays,
  addHours,
  addMilliseconds,
  addMinutes,
  addSeconds,
  differenceInDays,
  differenceInHours,
  differenceInMilliseconds,
  differenceInMinutes,
  differenceInSeconds,
  subDays,
  subHours,
  subMilliseconds,
  subMinutes,
  subSeconds,
} from 'date-fns';

import { DateAdapter } from '../../src/lib/date-adapter';

export const dateFnsAdapter: DateAdapter = {
  addDays,
  addHours,
  addMinutes,
  addSeconds,
  addMilliseconds,
  subDays,
  subHours,
  subMinutes,
  subSeconds,
  subMilliseconds,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  differenceInMilliseconds,
};
