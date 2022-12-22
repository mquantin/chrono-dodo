import { CheckIcon } from '@heroicons/react/20/solid';
import { Listbox } from '@headlessui/react';
import { Option } from './types';

type SelectOptionProps = {
  option: Option;
};

const SelectOption = ({ option }: SelectOptionProps) => {
  const { name } = option;
  return (
    <Listbox.Option
      className={({ active }) =>
        `relative cursor-default select-none py-2 pl-10 pr-4 ${
          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
        }`
      }
      value={option}
    >
      {({ selected }) => (
        <>
          <span className={`flex truncate ${selected ? 'font-medium' : 'font-normal'}`}>{name}</span>
          {selected ? (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  );
};

export default SelectOption;
