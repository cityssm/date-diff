"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateDiff = void 0;
const dateDiff = (fromDate, toDate = new Date()) => {
    const decimalPrecision = 1;
    const divisors = {
        days: 24 * 60 * 60 * 1000,
        hours: 60 * 60 * 1000,
        minutes: 60 * 1000,
        seconds: 1000
    };
    const endOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    };
    const endOfYear = (date) => {
        return new Date(date.getFullYear() + 1, 0, 0);
    };
    const beginOfYear = (date) => {
        return new Date(date.getFullYear(), 0, 0);
    };
    const dayOfYear = (date) => {
        return (date.getTime() - beginOfYear(date).getTime()) / divisors.days;
    };
    const daysInYear = (date) => {
        return (endOfYear(date).getTime() - beginOfYear(date).getTime()) / divisors.days;
    };
    const roundToPrecision = (n) => {
        return parseFloat(n.toFixed(decimalPrecision));
    };
    const inMilliseconds = Math.floor(toDate.getTime() - fromDate.getTime());
    const inSeconds = roundToPrecision(inMilliseconds / divisors.seconds);
    const inMinutes = roundToPrecision(inMilliseconds / divisors.minutes);
    const inHours = roundToPrecision(inMilliseconds / divisors.hours);
    const inDays = roundToPrecision(inMilliseconds / divisors.days);
    const inWeeks = roundToPrecision(inDays / 7);
    const inMonths = (() => {
        let ret;
        ret = (toDate.getFullYear() - fromDate.getFullYear()) * 12;
        ret += toDate.getMonth() - fromDate.getMonth();
        const eom = endOfMonth(fromDate).getDate();
        ret += (toDate.getDate() / eom) - (fromDate.getDate() / eom);
        return roundToPrecision(ret);
    })();
    const inYears = (() => {
        let ret;
        ret = toDate.getFullYear() - fromDate.getFullYear();
        ret += (dayOfYear(toDate) - dayOfYear(fromDate)) / daysInYear(fromDate);
        return roundToPrecision(ret);
    })();
    const formatted = (() => {
        if (inYears >= 1) {
            return inYears.toString() +
                " year" +
                (inYears === 1 ? "" : "s");
        }
        else if (inMonths >= 1) {
            return inMonths.toString() +
                " month" +
                (inMonths === 1 ? "" : "s");
        }
        else if (inWeeks >= 1) {
            return inWeeks.toString() +
                " week" +
                (inWeeks === 1 ? "" : "s");
        }
        else if (inDays >= 1) {
            return inDays.toString() +
                " day" +
                (inDays === 1 ? "" : "s");
        }
        else if (inHours >= 1) {
            return inHours.toString() +
                " hour" +
                (inHours === 1 ? "" : "s");
        }
        else if (inMinutes >= 1) {
            return inMinutes.toString() +
                " minute" +
                (inMinutes === 1 ? "" : "s");
        }
        else if (inSeconds >= 1) {
            return inSeconds.toString() +
                " second" +
                (inSeconds === 1 ? "" : "s");
        }
        return inMilliseconds.toString() +
            " millisecond" +
            (inMilliseconds === 1 ? "" : "s");
    })();
    return {
        inMilliseconds,
        inSeconds,
        inMinutes,
        inHours,
        inDays,
        inWeeks,
        inMonths,
        inYears,
        formatted
    };
};
exports.dateDiff = dateDiff;
