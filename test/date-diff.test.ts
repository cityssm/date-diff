import * as assert from "assert";
import { DateDiff } from "../date-diff";

// January 1st, 2020
const today = new Date(2020, (1 - 1), 1);

describe("DateDiff(today, tomorrow)", function() {

  // January 2nd, 2020
  const tomorrow = new Date(2020, (1 - 1), 2);

  it("will return 1 day", function() {
    assert.strictEqual(DateDiff(today, tomorrow).days(), 1);
  });

  it("will return 24 hours", function() {
    assert.strictEqual(DateDiff(today, tomorrow).hours(), 24);
  });

  it("will return 1440 minutes", function() {
    assert.strictEqual(DateDiff(today, tomorrow).minutes(), 1440);
  });

  it("will return 1440 minutes", function() {
    assert.strictEqual(DateDiff(today, tomorrow).minutes(), 1440);
  });

  it("will return 86400 seconds", function() {
    assert.strictEqual(DateDiff(today, tomorrow).seconds(), 86400);
  });
});


describe("DateDiff(today, nextYear)", function() {

  // January 1st, 2021
  const nextYear = new Date(2021, (1 - 1), 1);

  it("will return 366 days", function() {
    assert.strictEqual(DateDiff(today, nextYear).days(), 366);
  });

  it("will return 52 weeks", function() {
    assert.strictEqual(Math.floor(DateDiff(today, nextYear).weeks()), 52);
  });

  it("will return 12 months", function() {
    assert.strictEqual(DateDiff(today, nextYear).months(), 12);
  });

  it("will return 1 year", function() {
    assert.strictEqual(DateDiff(today, nextYear).years(), 1);
  });
});
