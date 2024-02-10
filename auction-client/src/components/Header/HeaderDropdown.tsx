import classNames from "classnames";
import { Button } from "../Button";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import dropdown from "../../images/icons/dropdown.svg";
import { categories } from "src/utils/mockData";

export const HeaderDropdown: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef(null);

  const handleClickOutside = () => {
    setOpenDropdown(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className={classNames("dropdown", { open: openDropdown })} ref={ref}>
      <div
        className="dropdown__main-option"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <p>{selected || "Усі категорії"}</p>
        <img className="dropdown__icon" src={dropdown} alt="dropdown icon" />
      </div>

      <ul className="dropdown__menu">
        {categories.map((str, i) => (
          <li key={i}>
            <Button
              className="dropdown__menu__item"
              onClick={() => {
                setOpenDropdown(false);
                setSelected(str);
              }}
              role="link"
              to="#"
            >
              <p>{str}</p>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
