/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { fireEvent, render } from "@testing-library/react";
import LBDropdown from "../index";

describe("Test LBDropdwon", () => {
  it("Test Render Options", async () => {
    const options = ["options 1", "options 2"];
    const setOptions = jest.fn();
    const value = "";
    const setValue = jest.fn();

    const { container } = render(
      <LBDropdown
        options={options}
        setOptions={setOptions}
        value={value}
        setValue={setValue}
      />
    );
    let textfield = container.querySelector("#textfield") as HTMLInputElement;
    let dropdownOptions = container.querySelectorAll(".dropdown-option");
    //* Dropdown Closed
    expect(dropdownOptions.length).toEqual(0);
    expect(textfield.value).toEqual("");

    //* Dropdown Opened
    fireEvent.focus(textfield);
    dropdownOptions = container.querySelectorAll(".dropdown-option");
    dropdownOptions.forEach((item, index) => {
      expect(item.textContent).toEqual(options[index]);
    });
  });
});
