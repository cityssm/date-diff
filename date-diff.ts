import type * as types from "./types";

// import for gulp-aegean -> babel -> es2015
import "./utils.js";

import { divisors, endOfMonth, dayOfYear, daysInYear, roundToPrecision } from "./utils.js";

/*
 * Options
 */

export const defaultOptions: types.DateDiffOptions = {
  decimalPrecision: 1,
  yearsSuffix: "year",
  yearsSuffixPlural: "years",
  monthsSuffix: "month",
  monthsSuffixPlural: "months",
  weeksSuffix: "week",
  weeksSuffixPlural: "weeks",
  daysSuffix: "day",
  daysSuffixPlural: "days",
  hoursSuffix: "hour",
  hoursSuffixPlural: "hours",
  minutesSuffix: "minute",
  minutesSuffixPlural: "minutes",
  secondsSuffix: "second",
  secondsSuffixPlural: "seconds",
  millisecondsSuffix: "millisecond",
  millisecondsSuffixPlural: "milliseconds"
};

/*
 * dateDiff function
 */

export const dateDiff: types.DateDiff = (fromDate: Date, toDate: Date = new Date(), dateDiffOptions: types.DateDiffOptions = {}) => {

  const options: types.DateDiffOptions = Object.assign({}, defaultOptions, dateDiffOptions);

  /*
   * Differences
   */

  const inMilliseconds = Math.floor(toDate.getTime() - fromDate.getTime());

  const inSeconds = roundToPrecision(inMilliseconds / divisors.seconds, options.decimalPrecision);

  const inMinutes = roundToPrecision(inMilliseconds / divisors.minutes, options.decimalPrecision);

  const inHours = roundToPrecision(inMilliseconds / divisors.hours, options.decimalPrecision);

  const inDays = roundToPrecision(inMilliseconds / divisors.days, options.decimalPrecision);

  const inWeeks = roundToPrecision(inDays / 7, options.decimalPrecision);

  const inMonths = (() => {
    let ret: number;
    ret = (toDate.getFullYear() - fromDate.getFullYear()) * 12;
    ret += toDate.getMonth() - fromDate.getMonth();
    const eom = endOfMonth(fromDate).getDate();
    ret += (toDate.getDate() / eom) - (fromDate.getDate() / eom);
    return roundToPrecision(ret, options.decimalPrecision);
  })();

  const inYears = (() => {
    let ret: number;
    ret = toDate.getFullYear() - fromDate.getFullYear();
    ret += (dayOfYear(toDate) - dayOfYear(fromDate)) / daysInYear(fromDate);
    return roundToPrecision(ret, options.decimalPrecision);
  })();

  /*
   * Formatted
   */

  let formatted = "";

  if (Math.abs(inYears) >= 1) {
    formatted = inYears.toString() +
      " " +
      (inYears === 1 ? options.yearsSuffix : options.yearsSuffixPlural);


  } else if (Math.abs(inMonths) >= 1) {
    formatted = inMonths.toString() +
      " " +
      (inMonths === 1 ? options.monthsSuffix : options.monthsSuffixPlural);

  } else if (Math.abs(inWeeks) >= 1) {
    formatted = inWeeks.toString() +
      " " +
      (inWeeks === 1 ? options.weeksSuffix : options.weeksSuffixPlural);

  } else if (Math.abs(inDays) >= 1) {
    formatted = inDays.toString() +
      " " +
      (inDays === 1 ? options.daysSuffix : options.daysSuffixPlural);

  } else if (Math.abs(inHours) >= 1) {
    formatted = inHours.toString() +
      " " +
      (inHours === 1 ? options.hoursSuffix : options.hoursSuffixPlural);

  } else if (Math.abs(inMinutes) >= 1) {
    formatted = inMinutes.toString() +
      " " +
      (inMinutes === 1 ? options.minutesSuffix : options.minutesSuffixPlural);

  } else if (Math.abs(inSeconds) >= 1) {
    formatted = inSeconds.toString() +
      " " +
      (inSeconds === 1 ? options.secondsSuffix : options.secondsSuffixPlural);

  } else {
    formatted = inMilliseconds.toString() +
      " " +
      (inMilliseconds === 1 ? options.millisecondsSuffix : options.millisecondsSuffixPlural);
  }

  /*
   * Return
   */

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

export default dateDiff;
