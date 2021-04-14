"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const date_diff_1 = require("../date-diff");
const today = new Date(2020, (1 - 1), 1);
describe("DateDiff(today, tomorrow)", function () {
    const tomorrow = new Date(2020, (1 - 1), 2);
    it("will return 1 day", function () {
        assert.strictEqual(date_diff_1.DateDiff(today, tomorrow).days(), 1);
    });
    it("will return 24 hours", function () {
        assert.strictEqual(date_diff_1.DateDiff(today, tomorrow).hours(), 24);
    });
    it("will return 1440 minutes", function () {
        assert.strictEqual(date_diff_1.DateDiff(today, tomorrow).minutes(), 1440);
    });
    it("will return 1440 minutes", function () {
        assert.strictEqual(date_diff_1.DateDiff(today, tomorrow).minutes(), 1440);
    });
    it("will return 86400 seconds", function () {
        assert.strictEqual(date_diff_1.DateDiff(today, tomorrow).seconds(), 86400);
    });
});
describe("DateDiff(today, nextYear)", function () {
    const nextYear = new Date(2021, (1 - 1), 1);
    it("will return 366 days", function () {
        assert.strictEqual(date_diff_1.DateDiff(today, nextYear).days(), 366);
    });
    it("will return 52 weeks", function () {
        assert.strictEqual(Math.floor(date_diff_1.DateDiff(today, nextYear).weeks()), 52);
    });
    it("will return 12 months", function () {
        assert.strictEqual(date_diff_1.DateDiff(today, nextYear).months(), 12);
    });
    it("will return 1 year", function () {
        assert.strictEqual(date_diff_1.DateDiff(today, nextYear).years(), 1);
    });
});
