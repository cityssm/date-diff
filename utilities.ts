import { millisecondsInOneDay } from '@cityssm/to-millis'

function endOfYear(date: Date): Date {
  return new Date(date.getFullYear() + 1, 0, 0)
}

function beginOfYear(date: Date): Date {
  return new Date(date.getFullYear(), 0, 0)
}

export function endOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

export function dayOfYear(date: Date): number {
  return (date.getTime() - beginOfYear(date).getTime()) / millisecondsInOneDay
}

export function daysInYear(date: Date): number {
  return (
    (endOfYear(date).getTime() - beginOfYear(date).getTime()) /
    millisecondsInOneDay
  )
}

export function roundToPrecision(n: number, decimalPrecision: number): number {
  return Number.parseFloat(n.toFixed(decimalPrecision))
}
