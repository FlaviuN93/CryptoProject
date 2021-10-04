export const calculatePercent = (currentMonth, previousMonth) => {
  const result = (currentMonth - previousMonth) / previousMonth;
  return result * 100;
};
