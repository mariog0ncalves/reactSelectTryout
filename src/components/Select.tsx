/* eslint-disable react/prop-types */
import React, { Component, ReactElement } from "react";
import Select, { Props } from "react-select";
// import SelectBase, { Props as SelectProps } from "react/";
import makeAnimated from "react-select/animated";
import SelectBase, { Props as SelectProps } from "react-select/src/Select";

const animatedComponents = makeAnimated();
// const options = async () =>
//   await fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(jsonData => {
//       let asd = [];
//       for (var k in jsonData) {
//         asd.push({ value: jsonData[k].id, label: jsonData[k].title });
//       }
//       // jsonData is parsed json object received from url
//       console.log(asd);

//       return asd;
//     })
//     .catch(error => {
//       // handle your errors here
//       console.error(error);
//     });
// console.log(options);

// export interface SelectInterface {
//   className: string;
//   multiple?: boolean;
//   disabled?: boolean;
//   searchable?: boolean;
//   options?: { value: string | number; label: string };
//   placeholder?: string;
//   onChange: () => void;
//   name: string;
//   emptySelectMsg?: string;
//   value?: string | number | boolean;
//   autoFocus?: boolean;
//   classNamePrefix?: string;
// }

// type OptionType = { [arg1: string]: any };
// type OptionsType = Array<OptionType>;

// type GroupType = {
//   [arg1: string]: any; // group label
//   options: OptionsType;
// };

// type ValueType = OptionType | OptionsType | null | void;

// type CommonProps = {
//   clearValue: () => void;
//   getStyles: (arg0: string, arg1: any) => {};
//   getValue: () => ValueType;
//   hasValue: boolean;
//   isMulti: boolean;
//   options: OptionsType;
//   selectOption: (arg1: OptionType) => void;
//   selectProps: any;
//   setValue: (arg0: ValueType, arg1: ActionTypes) => void;
//   emotion: any;
// };

const customStyles = {};
//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   menu: (
//     provided: any,
//     state: { selectProps: { width: any; menuColor: any } }
//   ) => ({
//     ...provided,
//     width: state.selectProps.width,
//     border: "1px dotted pink",
//     color: state.selectProps.menuColor,
//     padding: 20
//   }),

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   control: (_: any, { selectProps: { width } }: any) => ({
//     // eslint-disable-next-line object-shorthand
//     width: width
//   }),

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   singleValue: (provided: any, state: { isDisabled: any }) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = "opacity 300ms";

//     return { ...provided, opacity, transition };
//   }
// };

const App: React.FC<SelectProps> = props => {
  const {
    className,
    multiple,
    disabled,
    searchable,
    name,
    options,
    placeholder,
    onChange,
    emptySelectMsg,
    value,
    autoFocus,
    classNamePrefix
  } = props;
  return (
    <Select
      className={className}
      styles={customStyles}
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "hotpink",
          primary: "black"
        }
      })}
      isMulti={multiple}
      isDisabled={disabled}
      isSearchable={searchable}
      name={name}
      options={options}
      placeholder={placeholder}
      onChange={onChange}
      noOptionsMessage={(): string => emptySelectMsg}
      value={value}
      autoFocus={autoFocus}
      classNamePrefix={classNamePrefix}
      // components={animatedComponents}
    />
  );
};

export default App;
