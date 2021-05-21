import * as utils from "./utils.js";
import type { DateDiff, DateDiffOptions } from "./types";

/*
 * Options
 */

export const defaultOptions: DateDiffOptions = {
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

export const dateDiff: DateDiff = (fromDate: Date, toDate: Date = new Date(), dateDiffOptions: DateDiffOptions = {}) => {

  const options: DateDiffOptions = Object.assign({}, defaultOptions, dateDiffOptions);

  /*
   * Differences
   */

  const inMilliseconds = Math.floor(toDate.getTime() - fromDate.getTime());

  const inSeconds = utils.roundToPrecision(inMilliseconds / utils.divisors.seconds, options.decimalPrecision);

  const inMinutes = utils.roundToPrecision(inMilliseconds / utils.divisors.minutes, options.decimalPrecision);

  const inHours = utils.roundToPrecision(inMilliseconds / utils.divisors.hours, options.decimalPrecision);

  const inDays = utils.roundToPrecision(inMilliseconds / utils.divisors.days, options.decimalPrecision);

  const inWeeks = utils.roundToPrecision(inDays / 7, options.decimalPrecision);

  const inMonths = (() => {
    let ret: number;
    ret = (toDate.getFullYear() - fromDate.getFullYear()) * 12;
    ret += toDate.getMonth() - fromDate.getMonth();
    const eom = utils.endOfMonth(fromDate).getDate();
    ret += (toDate.getDate() / eom) - (fromDate.getDate() / eom);
    return utils.roundToPrecision(ret, options.decimalPrecision);
  })();

  const inYears = (() => {
    let ret: number;
    ret = toDate.getFullYear() - fromDate.getFullYear();
    ret += (utils.dayOfYear(toDate) - utils.dayOfYear(fromDate)) / utils.daysInYear(fromDate);
    return utils.roundToPrecision(ret, options.decimalPrecision);
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
