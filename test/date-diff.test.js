import * as assert from "assert";
import dateDiff from "../date-diff.js";
const today = new Date(2020, (1 - 1), 1);
describe("dateDiff(today, tomorrow)", () => {
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
describe("dateDiff(today, twoHoursLater, { decimalPrecision: 2 })", () => {
    const twoHoursLater = new Date(today.getTime() + (2 * 60 * 60 * 1000));
    const diff = dateDiff(today, twoHoursLater, {
        decimalPrecision: 2
    });
    it("will return \"2 hours\"", () => {
        assert.strictEqual(diff.formatted, "2 hours");
    });
    it("will return two decimal precision on inDays", () => {
        const daysString = diff.inDays.toString();
        assert.ok(daysString.length === 4 && daysString.indexOf(".") === 1);
    });
});
describe("dateDiff(today, twoHoursLater, { hoursSuffixPlural: \"heures\" })", () => {
    const twoHoursLater = new Date(today.getTime() + (2 * 60 * 60 * 1000));
    const diff = dateDiff(today, twoHoursLater, {
        hoursSuffix: "heure",
        hoursSuffixPlural: "heures"
    });
    it("will return \"2 heures\"", () => {
        assert.strictEqual(diff.formatted, "2 heures");
    });
});
describe("dateDiff(today, threeWeeksLater)", () => {
    const threeWeeksLater = new Date(today.getTime() + (3 * 7 * 24 * 60 * 60 * 1000));
    const diff = dateDiff(today, threeWeeksLater);
    it("will return \"3 weeks\"", () => {
        assert.strictEqual(diff.formatted, "3 weeks");
    });
});
describe("dateDiff(today, fourMonthsLater)", () => {
    const fourMonthsLater = new Date(today.getTime());
    fourMonthsLater.setMonth(fourMonthsLater.getMonth() + 4);
    const diff = dateDiff(today, fourMonthsLater);
    it("will return \"4 months\"", () => {
        assert.strictEqual(diff.formatted, "4 months");
    });
});
describe("dateDiff(today, twelveMinutesLater)", () => {
    const twelveMinutesLater = new Date(today.getTime() + (12 * 60 * 1000));
    const diff = dateDiff(today, twelveMinutesLater);
    it("will return \"12 minutes\"", () => {
        assert.strictEqual(diff.formatted, "12 minutes");
    });
});
describe("dateDiff(today, fiftySecondsLater)", () => {
    const fiftySecondsLater = new Date(today.getTime() + (50 * 1000));
    const diff = dateDiff(today, fiftySecondsLater);
    it("will return \"50 seconds\"", () => {
        assert.strictEqual(diff.formatted, "50 seconds");
    });
});
describe("dateDiff(today, hundredMillisecondsLater)", () => {
    const hundredMillisecondsLater = new Date(today.getTime() + 100);
    const diff = dateDiff(today, hundredMillisecondsLater);
    it("will return \"100 milliseconds\"", () => {
        assert.strictEqual(diff.formatted, "100 milliseconds");
    });
});
describe("dateDiff(today, nextYear)", () => {
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
