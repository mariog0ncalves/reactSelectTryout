/* eslint-disable react/prop-types */
import React from "react";
import Select, { Props as SelectProps } from "react-select";
import makeAnimated from "react-select/animated";
import { SelectComponents } from "react-select/src/components";

const animatedComponents = makeAnimated() as Partial<
  SelectComponents<{ label: string; value: string }>
>;

interface SelectInterface extends SelectProps {
  multiple?: boolean;
  disabled?: boolean;
  searchable?: boolean;
  // emptySelectMsg: string;
}

const App: React.FC<SelectInterface> = props => {
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
    classNamePrefix,
    styles
  } = props;
  return (
    <Select
      className={className}
      styles={styles}
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "lightblue",
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
      components={animatedComponents}
    />
  );
};

export default App;
