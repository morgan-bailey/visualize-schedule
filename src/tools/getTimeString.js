import dayjs from 'dayjs';

const getTimeString = (date, format) => {
  return dayjs(date).format(format || 'h:mma');
};

export default getTimeString;
