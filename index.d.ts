import type * as types from './types.js';
export declare const defaultOptions: types.DateDiffOptions;
/**
 * Calculates the difference between two dates.
 * @param fromDate - The starting date.
 * @param toDate - The ending date. Defaults to the current date and time.
 * @param dateDiffOptions - Options for formatting the date difference.
 * @returns An object containing the difference in a variety of units and as a formatted string.
 */
export default function dateDiff(fromDate: Date, toDate?: Date, dateDiffOptions?: Partial<types.DateDiffOptions>): types.DateDiffReturn;
