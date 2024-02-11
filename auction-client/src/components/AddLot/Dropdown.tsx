import classNames from "classnames";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import dropdown from "../../images/icons/dropdown.svg";
import { Button } from "../Button";

interface Props {
  items: string[];
  itemName: string;
  className?: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const Dropdown: React.FC<Props> = ({
  items,
  itemName,
  className = "",
  selected,
  setSelected,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setOpenDropdown(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div
      className={classNames("dropdown", className, { open: openDropdown })}
      ref={ref}
    >
      <div
        className="dropdown__main-option"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <p>{selected || "Виберіть " + itemName}</p>
        <img className="dropdown__icon" src={dropdown} alt="dropdown icon" />
      </div>
      <ul className="dropdown__menu">
        {items.map((str, i) => (
          <li key={i}>
            <Button
              className="dropdown__menu__item"
              type="button"
              onClick={() => {
                setOpenDropdown(false);
                setSelected(str);
              }}
            >
              <p>{str}</p>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
