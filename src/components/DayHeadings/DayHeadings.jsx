import React from 'react';
import dayToString from '../../tools/dayToString';
import useMeasurements from './useMeasurements';

const DayHeadings = ({ bounds, onHeightChange }) => {
  const { dayHeadingsRef } = useMeasurements({ onHeightChange });

  const { firstDay, lastDay } = bounds;
  const days = [];
  for (let day = firstDay; day <= lastDay; day = day + 1) {
    days.push(<div className='day-heading'>{dayToString(day)}</div>);
  }
  return (
    <div ref={dayHeadingsRef} className='day-headings'>
      {days}
    </div>
  );
};

export default DayHeadings;
