import React, { useState, useEffect } from 'react';
import { useMeasure } from 'react-use';
import BreakpointContext from './BreakpointContext';

const BreakpointContextProvider = ({ children }) => {
  const [ref, { width, height }] = useMeasure();

  const [breakpoints, setBreakpoints] = useState({});

  useEffect(() => {
    const x = [0, 200, 300, 400];
    const y = [0, 120, 240, 360];

    const md = width >= x[3] && height >= y[3];
    const sm = !md && width >= x[2] && height >= y[2];
    const xs = !md && !sm && width >= x[1] && height >= y[1];
    const xxs = !md && !sm && !xs;

    setBreakpoints({ xxs, xs, sm, md });
  }, [width, height]);

  return <BreakpointContext.Provider value={{ ref, ...breakpoints }}>{children}</BreakpointContext.Provider>;
};

export default BreakpointContextProvider;
