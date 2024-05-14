import { ComponentType, SyntheticEvent, useState } from "react";
import { LBDropdownProps, WithDropDownActions } from "../types";

const withDropDownActions =
  (WrappedComponent: ComponentType<LBDropdownProps & WithDropDownActions>) =>
  (props: LBDropdownProps) => {
    //* States
    const [openDropDown, setOpenDropDown] = useState<boolean>(false);

    //* Event Functions
    const onFocus = () => {
      setOpenDropDown(true);
    };

    return (
      <WrappedComponent
        {...props}
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
        onFocus={onFocus}
      />
    );
  };

export default withDropDownActions;
