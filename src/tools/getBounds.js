const getBounds = (data, firstDayOfWeek) => {
  let firstDay, lastDay, firstTime, lastTime;
  data.forEach(({ startTime, endTime, day }) => {
    if (firstDay === undefined || day < firstDay) {
      firstDay = day;
    }
    if (lastDay === undefined || day > lastDay) {
      lastDay = day;
    }
    if (!firstTime || startTime < firstTime) {
      firstTime = startTime;
    }
    if (!lastTime || endTime > lastTime) {
      lastTime = endTime;
    }
  });
  const computedFirstDayOfWeek = firstDayOfWeek === undefined ? firstDay : firstDayOfWeek;
  const numTimeslots = firstTime && lastTime && lastTime.getHours() - firstTime.getHours() + 1;
  return { firstDay, lastDay, firstDayOfWeek: computedFirstDayOfWeek, firstTime, lastTime, numTimeslots };
};

export default getBounds;
