import React from 'react';
import Day from './Day';

const Grid = ({ data, bounds, marginBottom }) => {
  const { firstDay, lastDay } = bounds;

  const getBlocksByDay = (day) => data.filter((entry) => entry.day === day);

  const days = [];
  for (let day = firstDay; day <= lastDay; day = day + 1) {
    const blocks = getBlocksByDay(day);
    days.push(<Day key={day} day={day} gridBounds={bounds} scheduledBlocks={blocks} />);
  }

  return (
    <div className='grid' style={{ marginBottom: `${marginBottom}px` }}>
      {days}
    </div>
  );
};

export default Grid;
