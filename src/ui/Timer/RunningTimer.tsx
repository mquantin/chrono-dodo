import { useTimer } from 'react-timer-hook';
import { PauseIcon, PlayIcon } from '@heroicons/react/20/solid';
import { getExpiryDuration } from '../../utils/getExpiryDuration';
import NumericDisplay from './NumericDisplay';
import TimerTransitionWrapper from './TimerTransitionWrapper';

const DEFAULT_EXPIRY_DURATION = 600;

type TimerProps = {
  autoStart?: boolean;
  expiryDuration?: number;
  onExpire: () => void;
};
export const RunningTimer = ({ autoStart = false, expiryDuration = DEFAULT_EXPIRY_DURATION, onExpire }: TimerProps) => {
  const { seconds, minutes, hours, isRunning, pause, start } = useTimer({
    autoStart,
    expiryTimestamp: getExpiryDuration(expiryDuration),
    onExpire,
  });

  return (
    <div className="flex flex-col gap-1 text-center">
      <NumericDisplay hours={hours} minutes={minutes} seconds={seconds} />
      <div className=" relative flex flex-row justify-center gap-3 h-[40px]">
        <TimerTransitionWrapper show={!isRunning}>
          <PlayIcon className="h-10" onClick={start} />
        </TimerTransitionWrapper>
        <TimerTransitionWrapper show={isRunning}>
          <PauseIcon className="h-10" onClick={pause} />
        </TimerTransitionWrapper>
      </div>
    </div>
  );
};
