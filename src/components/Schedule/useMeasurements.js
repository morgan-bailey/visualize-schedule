import { useState } from 'react';

const useMeasurements = () => {
  const [dayHeadingsHeight, setDayHeadingsHeight] = useState();
  const handleSetDayHeadingsHeight = (rawHeight) => {
    const SASS_BUFFER_VAR = 5;
    const heightWithPadding = rawHeight + SASS_BUFFER_VAR;
    setDayHeadingsHeight(heightWithPadding);
  };

  const [timeslotHeadingTextHeight, setTimeslotHeadingTextHeight] = useState();

  const gridMarginBottom = timeslotHeadingTextHeight / 2;

  return {
    dayHeadingsHeight,
    gridMarginBottom,
    setDayHeadingsHeight: handleSetDayHeadingsHeight,
    setTimeslotHeadingTextHeight,
  };
};

export default useMeasurements;
