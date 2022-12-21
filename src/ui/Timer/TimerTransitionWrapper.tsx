import { Transition } from '@headlessui/react';
import { PropsWithChildren } from 'react';

type TimerTransitionWrapperProps = PropsWithChildren<{ show?: boolean | undefined }>;

const TimerTransitionWrapper = ({ children, show = false }: TimerTransitionWrapperProps) => {
  return (
    <Transition
      className="absolute"
      show={show}
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
};
export default TimerTransitionWrapper;
