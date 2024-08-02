import React, { useContext } from 'react';
import dayToString, { dayToAbbrString } from '../../tools/dayToString';
import useMeasurements from './useMeasurements';
import BreakpointContext from '../BreakpointContext/BreakpointContext';

const DayHeadings = ({ bounds, onHeightChange }) => {
  const { dayHeadingsRef } = useMeasurements({ onHeightChange });
  const { xxs, xs, sm } = useContext(BreakpointContext);

  const { firstDay, lastDay } = bounds;
  const days = [];
  for (let day = firstDay; day <= lastDay; day = day + 1) {
    let text;
    if (xxs) {
      text = '';
    } else if (xs || sm) {
      text = dayToAbbrString(day);
    } else {
      text = dayToString(day);
    }
    days.push(
      <div key={day} className='day-heading'>
        {text}
      </div>,
    );
  }
  return (
    <div ref={dayHeadingsRef} className='day-headings'>
      {days}
    </div>
  );
};

export default DayHeadings;
