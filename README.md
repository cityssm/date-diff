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

const fromDate = new Date(2014, 0, 1);  // 2014-01-01
const toDate   = new Date(2015, 11, 1); // 2015-12-01

const diff = dateDiff(fromDate, toDate);

diff.years();   // ===> 1.9
diff.months();  // ===> 23
diff.days();    // ===> 699
diff.weeks();   // ===> 99.9
diff.hours();   // ===> 16776
diff.minutes(); // ===> 1006560
diff.seconds(); // ===> 60393600
```

## Why the Fork?

-   The original code was written in CoffeeScript.  This version uses TypeScript instead.
-   The original code takes the past date or `fromDate` as the second argument.  This version takes the `fromDate` as the first argument.
-   The original code alters the `Date` prototype.  This version does not.
