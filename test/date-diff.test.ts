import * as assert from "assert";
import { dateDiff } from "../date-diff";


// January 1st, 2020
const today = new Date(2020, (1 - 1), 1);


describe("dateDiff(today, tomorrow)", () => {

  // January 2nd, 2020
  const tomorrow = new Date(2020, (1 - 1), 2);

  const diff = dateDiff(today, tomorrow);

  it("will return 1 day", () => {
    assert.strictEqual(diff.inDays, 1);
  });

  it("will return 24 hours", () => {
    assert.strictEqual(diff.inHours, 24);
  });

  it("will return 1440 minutes", () => {
    assert.strictEqual(diff.inMinutes, 1440);
  });

  it("will return 86400 seconds", () => {
    assert.strictEqual(diff.inSeconds, 86400);
  });

  it("will return \"1 day\"", () => {
    assert.strictEqual(diff.formatted, "1 day");
  });
});


describe("dateDiff(today, nextYear)", () => {

  // January 1st, 2021
  const nextYear = new Date(2021, (1 - 1), 1);

  const diff = dateDiff(today, nextYear);

  it("will return 366 days", () => {
    assert.strictEqual(diff.inDays, 366);
  });

  it("will return 52 weeks", () => {
    assert.strictEqual(Math.floor(diff.inWeeks), 52);
  });

  it("will return 12 months", () => {
    assert.strictEqual(diff.inMonths, 12);
  });

  it("will return 1 year", () => {
    assert.strictEqual(diff.inYears, 1);
  });

  it("will return \"1 year\"", () => {
    assert.strictEqual(diff.formatted, "1 year");
  });
});
