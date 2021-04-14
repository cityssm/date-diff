"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateDiff = void 0;
const DateDiff = (fromDate, toDate) => {
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
    const oneDecimalRound = (n) => {
        return parseFloat(n.toFixed(1));
    };
    const millisecondDiff = Math.floor(toDate.getTime() - fromDate.getTime());
    const secondDiff = () => {
        return oneDecimalRound(millisecondDiff / divisors.seconds);
    };
    const minuteDiff = () => {
        return oneDecimalRound(millisecondDiff / divisors.minutes);
    };
    const hourDiff = () => {
        return oneDecimalRound(millisecondDiff / divisors.hours);
    };
    const dayDiff = () => {
        return oneDecimalRound(millisecondDiff / divisors.days);
    };
    const weekDiff = () => {
        return oneDecimalRound(dayDiff() / 7);
    };
    const monthDiff = () => {
        let ret;
        ret = (toDate.getFullYear() - fromDate.getFullYear()) * 12;
        ret += toDate.getMonth() - fromDate.getMonth();
        const eom = endOfMonth(fromDate).getDate();
        ret += (toDate.getDate() / eom) - (fromDate.getDate() / eom);
        return oneDecimalRound(ret);
    };
    const yearDiff = () => {
        let ret;
        ret = toDate.getFullYear() - fromDate.getFullYear();
        ret += (dayOfYear(toDate) - dayOfYear(fromDate)) / daysInYear(fromDate);
        return oneDecimalRound(ret);
    };
    return {
        seconds: secondDiff,
        minutes: minuteDiff,
        hours: hourDiff,
        days: dayDiff,
        weeks: weekDiff,
        months: monthDiff,
        years: yearDiff
    };
};
exports.DateDiff = DateDiff;
