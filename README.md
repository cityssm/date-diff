# DateDiff

![npm (scoped)](https://img.shields.io/npm/v/@cityssm/date-diff) [![Codacy grade](https://img.shields.io/codacy/grade/57708a0662df41a8b494dbc009e620b1)](https://app.codacy.com/gh/cityssm/date-diff/dashboard) [![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/date-diff)](https://codeclimate.com/github/cityssm/date-diff) ![Code Climate coverage](https://img.shields.io/codeclimate/coverage/cityssm/date-diff) [![AppVeyor](https://img.shields.io/appveyor/build/dangowans/date-diff)](https://ci.appveyor.com/project/dangowans/date-diff) [![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/date-diff)](https://app.snyk.io/org/cityssm/project/512fb2a1-4f6c-4c03-a741-bb51e7e9603a)

DateDiff is a minimalized JavaScript date arithmetic extension.

Forked from [melvinsembrano/date-diff](https://github.com/melvinsembrano/date-diff).

## Installation

**Coming soon!**

```sh
npm install @cityssm/date-diff
```

## Usage

```javascript
import { dateDiff } from "@cityssm/date-diff";

const fromDate = new Date(2020, (1 - 1), 1); // 2020-01-01
const toDate   = new Date(2021, (1 - 1), 1); // 2021-01-01

const diff = dateDiff(fromDate, toDate);

/*
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
*/
```

## Why Fork the Original Project

The [original project]((https://github.com/melvinsembrano/date-diff)) made a few design decisions that could not be overcome with a simple pull request.

-   :star: The original project used CoffeeScript.  It lacked TypeScript typing.  **This version has TypeScript types.**

-   :star: The original project modified the `Date` prototype.  **This version does not.**

-   :star: The original project accepted its `fromDate` and `toDate` in what felt like the wrong order.

### Some Other Differences

-   This version returns an Object with all of the differences.

-   This version includes a formatted string output for easy use in web applications.
