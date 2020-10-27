import addDays from 'date-fns/addDays';
import addHours from 'date-fns/addHours';
import addMilliseconds from 'date-fns/addMilliseconds';
import addMinutes from 'date-fns/addMinutes';
import addSeconds from 'date-fns/addSeconds';
import differenceInDays from 'date-fns/differenceInDays';
import differenceInHours from 'date-fns/differenceInHours';
import differenceInMilliseconds from 'date-fns/differenceInMilliseconds';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import subDays from 'date-fns/subDays';
import subHours from 'date-fns/subHours';
import subMilliseconds from 'date-fns/subMilliseconds';
import subMinutes from 'date-fns/subMinutes';
import subSeconds from 'date-fns/subSeconds';

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
