import React, { useContext } from 'react';
import getBounds from '../../tools/getBounds';
import parse from '../../tools/parse';
import DayHeadings from '../DayHeadings';
import Grid from '../Grid';
import TimeslotHeadings from '../TimeslotHeadings';
import useMeasurements from './useMeasurements';
import ConfigContext from '../ConfigContext/ConfigContext';

const Schedule = ({ data }) => {
  const { firstDayOfWeek } = useContext(ConfigContext);
  const { dayHeadingsHeight, gridMarginBottom, setDayHeadingsHeight, setTimeslotHeadingTextHeight } = useMeasurements();

  const parsedData = parse(data);
  const bounds = getBounds(parsedData, firstDayOfWeek);
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
