import * as React from "react";
import Routes from "./routes";
import Select from "./components/Select";
import style from "./components/style";

const options = require("./dumbData.json");

class App extends React.Component {
  options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];

  render(): any {
    return (
      <Select
        className="iowqeio asd"
        multiple
        disabled={false}
        searchable
        name="ASD"
        options={options}
        placeholder="ALOOOO"
        emptySelectMsg="nothing to see here"
        style={style}
      />
    );
  }
}
export default App;

// autoFocus - focus the control when it mounts
// className - apply a className to the control
// classNamePrefix - apply classNames to inner elements with the given prefix
// isDisabled - disable the control
// isMulti - allow the user to select multiple values
// isSearchable - allow the user to search for matching options
// name - generate an HTML input with this name, containing the current value
// onChange - subscribe to change events
// options - specify the options the user can select from
// placeholder - change the text displayed when no option is selected
// noOptionsMessage - ({ inputValue: string }) => string | null - Text to display when there are no options
// value - control the current value
