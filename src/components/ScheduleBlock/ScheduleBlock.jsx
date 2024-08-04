import React, { useContext } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import BreakpointContext from '../BreakpointContext/BreakpointContext';

const ScheduleBlock = ({ label, color, top, width, height }) => {
  const { xxs, xs } = useContext(BreakpointContext);

  const style = {
    top: `${top}px`,
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: color,
  };

  if (xxs || xs) {
    return (
      <OverlayTrigger placement='top' delay={{ show: 200, hide: 200 }} overlay={<Tooltip>{label}</Tooltip>}>
        <div className='schedule-block' style={style}></div>
      </OverlayTrigger>
    );
  }

  return (
    <div className='schedule-block' style={style}>
      {label}
    </div>
  );
};

export default ScheduleBlock;
