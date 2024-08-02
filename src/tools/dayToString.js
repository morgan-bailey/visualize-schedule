const dayToString = (day) => {
  const fullString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return fullString[day];
};

const dayToAbbrString = (day) => {
  const shortenedString = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  return shortenedString[day];
};

export { dayToAbbrString };
export default dayToString;
