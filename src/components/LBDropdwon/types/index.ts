import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";

export type LBDropdownProps = {
  options: string[];
  setOptions: Dispatch<SetStateAction<string[]>>;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
};

export type WithOnChange = {
  newValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent) => void;
  onSelectOption: (option: string) => void;
};

export type WithDropDownActions = {
  openDropDown: boolean;
  setOpenDropDown: Dispatch<SetStateAction<boolean>>;
  onFocus: () => void;
};
