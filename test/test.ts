/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable sonarjs/no-identical-expressions */

import assert from 'node:assert'
import { describe, it } from 'node:test'

import dateDiff from '../index.js'

// January 1st, 2020
const today = new Date(2020, 1 - 1, 1)

await describe('dateDiff(today, tomorrow)', async () => {
  // January 2nd, 2020
  const tomorrow = new Date(2020, 1 - 1, 2)

  const diff = dateDiff(today, tomorrow)

  await it('will return 1 day', () => {
    assert.strictEqual(diff.inDays, 1)
  })

  await it('will return 24 hours', () => {
    assert.strictEqual(diff.inHours, 24)
  })

  await it('will return 1440 minutes', () => {
    assert.strictEqual(diff.inMinutes, 1440)
  })

  await it('will return 86400 seconds', () => {
    assert.strictEqual(diff.inSeconds, 86_400)
  })

  await it('will return "1 day"', () => {
    assert.strictEqual(diff.formatted, '1 day')
  })
})

await describe('dateDiff(today, twoHoursLater, { decimalPrecision: 2 })', async () => {
  const twoHoursLater = new Date(today.getTime() + 2 * 60 * 60 * 1000)
  const diff = dateDiff(today, twoHoursLater, {
    decimalPrecision: 2
  })

  await it('will return "2 hours"', () => {
    assert.strictEqual(diff.formatted, '2 hours')
  })

  await it('will return two decimal precision on inDays', () => {
    const daysString = diff.inDays.toString()
    assert.ok(daysString.length === 4 && daysString.indexOf('.') === 1)
  })
})

await describe('dateDiff(today, twoHoursLater, { hoursSuffixPlural: "heures" })', async () => {
  const twoHoursLater = new Date(today.getTime() + 2 * 60 * 60 * 1000)
  const diff = dateDiff(today, twoHoursLater, {
    hoursSuffix: 'heure',
    hoursSuffixPlural: 'heures'
  })

  await it('will return "2 heures"', () => {
    assert.strictEqual(diff.formatted, '2 heures')
  })
})

await describe('dateDiff(today, threeWeeksLater)', async () => {
  const threeWeeksLater = new Date(
    today.getTime() + 3 * 7 * 24 * 60 * 60 * 1000
  )
  const diff = dateDiff(today, threeWeeksLater)

  await it('will return "3 weeks"', () => {
    assert.strictEqual(diff.formatted, '3 weeks')
  })
})

await describe('dateDiff(today, fourMonthsLater)', async () => {
  const fourMonthsLater = new Date(today)
  fourMonthsLater.setMonth(fourMonthsLater.getMonth() + 4)

  const diff = dateDiff(today, fourMonthsLater)

  await it('will return "4 months"', () => {
    assert.strictEqual(diff.formatted, '4 months')
  })
})

await describe('dateDiff(today, twelveMinutesLater)', async () => {
  const twelveMinutesLater = new Date(today.getTime() + 12 * 60 * 1000)
  const diff = dateDiff(today, twelveMinutesLater)

  await it('will return "12 minutes"', () => {
    assert.strictEqual(diff.formatted, '12 minutes')
  })
})

await describe('dateDiff(today, fiftySecondsLater)', async () => {
  const fiftySecondsLater = new Date(today.getTime() + 50 * 1000)
  const diff = dateDiff(today, fiftySecondsLater)

  await it('will return "50 seconds"', () => {
    assert.strictEqual(diff.formatted, '50 seconds')
  })
})

await describe('dateDiff(today, hundredMillisecondsLater)', async () => {
  const hundredMillisecondsLater = new Date(today.getTime() + 100)
  const diff = dateDiff(today, hundredMillisecondsLater)

  await it('will return "100 milliseconds"', () => {
    assert.strictEqual(diff.formatted, '100 milliseconds')
  })
})

await describe('dateDiff(today, nextYear)', async () => {
  // January 1st, 2021
  const nextYear = new Date(2021, 1 - 1, 1)

  const diff = dateDiff(today, nextYear)

  await it('will return 366 days', () => {
    assert.strictEqual(diff.inDays, 366)
  })

  await it('will return 52 weeks', () => {
    assert.strictEqual(Math.floor(diff.inWeeks), 52)
  })

  await it('will return 12 months', () => {
    assert.strictEqual(diff.inMonths, 12)
  })

  await it('will return 1 year', () => {
    assert.strictEqual(diff.inYears, 1)
  })

  await it('will return "1 year"', () => {
    assert.strictEqual(diff.formatted, '1 year')
  })
})
