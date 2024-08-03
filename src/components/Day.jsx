import React, { useContext } from 'react';
import { useMeasure } from 'react-use';
import BreakpointContext from './BreakpointContext/BreakpointContext';

const Day = ({ day, gridBounds, scheduledBlocks }) => {
  const { xxs, xs } = useContext(BreakpointContext);

  const { firstTime, numTimeslots } = gridBounds;

  const [ref, { width, height }] = useMeasure();
  const MARGINS_X = 5;
  const PADDING_X = 5;
  const computedWidth = Math.floor(width - 2 * MARGINS_X - 2 * PADDING_X);

  const timeslots = [];
  for (let i = 0; i < numTimeslots; i = i + 1) {
    timeslots.push(<div key={i} className='timeslot'></div>);
  }

  const getTopPosition = (startTime) => {
    const hourDifferenceToMinutes = 60 * (startTime.getHours() - firstTime.getHours());
    const minuteDifference = hourDifferenceToMinutes + startTime.getMinutes();
    const totalTimeslotMinutes = numTimeslots * 60;
    return Math.floor((minuteDifference * height) / totalTimeslotMinutes);
  };

  const getHeight = (startTime, endTime) => {
    const PADDING = 5;
    const hourDifferenceToMinutes = 60 * (endTime.getHours() - startTime.getHours());
    const minuteDifference = hourDifferenceToMinutes + endTime.getMinutes() - startTime.getMinutes();
    const totalTimeslotMinutes = numTimeslots * 60;
    return Math.floor((minuteDifference * height) / totalTimeslotMinutes - 2 * PADDING);
  };

  const blocks = scheduledBlocks.map(({ startTime, endTime, label, color }, i) => {
    const top = getTopPosition(startTime);
    const height = getHeight(startTime, endTime);
    const style = {
      top: `${top}px`,
      height: `${height}px`,
      width: `${computedWidth}px`,
      backgroundColor: color,
    };
    const text = xxs || xs ? '' : label;
    return (
      <div key={i} className='schedule-block' style={style}>
        {text}
      </div>
    );
  });

  return (
    <div key={day} ref={ref} className='day'>
      <div className='timeslots'>{timeslots}</div>
      <div>{blocks}</div>
    </div>
  );
};

export default Day;
