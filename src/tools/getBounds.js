const getBounds = (data) => {
  let firstDay, lastDay, firstTime, lastTime;
  data.forEach(({ startTime, endTime, day }) => {
    if (!firstDay || day < firstDay) {
      firstDay = day;
    }
    if (!lastDay || day > lastDay) {
      lastDay = day;
    }
    if (!firstTime || startTime < firstTime) {
      firstTime = startTime;
    }
    if (!lastTime || endTime > lastTime) {
      lastTime = endTime;
    }
  });
  const numDays = firstDay && lastDay && lastDay - firstDay + 1;
  const numTimeslots = firstTime && lastTime && lastTime.getHours() - firstTime.getHours() + 1;
  return { firstDay, lastDay, numDays, firstTime, lastTime, numTimeslots };
};

export default getBounds;
