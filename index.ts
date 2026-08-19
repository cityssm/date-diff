import {
  millisecondsInOneDay,
  millisecondsInOneHour,
  millisecondsInOneMinute,
  millisecondsInOneSecond
} from '@cityssm/to-millis'

import type { DateDiffOptions, DateDiffReturn } from './types.js'
import {
  dayOfYear,
  daysInYear,
  endOfMonth,
  roundToPrecision
} from './utilities.js'

/*
 * Options
 */

export const defaultOptions: DateDiffOptions = {
  decimalPrecision: 1,

  yearsSuffix: 'year',
  yearsSuffixPlural: 'years',

  monthsSuffix: 'month',
  monthsSuffixPlural: 'months',

  weeksSuffix: 'week',
  weeksSuffixPlural: 'weeks',

  daysSuffix: 'day',
  daysSuffixPlural: 'days',

  hoursSuffix: 'hour',
  hoursSuffixPlural: 'hours',

  minutesSuffix: 'minute',
  minutesSuffixPlural: 'minutes',

  secondsSuffix: 'second',
  secondsSuffixPlural: 'seconds',

  millisecondsSuffix: 'millisecond',
  millisecondsSuffixPlural: 'milliseconds'
}

/**
 * Calculates the difference between two dates.
 * @param fromDate - The starting date.
 * @param toDate - The ending date. Defaults to the current date and time.
 * @param dateDiffOptions - Options for formatting the date difference.
 * @returns An object containing the difference in a variety of units and as a formatted string.
 */
export default function dateDiff(
  fromDate: Date,
  toDate: Date = new Date(),
  dateDiffOptions: Partial<DateDiffOptions> = {}
): DateDiffReturn {
  const options: DateDiffOptions = {
    ...defaultOptions,
    ...dateDiffOptions
  }

  /*
   * Differences
   */

  const inMilliseconds = Math.floor(toDate.getTime() - fromDate.getTime())

  const inSeconds = roundToPrecision(
    inMilliseconds / millisecondsInOneSecond,
    options.decimalPrecision
  )

  const inMinutes = roundToPrecision(
    inMilliseconds / millisecondsInOneMinute,
    options.decimalPrecision
  )

  const inHours = roundToPrecision(
    inMilliseconds / millisecondsInOneHour,
    options.decimalPrecision
  )

  const inDays = roundToPrecision(
    inMilliseconds / millisecondsInOneDay,
    options.decimalPrecision
  )

  const inWeeks = roundToPrecision(inDays / 7, options.decimalPrecision)

  const inMonths = (() => {
    let returnValue: number

    returnValue = (toDate.getFullYear() - fromDate.getFullYear()) * 12
    returnValue += toDate.getMonth() - fromDate.getMonth()

    const eom = endOfMonth(fromDate).getDate()
    returnValue += toDate.getDate() / eom - fromDate.getDate() / eom

    return roundToPrecision(returnValue, options.decimalPrecision)
  })()

  const inYears = (() => {
    let returnValue: number

    returnValue = toDate.getFullYear() - fromDate.getFullYear()
    returnValue +=
      (dayOfYear(toDate) - dayOfYear(fromDate)) / daysInYear(fromDate)

    return roundToPrecision(returnValue, options.decimalPrecision)
  })()

  /*
   * Formatted
   */

  let formatted: string

  if (Math.abs(inYears) >= 1) {
    formatted = `${inYears.toString()} ${
      inYears === 1 ? options.yearsSuffix : options.yearsSuffixPlural
    }`
  } else if (Math.abs(inMonths) >= 1) {
    formatted = `${inMonths.toString()} ${
      inMonths === 1 ? options.monthsSuffix : options.monthsSuffixPlural
    }`
  } else if (Math.abs(inWeeks) >= 1) {
    formatted = `${inWeeks.toString()} ${
      inWeeks === 1 ? options.weeksSuffix : options.weeksSuffixPlural
    }`
  } else if (Math.abs(inDays) >= 1) {
    formatted = `${inDays.toString()} ${
      inDays === 1 ? options.daysSuffix : options.daysSuffixPlural
    }`
  } else if (Math.abs(inHours) >= 1) {
    formatted = `${inHours.toString()} ${
      inHours === 1 ? options.hoursSuffix : options.hoursSuffixPlural
    }`
  } else if (Math.abs(inMinutes) >= 1) {
    formatted = `${inMinutes.toString()} ${
      inMinutes === 1 ? options.minutesSuffix : options.minutesSuffixPlural
    }`
  } else if (Math.abs(inSeconds) >= 1) {
    formatted = `${inSeconds.toString()} ${
      inSeconds === 1 ? options.secondsSuffix : options.secondsSuffixPlural
    }`
  } else {
    formatted = `${inMilliseconds.toString()} ${
      inMilliseconds === 1
        ? options.millisecondsSuffix
        : options.millisecondsSuffixPlural
    }`
  }

  /*
   * Return
   */

  return {
    inDays,
    inHours,
    inMilliseconds,
    inMinutes,
    inMonths,
    inSeconds,
    inWeeks,
    inYears,

    formatted
  }
}
