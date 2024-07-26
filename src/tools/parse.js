const parseTime = (timeString) => {
  const [hours, minutes] = timeString.split(':').map((x) => parseInt(x, 10));
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0);
  return date;
};

const timeslotComparator = (a, b) => {
  if (a.day === b.day) {
    const aHours = a.startTime.getHours();
    const bHours = b.startTime.getHours();
    if (aHours === bHours) {
      return a.startTime.getMinutes() - b.startTime.getMinutes();
    } else {
      return aHours - bHours;
    }
  } else {
    return a.day - b.day;
  }
};

const parse = (data) =>
  data
    .map(({ day, startTime, endTime, ...rest }) => ({
      day: parseInt(day, 10),
      startTime: parseTime(startTime),
      endTime: parseTime(endTime),
      ...rest,
    }))
    .sort(timeslotComparator);

export default parse;
