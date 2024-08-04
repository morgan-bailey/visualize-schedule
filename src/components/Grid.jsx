import React from 'react';
import Day from './Day';
import dayIterator from '../tools/dayIterator';

const Grid = ({ data, bounds, marginBottom }) => {
  const getBlocksByDay = (day) => data.filter((entry) => entry.day === day);

  const days = dayIterator(bounds, (day) => {
    const blocks = getBlocksByDay(day);
    return <Day key={day} day={day} gridBounds={bounds} scheduledBlocks={blocks} />;
  });

  return (
    <div className='grid' style={{ marginBottom: `${marginBottom}px` }}>
      {days}
    </div>
  );
};

export default Grid;
