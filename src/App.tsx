import { useState } from "react";
import LBDropdown from "components/LBDropdwon";
import "./index.scss";

const App = () => {
  //* Initial Data For Dropdown
  const initial = ["Education 🎓", "Science 🧪", "Art 🎭", "Sport ⚽"];

  //* States
  const [options, setoptions] = useState<string[]>(initial);
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <LBDropdown
        options={options}
        setOptions={setoptions}
        value={value}
        setValue={setValue}
        placeholder={"Please Select Or Write"}
      />

      <h6 className="author">
        Cody By{" "}
        <a
          href="https://www.linkedin.com/in/amirhossein-moghadam-5b72811a9/"
          target="_blank"
          rel="noreferrer"
        >
          Amirhossein Moghadam
        </a>{" "}
        With 💖
      </h6>
    </div>
  );
};

export default App;
