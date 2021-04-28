"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dateDiff = void 0;

var dateDiff = function dateDiff(fromDate) {
  var toDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var decimalPrecision = 1;
  var divisors = {
    days: 24 * 60 * 60 * 1000,
    hours: 60 * 60 * 1000,
    minutes: 60 * 1000,
    seconds: 1000
  };

  var endOfMonth = function endOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  };

  var endOfYear = function endOfYear(date) {
    return new Date(date.getFullYear() + 1, 0, 0);
  };

  var beginOfYear = function beginOfYear(date) {
    return new Date(date.getFullYear(), 0, 0);
  };

  var dayOfYear = function dayOfYear(date) {
    return (date.getTime() - beginOfYear(date).getTime()) / divisors.days;
  };

  var daysInYear = function daysInYear(date) {
    return (endOfYear(date).getTime() - beginOfYear(date).getTime()) / divisors.days;
  };

  var roundToPrecision = function roundToPrecision(n) {
    return parseFloat(n.toFixed(decimalPrecision));
  };

  var inMilliseconds = Math.floor(toDate.getTime() - fromDate.getTime());
  var inSeconds = roundToPrecision(inMilliseconds / divisors.seconds);
  var inMinutes = roundToPrecision(inMilliseconds / divisors.minutes);
  var inHours = roundToPrecision(inMilliseconds / divisors.hours);
  var inDays = roundToPrecision(inMilliseconds / divisors.days);
  var inWeeks = roundToPrecision(inDays / 7);

  var inMonths = function () {
    var ret;
    ret = (toDate.getFullYear() - fromDate.getFullYear()) * 12;
    ret += toDate.getMonth() - fromDate.getMonth();
    var eom = endOfMonth(fromDate).getDate();
    ret += toDate.getDate() / eom - fromDate.getDate() / eom;
    return roundToPrecision(ret);
  }();

  var inYears = function () {
    var ret;
    ret = toDate.getFullYear() - fromDate.getFullYear();
    ret += (dayOfYear(toDate) - dayOfYear(fromDate)) / daysInYear(fromDate);
    return roundToPrecision(ret);
  }();

  var formatted = "";

  if (Math.abs(inYears) >= 1) {
    formatted = inYears.toString() + " year" + (inYears === 1 ? "" : "s");
  } else if (Math.abs(inMonths) >= 1) {
    formatted = inMonths.toString() + " month" + (inMonths === 1 ? "" : "s");
  } else if (Math.abs(inWeeks) >= 1) {
    formatted = inWeeks.toString() + " week" + (inWeeks === 1 ? "" : "s");
  } else if (Math.abs(inDays) >= 1) {
    formatted = inDays.toString() + " day" + (inDays === 1 ? "" : "s");
  } else if (Math.abs(inHours) >= 1) {
    formatted = inHours.toString() + " hour" + (inHours === 1 ? "" : "s");
  } else if (Math.abs(inMinutes) >= 1) {
    formatted = inMinutes.toString() + " minute" + (inMinutes === 1 ? "" : "s");
  } else if (Math.abs(inSeconds) >= 1) {
    formatted = inSeconds.toString() + " second" + (inSeconds === 1 ? "" : "s");
  } else {
    formatted = inMilliseconds.toString() + " millisecond" + (inMilliseconds === 1 ? "" : "s");
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