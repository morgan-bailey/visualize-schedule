import React from 'react';
import ConfigContext from './ConfigContext';

const ConfigContextProvider = ({ config, children }) => {
  const { firstDayOfWeek } = config;
  const parsedFirstDayOfWeek = firstDayOfWeek ? parseInt(firstDayOfWeek, 10) : firstDayOfWeek;

  return (
    <ConfigContext.Provider value={{ ...config, firstDayOfWeek: parsedFirstDayOfWeek }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigContextProvider;
