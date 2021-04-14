"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const date_diff_1 = require("../date-diff");
const today = new Date(2020, (1 - 1), 1);
describe("DateDiff(today, tomorrow)", () => {
    const tomorrow = new Date(2020, (1 - 1), 2);
    it("will return 1 day", () => {
        assert.strictEqual(date_diff_1.dateDiff(today, tomorrow).days(), 1);
    });
    it("will return 24 hours", () => {
        assert.strictEqual(date_diff_1.dateDiff(today, tomorrow).hours(), 24);
    });
    it("will return 1440 minutes", () => {
        assert.strictEqual(date_diff_1.dateDiff(today, tomorrow).minutes(), 1440);
    });
    it("will return 1440 minutes", () => {
        assert.strictEqual(date_diff_1.dateDiff(today, tomorrow).minutes(), 1440);
    });
    it("will return 86400 seconds", () => {
        assert.strictEqual(date_diff_1.dateDiff(today, tomorrow).seconds(), 86400);
    });
});
describe("DateDiff(today, nextYear)", () => {
    const nextYear = new Date(2021, (1 - 1), 1);
    it("will return 366 days", () => {
        assert.strictEqual(date_diff_1.dateDiff(today, nextYear).days(), 366);
    });
    it("will return 52 weeks", () => {
        assert.strictEqual(Math.floor(date_diff_1.dateDiff(today, nextYear).weeks()), 52);
    });
    it("will return 12 months", () => {
        assert.strictEqual(date_diff_1.dateDiff(today, nextYear).months(), 12);
    });
    it("will return 1 year", () => {
        assert.strictEqual(date_diff_1.dateDiff(today, nextYear).years(), 1);
    });
});
