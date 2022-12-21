import { ChevronDownIcon, ChevronRightIcon, ChevronUpDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

type ChevronUpDownIconProps = { direction: 'top' | 'right' | 'down' | 'left' };

export const ChevronIcon = ({ direction = 'left', ...rest }: ChevronUpDownIconProps) => {
  switch (direction) {
    case 'top':
      return <ChevronUpDownIcon {...rest} />;
    case 'right':
      return <ChevronRightIcon {...rest} />;
    case 'down':
      return <ChevronDownIcon {...rest} />;
    default:
      return <ChevronUpIcon {...rest} />;
  }
};
