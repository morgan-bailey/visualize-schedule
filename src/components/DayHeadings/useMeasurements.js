import { useEffect } from 'react';
import { useMeasure } from 'react-use';

const useMeasurements = ({ onHeightChange }) => {
  const [dayHeadingsRef, { height }] = useMeasure();

  useEffect(() => {
    onHeightChange(height);
  }, [height, onHeightChange]);

  return { dayHeadingsRef };
};

export default useMeasurements;
