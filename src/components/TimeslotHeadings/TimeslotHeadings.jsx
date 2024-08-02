import React, { useContext } from 'react';
import getTimeString from '../../tools/getTimeString';
import useMeasurements from './useMeasurements';
import BreakpointContext from '../BreakpointContext/BreakpointContext';

const TimeslotHeadings = ({ bounds, dayHeadingsHeight, onTextHeightChange }) => {
  const { firstTimeslotHeadingRef, bufferHeight } = useMeasurements({ onTextHeightChange, dayHeadingsHeight });

  const { xxs } = useContext(BreakpointContext);

  const { firstTime, numTimeslots } = bounds;

  const timeslotHeadings = [];
  for (let i = 0; i <= numTimeslots; i = i + 1) {
    let text;
    if (xxs) {
      text = '';
    } else {
      const timeslotHeadingTime = new Date(firstTime);
      timeslotHeadingTime.setHours(timeslotHeadingTime.getHours() + i);
      text = getTimeString(timeslotHeadingTime);
    }
    timeslotHeadings.push(
      <div key={i} ref={i === 0 ? firstTimeslotHeadingRef : null} className='timeslot-heading'>
        {text}
      </div>,
    );
  }

  return (
    <div className='timeslot-headings-column-wrapper'>
      <div className='buffer' style={{ height: `${bufferHeight}px` }}></div>
      <div className='timeslot-headings' style={{ height: '100%' }}>
        {timeslotHeadings}
      </div>
    </div>
  );
};

export default TimeslotHeadings;
