export type DateDiffOptions = {
  decimalPrecision?: number;
  yearsSuffix?: string;
  yearsSuffixPlural?: string;
  monthsSuffix?: string;
  monthsSuffixPlural?: string;
  weeksSuffix?: string;
  weeksSuffixPlural?: string;
  daysSuffix?: string;
  daysSuffixPlural?: string;
  hoursSuffix?: string;
  hoursSuffixPlural?: string;
  minutesSuffix?: string;
  minutesSuffixPlural?: string;
  secondsSuffix?: string;
  secondsSuffixPlural?: string;
  millisecondsSuffix?: string;
  millisecondsSuffixPlural?: string;
};

export type DateDiff = (fromDate: Date, toDate?: Date, options?: DateDiffOptions) => {
  inMilliseconds: number;
  inSeconds: number;
  inMinutes: number;
  inHours: number;
  inDays: number;
  inWeeks: number;
  inMonths: number;
  inYears: number;
  formatted: string;
};

export type Divisors = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type EndOfMonth = (date: Date) => Date;

export type DayOfYear = (date: Date) => number;

export type DaysInYear = (date: Date) => number;

export type RoundToPrecision = (n: number, decimalPrecision: number) => number;
