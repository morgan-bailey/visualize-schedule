import React, { useContext } from 'react';
import dayToString, { dayToAbbrString } from '../../tools/dayToString';
import useMeasurements from './useMeasurements';
import BreakpointContext from '../BreakpointContext/BreakpointContext';
import dayIterator from '../../tools/dayIterator';

const DayHeadings = ({ bounds, onHeightChange }) => {
  const { dayHeadingsRef } = useMeasurements({ onHeightChange });
  const { xxs, xs, sm } = useContext(BreakpointContext);

  const days = dayIterator(bounds, (day) => {
    let text;
    if (xxs) {
      text = '';
    } else if (xs || sm) {
      text = dayToAbbrString(day);
    } else {
      text = dayToString(day);
    }
    return (
      <div key={day} className='day-heading'>
        {text}
      </div>
    );
  });

  return (
    <div ref={dayHeadingsRef} className='day-headings'>
      {days}
    </div>
  );
};

export default DayHeadings;
