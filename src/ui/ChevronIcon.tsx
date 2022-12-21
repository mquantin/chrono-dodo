import {IconBaseProps} from "react-icons/lib";

import {BiChevronDown, BiChevronLeft, BiChevronRight, BiChevronsDown, BiChevronUp} from "react-icons/all";

type ChevronUpDownIconProps = IconBaseProps & {direction: "top"|"right"|"down"|"left"}

export const ChevronIcon = ({direction="left", ...rest}:ChevronUpDownIconProps) => {

  switch (direction) {
    case 'top':
      return <BiChevronUp {...rest}/>
    case 'right':
      return <BiChevronRight {...rest}/>
    case 'down':
      return <BiChevronDown {...rest}/>
    default:
      return <BiChevronLeft {...rest}/>
  }

}