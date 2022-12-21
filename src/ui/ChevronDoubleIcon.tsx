import {IconType,IconBaseProps} from "react-icons/lib";
import {
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
  BiChevronUp,
  BsChevronCompactLeft,
  BsChevronCompactRight
} from "react-icons/all";
import {useToggle} from "../hooks";

type ChevronUpDownIconProps = IconBaseProps & {defaultIsOpen?:boolean}

export const ChevronDoubleIcon = ({defaultIsOpen, ...rest}:ChevronUpDownIconProps) => {
  const[isOpened, toggle]=useToggle(defaultIsOpen)
  return <div className="flex"><BsChevronCompactLeft onClick={toggle} {...rest}/><BsChevronCompactRight onClick={toggle} {...rest}/></div>

}