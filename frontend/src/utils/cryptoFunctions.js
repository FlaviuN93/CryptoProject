export const calculatePercent = (currentMonth, previousMonth) => {
  const result = (currentMonth - previousMonth) / previousMonth;
  return result * 100;
};
// return Math.abs(
//   (currentMonth / previousMonth) *
//     100 *
//     Math.sign(currentMonth - previousMonth)
// );
