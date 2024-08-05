import React from 'react';
import { useMeasure } from 'react-use';
import ScheduleBlock from '../ScheduleBlock';

const Day = ({ day, gridBounds, scheduledBlocks }) => {
  const { firstTime, numTimeslots } = gridBounds;

  const [ref, { width, height }] = useMeasure();
  const SCHEDULE_BLOCK_MARGIN_X = 5;
  const SCHEDULE_BLOCK_PADDING_X = 5;
  const computedWidth = Math.round(width - 2 * SCHEDULE_BLOCK_MARGIN_X - 2 * SCHEDULE_BLOCK_PADDING_X);

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

  const timeslots = [];
  for (let i = 0; i < numTimeslots; i = i + 1) {
    timeslots.push(<div key={i} className='timeslot'></div>);
  }

  return (
    <div key={day} ref={ref} className='day'>
      <div className='timeslots'>{timeslots}</div>
      <div>
        {scheduledBlocks.map(({ startTime, endTime, label, color }, i) => (
          <ScheduleBlock
            key={i}
            label={label}
            color={color}
            top={getTopPosition(startTime)}
            width={computedWidth}
            height={getHeight(startTime, endTime)}
          />
        ))}
      </div>
    </div>
  );
};

export default Day;
