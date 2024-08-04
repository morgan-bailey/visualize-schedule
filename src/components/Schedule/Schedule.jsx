import React from 'react';
import getBounds from '../../tools/getBounds';
import parse from '../../tools/parse';
import DayHeadings from '../DayHeadings';
import Grid from '../Grid';
import TimeslotHeadings from '../TimeslotHeadings';
import useMeasurements from './useMeasurements';

const Schedule = ({ data, firstDayOfWeek }) => {
  const { dayHeadingsHeight, gridMarginBottom, setDayHeadingsHeight, setTimeslotHeadingTextHeight } = useMeasurements();

  const parsedData = parse(data);
  const parsedFirstDayOfWeek = firstDayOfWeek ? parseInt(firstDayOfWeek, 10) : firstDayOfWeek;
  const bounds = getBounds(parsedData, parsedFirstDayOfWeek);
  return (
    <>
      <TimeslotHeadings
        bounds={bounds}
        dayHeadingsHeight={dayHeadingsHeight}
        onTextHeightChange={setTimeslotHeadingTextHeight}
      />
      <div className='day-headings-grid-column-wrapper'>
        <DayHeadings bounds={bounds} onHeightChange={setDayHeadingsHeight} />
        <Grid data={parsedData} bounds={bounds} marginBottom={gridMarginBottom} />
      </div>
    </>
  );
};

export default Schedule;
