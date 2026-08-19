# date-diff

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/date-diff)](https://www.npmjs.com/package/@cityssm/date-diff)

Calculates the difference between two JavaScript Dates.

Forked from [melvinsembrano/date-diff](https://github.com/melvinsembrano/date-diff).

## Installation

```bash
npm install @cityssm/date-diff
```

## Usage

```javascript
import { dateDiff } from '@cityssm/date-diff'

const fromDate = new Date(2020, 1 - 1, 1) // 2020-01-01
const toDate = new Date(2021, 1 - 1, 1) // 2021-01-01

const diff = dateDiff(fromDate, toDate)
```

### Output

```javascript
diff = {
  inMilliseconds: 31622400000,
  inSeconds: 31622400,
  inMinutes: 527040,
  inHours: 8784,
  inDays: 366,
  inWeeks: 52.3,
  inMonths: 12,
  inYears: 1,
  formatted: '1 year'
}
```
