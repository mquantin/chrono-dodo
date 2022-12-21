import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import {SelectOption} from "./types";
import {isEmpty, map} from "lodash"

const DEFAULT_OPTION:SelectOption = { id: null, name:"", unavailable:true}

type SelectProps = {
  options: SelectOption[]
}

export const Select = ({options}:SelectProps) =>  {
  const [selectedPerson, setSelectedPerson] = useState(isEmpty(options)? DEFAULT_OPTION: options[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button>{selectedPerson.name}</Listbox.Button>
      <Listbox.Options>
        {map(options,(option) => (
          <Listbox.Option
            key={option.id}
            value={option}
            disabled={!!option?.unavailable}
          >
            {option.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}