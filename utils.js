export const divisors = {
    days: 24 * 60 * 60 * 1000,
    hours: 60 * 60 * 1000,
    minutes: 60 * 1000,
    seconds: 1000
};
export const endOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};
export const endOfYear = (date) => {
    return new Date(date.getFullYear() + 1, 0, 0);
};
export const beginOfYear = (date) => {
    return new Date(date.getFullYear(), 0, 0);
};
export const dayOfYear = (date) => {
    return (date.getTime() - beginOfYear(date).getTime()) / divisors.days;
};
export const daysInYear = (date) => {
    return (endOfYear(date).getTime() - beginOfYear(date).getTime()) / divisors.days;
};
export const roundToPrecision = (n, decimalPrecision) => {
    return parseFloat(n.toFixed(decimalPrecision));
};
