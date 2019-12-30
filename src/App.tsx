import * as React from "react";
import Routes from "./routes";
import Select from "./components/Select";

const options = require('./dumbData.json');
// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];



const optionsAsync = async () =>( 
await fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((jsonData) => {
    let asd = [];
    for (var k in jsonData) {
      asd.push({value: jsonData[k].id, label:jsonData[k].title})
    }
    // jsonData is parsed json object received from url
    console.log(asd)
    return asd;
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  }));

  optionsAsync();
  
class App extends React.Component {

   options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  render() {
   
    return (
     <Select className="iowqeio asd" multiple={true} disabled={false} searchable={true} name="ASD" options={options} placeholder={'ALOOOO'}  emptySelectMsg={'nothing to see here'}/>
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
