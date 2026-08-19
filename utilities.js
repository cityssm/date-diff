import { millisecondsInOneDay } from '@cityssm/to-millis';
function endOfYear(date) {
    return new Date(date.getFullYear() + 1, 0, 0);
}
function beginOfYear(date) {
    return new Date(date.getFullYear(), 0, 0);
}
export function endOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
export function dayOfYear(date) {
    return (date.getTime() - beginOfYear(date).getTime()) / millisecondsInOneDay;
}
export function daysInYear(date) {
    return ((endOfYear(date).getTime() - beginOfYear(date).getTime()) /
        millisecondsInOneDay);
}
export function roundToPrecision(n, decimalPrecision) {
    return Number.parseFloat(n.toFixed(decimalPrecision));
}
