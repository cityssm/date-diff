import type * as types from "./types";

export const divisors: types.Divisors = {
  days: 24 * 60 * 60 * 1000,
  hours: 60 * 60 * 1000,
  minutes: 60 * 1000,
  seconds: 1000
};

const endOfYear = (date: Date) => {
  return new Date(date.getFullYear() + 1, 0, 0);
};

const beginOfYear = (date: Date) => {
  return new Date(date.getFullYear(), 0, 0);
};

export const endOfMonth: types.EndOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

export const dayOfYear: types.DayOfYear = (date: Date) => {
  return (date.getTime() - beginOfYear(date).getTime()) / divisors.days;
};

export const daysInYear: types.DaysInYear = (date: Date) => {
  return (endOfYear(date).getTime() - beginOfYear(date).getTime()) / divisors.days;
};

export const roundToPrecision: types.RoundToPrecision = (n: number, decimalPrecision: number) => {
  return Number.parseFloat(n.toFixed(decimalPrecision));
};
