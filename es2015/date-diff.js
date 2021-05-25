"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dateDiff = exports.defaultOptions = exports.roundToPrecision = exports.daysInYear = exports.dayOfYear = exports.endOfMonth = exports.divisors = void 0;
var divisors = {
  days: 24 * 60 * 60 * 1000,
  hours: 60 * 60 * 1000,
  minutes: 60 * 1000,
  seconds: 1000
};
exports.divisors = divisors;

var endOfYear = function endOfYear(date) {
  return new Date(date.getFullYear() + 1, 0, 0);
};

var beginOfYear = function beginOfYear(date) {
  return new Date(date.getFullYear(), 0, 0);
};

var endOfMonth = function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

exports.endOfMonth = endOfMonth;

var dayOfYear = function dayOfYear(date) {
  return (date.getTime() - beginOfYear(date).getTime()) / divisors.days;
};

exports.dayOfYear = dayOfYear;

var daysInYear = function daysInYear(date) {
  return (endOfYear(date).getTime() - beginOfYear(date).getTime()) / divisors.days;
};

exports.daysInYear = daysInYear;

var roundToPrecision = function roundToPrecision(n, decimalPrecision) {
  return parseFloat(n.toFixed(decimalPrecision));
};

exports.roundToPrecision = roundToPrecision;
var defaultOptions = {
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
exports.defaultOptions = defaultOptions;

var dateDiff = function dateDiff(fromDate) {
  var toDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var dateDiffOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = Object.assign({}, defaultOptions, dateDiffOptions);
  var inMilliseconds = Math.floor(toDate.getTime() - fromDate.getTime());
  var inSeconds = roundToPrecision(inMilliseconds / divisors.seconds, options.decimalPrecision);
  var inMinutes = roundToPrecision(inMilliseconds / divisors.minutes, options.decimalPrecision);
  var inHours = roundToPrecision(inMilliseconds / divisors.hours, options.decimalPrecision);
  var inDays = roundToPrecision(inMilliseconds / divisors.days, options.decimalPrecision);
  var inWeeks = roundToPrecision(inDays / 7, options.decimalPrecision);

  var inMonths = function () {
    var ret;
    ret = (toDate.getFullYear() - fromDate.getFullYear()) * 12;
    ret += toDate.getMonth() - fromDate.getMonth();
    var eom = endOfMonth(fromDate).getDate();
    ret += toDate.getDate() / eom - fromDate.getDate() / eom;
    return roundToPrecision(ret, options.decimalPrecision);
  }();

  var inYears = function () {
    var ret;
    ret = toDate.getFullYear() - fromDate.getFullYear();
    ret += (dayOfYear(toDate) - dayOfYear(fromDate)) / daysInYear(fromDate);
    return roundToPrecision(ret, options.decimalPrecision);
  }();

  var formatted = "";

  if (Math.abs(inYears) >= 1) {
    formatted = inYears.toString() + " " + (inYears === 1 ? options.yearsSuffix : options.yearsSuffixPlural);
  } else if (Math.abs(inMonths) >= 1) {
    formatted = inMonths.toString() + " " + (inMonths === 1 ? options.monthsSuffix : options.monthsSuffixPlural);
  } else if (Math.abs(inWeeks) >= 1) {
    formatted = inWeeks.toString() + " " + (inWeeks === 1 ? options.weeksSuffix : options.weeksSuffixPlural);
  } else if (Math.abs(inDays) >= 1) {
    formatted = inDays.toString() + " " + (inDays === 1 ? options.daysSuffix : options.daysSuffixPlural);
  } else if (Math.abs(inHours) >= 1) {
    formatted = inHours.toString() + " " + (inHours === 1 ? options.hoursSuffix : options.hoursSuffixPlural);
  } else if (Math.abs(inMinutes) >= 1) {
    formatted = inMinutes.toString() + " " + (inMinutes === 1 ? options.minutesSuffix : options.minutesSuffixPlural);
  } else if (Math.abs(inSeconds) >= 1) {
    formatted = inSeconds.toString() + " " + (inSeconds === 1 ? options.secondsSuffix : options.secondsSuffixPlural);
  } else {
    formatted = inMilliseconds.toString() + " " + (inMilliseconds === 1 ? options.millisecondsSuffix : options.millisecondsSuffixPlural);
  }

  return {
    inMilliseconds: inMilliseconds,
    inSeconds: inSeconds,
    inMinutes: inMinutes,
    inHours: inHours,
    inDays: inDays,
    inWeeks: inWeeks,
    inMonths: inMonths,
    inYears: inYears,
    formatted: formatted
  };
};

exports.dateDiff = dateDiff;
var _default = dateDiff;
exports["default"] = _default;