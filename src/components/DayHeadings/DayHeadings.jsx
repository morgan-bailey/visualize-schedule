import React, { useContext } from 'react';
import dayIterator from '../../tools/dayIterator';
import dayToString from '../../tools/dayToString';
import BreakpointContext from '../BreakpointContext/BreakpointContext';
import ConfigContext from '../ConfigContext/ConfigContext';
import useMeasurements from './useMeasurements';

const DayHeadings = ({ bounds, onHeightChange }) => {
  const { dayHeadingsRef } = useMeasurements({ onHeightChange });
  const { xxs, xs, sm } = useContext(BreakpointContext);
  const { displayDayHeadings, dayFormat } = useContext(ConfigContext);

  const days = dayIterator(bounds, (day) => {
    let text;

    if (xxs && !displayDayHeadings) {
      text = '';
    } else {
      let format;
      if (dayFormat) {
        format = dayFormat;
      } else if (xxs || xs || sm) {
        format = 'dd';
      } else {
        format = 'dddd';
      }
      text = dayToString(day, format);
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
