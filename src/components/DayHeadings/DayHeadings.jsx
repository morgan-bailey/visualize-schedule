import React, { useContext } from 'react';
import dayToString, { dayToAbbrString } from '../../tools/dayToString';
import useMeasurements from './useMeasurements';
import BreakpointContext from '../BreakpointContext/BreakpointContext';
import dayIterator from '../../tools/dayIterator';
import ConfigContext from '../ConfigContext/ConfigContext';

const DayHeadings = ({ bounds, onHeightChange }) => {
  const { dayHeadingsRef } = useMeasurements({ onHeightChange });
  const { xxs, xs, sm } = useContext(BreakpointContext);
  const { displayDayHeadings } = useContext(ConfigContext);

  const days = dayIterator(bounds, (day) => {
    let text;
    if (`${displayDayHeadings}`.toLowerCase() === 'long') {
      text = dayToString(day);
    } else if (`${displayDayHeadings}`.toLowerCase() === 'short' || (displayDayHeadings === true && xxs) || xs || sm) {
      text = dayToAbbrString(day);
    } else if (displayDayHeadings === false || xxs) {
      text = '';
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
