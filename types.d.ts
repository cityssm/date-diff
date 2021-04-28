export declare type DateDiff = (fromDate: Date, toDate?: Date) => {
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
