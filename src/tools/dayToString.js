import dayjs from 'dayjs';

const dayToString = (day, format) => {
  return dayjs()
    .day(day)
    .format(format || 'dddd');
};

export default dayToString;
