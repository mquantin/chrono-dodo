import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid';

type ExpiredTimerProps = {
  handleRestart: () => void;
};

export const ExpiredTimer = ({ handleRestart }: ExpiredTimerProps) => {
  return (
    <div className="flex flex-col gap-1 text-center">
      <p className="text-2xl">Terminé</p>
      <ArrowUturnLeftIcon className="h-10" onClick={handleRestart} />
    </div>
  );
};
