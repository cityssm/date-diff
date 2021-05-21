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
