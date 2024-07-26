import { useEffect } from 'react';
import { useMeasure } from 'react-use';

const useMeasurements = ({ onTextHeightChange, dayHeadingsHeight }) => {
  const [firstTimeslotHeadingRef, { height: timeslotHeadingTextHeight }] = useMeasure();

  useEffect(() => {
    onTextHeightChange(timeslotHeadingTextHeight);
  }, [timeslotHeadingTextHeight, onTextHeightChange]);

  const bufferHeight = dayHeadingsHeight - timeslotHeadingTextHeight / 2;

  return { firstTimeslotHeadingRef, bufferHeight };
};

export default useMeasurements;
