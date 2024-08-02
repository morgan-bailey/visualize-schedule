import classNames from 'classnames';
import React from 'react';
import BreakpointContext from '../BreakpointContext/BreakpointContext';
import BreakpointContextProvider from '../BreakpointContext/BreakpointContextProvider';
import Schedule from './Schedule';

const ScheduleWrapper = (props) => {
  return (
    <BreakpointContextProvider>
      <BreakpointContext.Consumer>
        {({ ref, ...breakpoints }) => {
          return (
            <div ref={ref} className={classNames('schedule', { ...breakpoints })}>
              <Schedule {...props} />
            </div>
          );
        }}
      </BreakpointContext.Consumer>
    </BreakpointContextProvider>
  );
};

export default ScheduleWrapper;
