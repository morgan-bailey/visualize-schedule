const dayIterator = (bounds, callback) => {
  const { firstDay, lastDay, firstDayOfWeek } = bounds;
  const isShifting = firstDayOfWeek > firstDay;
  const days = [];
  let day = firstDayOfWeek;
  do {
    const item = callback(day);
    days.push(item);
    day = (day + 1) % 7;
  } while ((isShifting && day !== firstDayOfWeek) || (!isShifting && day !== 0 && day <= lastDay));
  return days;
};

export default dayIterator;
