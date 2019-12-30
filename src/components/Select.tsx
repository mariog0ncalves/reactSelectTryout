import React, { Component } from "react";
import Select from "react-select";
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const options = async () =>( 
  await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((jsonData) => {
      let asd = [];
      for (var k in jsonData) {
        asd.push({value: jsonData[k].id, label:jsonData[k].title})
      }
      // jsonData is parsed json object received from url
      console.log(asd);
      
      return asd;
    })
    .catch((error) => {
      // handle your errors here
      console.error(error)
    }));
    


    console.log(options);
const App = (props: any) => (
  
  
  
  // const {className, multiple, disabled, searchable, name, options, placeholder, onChange, emptySelectMsg, value, autoFocus, classNamePrefix } = props;

  <Select
    className        =  {props.className}
    isMulti          =  {props.multiple}
    isDisabled       =  {props.disabled}
    searchable       =  {props.isSearchable}
    name             =  {props.name}
    options          =  {props.options}
    placeholder      =  {props.placeholder}
    onChange         =  {props.onChange}
    noOptionsMessage =  {props.emptySelectMsg}
    value            =  {props.value}
    autoFocus        =  {props.autoFocus}
    classNamePrefix  =  {props.classNamePrefix}
    components       =  {animatedComponents}
  />
);
export default App;
