import { useState } from 'react';
import { ExpiredTimer } from './ExpiredTimer';
import { RunningTimer } from './RunningTimer';
const DEFAULT_EXPIRY_DURATION = 600;

type TimerProps = {
  autoStart?: boolean;
  expiryDuration?: number;
};
export const Timer = ({ autoStart = false, expiryDuration = DEFAULT_EXPIRY_DURATION }: TimerProps) => {
  const [isExpired, setIsExpired] = useState(false);
  const handleExpire = () => {
    setIsExpired(true);
  };
  const handleRestart = () => {
    setIsExpired(false);
  };

  return isExpired ? (
    <ExpiredTimer handleRestart={handleRestart} />
  ) : (
    <RunningTimer autoStart={autoStart} expiryDuration={expiryDuration} onExpire={handleExpire} />
  );
};
