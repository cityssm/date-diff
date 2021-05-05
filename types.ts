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


export type DateDiffOptions = {
  decimalPrecision?: number;
};
