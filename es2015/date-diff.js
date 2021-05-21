"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dateDiff = exports.defaultOptions = void 0;

var utils = _interopRequireWildcard(require("./utils.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  var inSeconds = utils.roundToPrecision(inMilliseconds / utils.divisors.seconds, options.decimalPrecision);
  var inMinutes = utils.roundToPrecision(inMilliseconds / utils.divisors.minutes, options.decimalPrecision);
  var inHours = utils.roundToPrecision(inMilliseconds / utils.divisors.hours, options.decimalPrecision);
  var inDays = utils.roundToPrecision(inMilliseconds / utils.divisors.days, options.decimalPrecision);
  var inWeeks = utils.roundToPrecision(inDays / 7, options.decimalPrecision);

  var inMonths = function () {
    var ret;
    ret = (toDate.getFullYear() - fromDate.getFullYear()) * 12;
    ret += toDate.getMonth() - fromDate.getMonth();
    var eom = utils.endOfMonth(fromDate).getDate();
    ret += toDate.getDate() / eom - fromDate.getDate() / eom;
    return utils.roundToPrecision(ret, options.decimalPrecision);
  }();

  var inYears = function () {
    var ret;
    ret = toDate.getFullYear() - fromDate.getFullYear();
    ret += (utils.dayOfYear(toDate) - utils.dayOfYear(fromDate)) / utils.daysInYear(fromDate);
    return utils.roundToPrecision(ret, options.decimalPrecision);
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