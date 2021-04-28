# date-diff

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/date-diff)](https://www.npmjs.com/package/@cityssm/date-diff) [![Codacy grade](https://img.shields.io/codacy/grade/57708a0662df41a8b494dbc009e620b1)](https://app.codacy.com/gh/cityssm/date-diff/dashboard) [![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/date-diff)](https://codeclimate.com/github/cityssm/date-diff) [![Code Climate coverage](https://img.shields.io/codeclimate/coverage/cityssm/date-diff)](https://codeclimate.com/github/cityssm/date-diff) [![AppVeyor](https://img.shields.io/appveyor/build/dangowans/date-diff)](https://ci.appveyor.com/project/dangowans/date-diff) [![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/date-diff)](https://app.snyk.io/org/cityssm/project/512fb2a1-4f6c-4c03-a741-bb51e7e9603a)

Calculates the difference between two JavaScript Dates.

Forked from [melvinsembrano/date-diff](https://github.com/melvinsembrano/date-diff).

## Installation

```sh
npm install @cityssm/date-diff
```

## Usage

### Browser (ES2015)

```html
<script src="/path/to/date-diff/es6/date-diff.min.js"></script>
<script>
  const fromDate = new Date(2020, (1 - 1), 1); // 2020-01-01
  const toDate   = new Date(2021, (1 - 1), 1); // 2021-01-01

  const diff = exports.dateDiff(fromDate, toDate);
</script>
```

### Node 12 or better (ES Module)

```javascript
import { dateDiff } from "@cityssm/date-diff";

const fromDate = new Date(2020, (1 - 1), 1); // 2020-01-01
const toDate   = new Date(2021, (1 - 1), 1); // 2021-01-01

const diff = dateDiff(fromDate, toDate);
```

### Output

``` javascript
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
