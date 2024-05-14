import { FC, useEffect, useRef } from "react";
import clsx from "clsx";
import "./index.scss";
import withOnChange from "./hoc/with-onchange";
import { LBDropdownProps, WithDropDownActions, WithOnChange } from "./types";
import withDropDownActions from "./hoc/with-dropdown-actions";

//* LB -> LoBox
const LBDropdown: FC<LBDropdownProps & WithOnChange & WithDropDownActions> = ({
  options,
  newValue,
  value,
  onChange,
  onKeyDown,
  openDropDown,
  setOpenDropDown,
  onFocus,
  onSelectOption,
  placeholder,
}) => {
  //* Refs
  const ref = useRef<HTMLDivElement>(null);

  //* Close drop down when we `click out side the box` :) Like the slogan of the LoBox team
  const clickOutSide = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpenDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutSide);
    return () => {
      document.removeEventListener("mousedown", clickOutSide);
    };
  }, []);

  //* ////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="root" ref={ref}>
      <div className="textfield-root">
        <input
          id="textfield"
          type="text"
          value={newValue || value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          className="textfield"
          placeholder={placeholder ?? ""}
        />
        <img
          className={clsx("textfield-icon", {
            "textfield-icon-focused": openDropDown,
          })}
          src="/svg/arrow-up.svg"
          alt="arrow-up"
        />
      </div>
      {openDropDown && (
        <div className="dropdown">
          {options.map((option, index) => (
            <div
              className={clsx("dropdown-option", {
                "dropdown-option-selected": (newValue || value) === option,
              })}
              key={index}
              onClick={() => onSelectOption(option)}
            >
              {option}
              {(newValue || value) === option && (
                <img
                  className="dropdown-option-icon-selected"
                  src="/svg/tick.svg"
                  alt="tick"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default withDropDownActions(withOnChange(LBDropdown));
