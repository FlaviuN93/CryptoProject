exports.trends = (currentMonth, compareMonth) => {
  console.log(currentMonth, compareMonth);
  return Math.abs(
    (currentMonth / compareMonth) * 100 * Math.sign(currentMonth - compareMonth)
  );
};
