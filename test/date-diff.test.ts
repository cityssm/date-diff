import * as assert from "assert";
import { dateDiff } from "../date-diff";

// January 1st, 2020
const today = new Date(2020, (1 - 1), 1);

describe("DateDiff(today, tomorrow)", () => {

  // January 2nd, 2020
  const tomorrow = new Date(2020, (1 - 1), 2);

  it("will return 1 day", () => {
    assert.strictEqual(dateDiff(today, tomorrow).days(), 1);
  });

  it("will return 24 hours", () => {
    assert.strictEqual(dateDiff(today, tomorrow).hours(), 24);
  });

  it("will return 1440 minutes", () => {
    assert.strictEqual(dateDiff(today, tomorrow).minutes(), 1440);
  });

  it("will return 1440 minutes", () => {
    assert.strictEqual(dateDiff(today, tomorrow).minutes(), 1440);
  });

  it("will return 86400 seconds", () => {
    assert.strictEqual(dateDiff(today, tomorrow).seconds(), 86400);
  });
});


describe("DateDiff(today, nextYear)", () => {

  // January 1st, 2021
  const nextYear = new Date(2021, (1 - 1), 1);

  it("will return 366 days", () => {
    assert.strictEqual(dateDiff(today, nextYear).days(), 366);
  });

  it("will return 52 weeks", () => {
    assert.strictEqual(Math.floor(dateDiff(today, nextYear).weeks()), 52);
  });

  it("will return 12 months", () => {
    assert.strictEqual(dateDiff(today, nextYear).months(), 12);
  });

  it("will return 1 year", () => {
    assert.strictEqual(dateDiff(today, nextYear).years(), 1);
  });
});
