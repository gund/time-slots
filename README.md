# @gund/time-slots

> Small library to generate slots for a date range between a time range with optional interval

This is a small utility library that allow you to easily generate time slots and
also exclude from generated time slots already existing time slots.

It has "zero" dependencies but requires a small set of date functions to operate
which you can provide via `DateAdapter`.
And there is already existing `date-fns` adapter that you can use out of the box.

## Install

```
$ npm install @gund/time-slots
```

_Optionally_ install `date-fns` if you want to use out of the box provider:

```
$ npm install date-fns
```

## Setup

First make sure to provide a small set of date functions called `DateAdapter`
that is needed for this library to work:

```js
import { provideDateAdapter } from '@gund/time-slots';

provideDateAdapter(...); // Your DateAdapter is here
```

_Optionally_ you may import and use existing `date-fns` adapter:

```js
import { provideDateAdapter } from '@gund/time-slots';
import { dateFnsAdapter } from '@gund/time-slots/date-adapter/date-fns';

provideDateAdapter(dateFnsAdapter);
```

## Use

### Generation of slots

You can generate slots for a date range `DateRange` between a time range `TimeRange`
with optional time interval `TimeInterval`:

```js
import { generateTimeSlots, DateRange, TimeRange } from '@gund/time-slots';

const slots = generateTimeSlots(
  DateRange.fromDates(new Date(2020, 10, 15), new Date(2020, 10, 20)),
  TimeRange.fromTimeStrings('9:00', '17:30'),
);

// Now slots will contain array of `TimeRange`
// between 15.11.2020 to 20.11.2020
// with every day from 9am till 5:30pm
console.log(slots);
```

#### With time interval

To slice every day into intervals you can add `TimeInterval` argument:

```js
import {
  generateTimeSlots,
  DateRange,
  TimeRange,
  TimeInterval,
} from '@gund/time-slots';

const slots = generateTimeSlots(
  DateRange.fromDates(new Date(2020, 10, 15), new Date(2020, 10, 16)),
  TimeRange.fromTimeStrings('9:00', '17:30'),
  TimeInterval.minutes(30),
);

// Now slots will contain array of `TimeRange`
// between 15.11.2020 to 20.11.2020
// with every day sliced in 30 mins intervals from 9am till 5:30pm
console.log(slots);
```

### Exclusion of existing slots

You can also exclude from an array of slots another array of slots.
The exclusion of a slot will happen as long as it intersects with a slot from another array.

```js
import { excludeTimeSlots } from '@gund/time-slots';

const allSlots = [...];
const bookedSlots = [...];

const availableSlots = excludeTimeSlots(allSlots, bookedSlots);

// Result will have only slots from `allSlots` that
// do not intersect with any slots in `bookedSlots`
console.log(availableSlots);
```

## Build

Run `nx build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.
