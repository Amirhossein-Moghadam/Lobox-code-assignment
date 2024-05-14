import { ChangeEvent, ComponentType, KeyboardEvent, useState } from "react";
import { LBDropdownProps, WithDropDownActions, WithOnChange } from "../types";

const withOnChange =
  (
    WrappedComponent: ComponentType<
      LBDropdownProps & WithOnChange & WithDropDownActions
    >
  ) =>
  (props: LBDropdownProps & WithDropDownActions) => {
    const { options, setOptions, setValue, setOpenDropDown } = props;

    //* States
    const [newValue, setNewValue] = useState<string>("");

    //* Event Functions
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setNewValue(value);
      setValue("");
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      if (key === "Enter" && newValue) {
        if (!options.some((item) => item === newValue)) {
          setOptions((prevState) => [...prevState, newValue]);
        }
      }
      setValue(newValue);
    };

    //* Functions
    const onSelectOption = (option: string) => {
      setValue(option);
      setNewValue("");
      setOpenDropDown(false);
    };

    return (
      <WrappedComponent
        {...props}
        onChange={onChange}
        newValue={newValue}
        onKeyDown={onKeyDown}
        onSelectOption={onSelectOption}
      />
    );
  };

export default withOnChange;
