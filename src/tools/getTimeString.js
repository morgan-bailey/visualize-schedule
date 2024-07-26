const getTimeString = (date) => {
  const hh = date.getHours();
  const mm = ('0' + date.getMinutes()).slice(-2);
  return `${hh}:${mm}`;
};

export default getTimeString;
