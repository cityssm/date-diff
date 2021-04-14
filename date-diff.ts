export const dateDiff = (fromDate: Date, toDate: Date = new Date()) => {

  /*
   * Constants
   */

  const decimalPrecision = 1;

  const divisors = {
    days: 24 * 60 * 60 * 1000,
    hours: 60 * 60 * 1000,
    minutes: 60 * 1000,
    seconds: 1000
  };

  /*
   * Helpers
   */

  const endOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  };

  const endOfYear = (date: Date) => {
    return new Date(date.getFullYear() + 1, 0, 0);
  };

  const beginOfYear = (date: Date) => {
    return new Date(date.getFullYear(), 0, 0);
  };

  const dayOfYear = (date: Date) => {
    return (date.getTime() - beginOfYear(date).getTime()) / divisors.days;
  };

  const daysInYear = (date: Date) => {
    return (endOfYear(date).getTime() - beginOfYear(date).getTime()) / divisors.days;
  };

  const roundToPrecision = (n: number) => {
    return parseFloat(n.toFixed(decimalPrecision));
  };

  /*
   * Differences
   */

  const inMilliseconds = Math.floor(toDate.getTime() - fromDate.getTime());

  const inSeconds = roundToPrecision(inMilliseconds / divisors.seconds);

  const inMinutes = roundToPrecision(inMilliseconds / divisors.minutes);

  const inHours = roundToPrecision(inMilliseconds / divisors.hours);

  const inDays = roundToPrecision(inMilliseconds / divisors.days);

  const inWeeks = roundToPrecision(inDays / 7);

  const inMonths = (() => {
    let ret: number;
    ret = (toDate.getFullYear() - fromDate.getFullYear()) * 12;
    ret += toDate.getMonth() - fromDate.getMonth();
    const eom = endOfMonth(fromDate).getDate();
    ret += (toDate.getDate() / eom) - (fromDate.getDate() / eom);
    return roundToPrecision(ret);
  })();

  const inYears = (() => {
    let ret: number;
    ret = toDate.getFullYear() - fromDate.getFullYear();
    ret += (dayOfYear(toDate) - dayOfYear(fromDate)) / daysInYear(fromDate);
    return roundToPrecision(ret);
  })();

  /*
   * Formatted
   */

  let formatted = "";

  if (inYears >= 1) {
    formatted = inYears.toString() +
      " year" +
      (inYears === 1 ? "" : "s");

  } else if (inMonths >= 1) {
    formatted = inMonths.toString() +
      " month" +
      (inMonths === 1 ? "" : "s");

  } else if (inWeeks >= 1) {
    formatted = inWeeks.toString() +
      " week" +
      (inWeeks === 1 ? "" : "s");

  } else if (inDays >= 1) {
    formatted = inDays.toString() +
      " day" +
      (inDays === 1 ? "" : "s");

  } else if (inHours >= 1) {
    formatted = inHours.toString() +
      " hour" +
      (inHours === 1 ? "" : "s");

  } else if (inMinutes >= 1) {
    formatted = inMinutes.toString() +
      " minute" +
      (inMinutes === 1 ? "" : "s");

  } else if (inSeconds >= 1) {
    formatted = inSeconds.toString() +
      " second" +
      (inSeconds === 1 ? "" : "s");

  } else {
    formatted = inMilliseconds.toString() +
      " millisecond" +
      (inMilliseconds === 1 ? "" : "s");
  }

  /*
   * Return
   */

  return {
    inMilliseconds,
    inSeconds,
    inMinutes,
    inHours,
    inDays,
    inWeeks,
    inMonths,
    inYears,
    formatted
  };
};
