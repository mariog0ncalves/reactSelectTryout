/* eslint-disable @typescript-eslint/explicit-function-return-type */

const style = {
  menu: (
    provided: any,
    state: { selectProps: { width: any; menuColor: any } }
  ) => ({
    ...provided,
    width: state.selectProps.width,
    border: "1px dotted pink",
    color: state.selectProps.menuColor,
    padding: 20
  }),

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  control: (_: any, { selectProps: { width } }: any) => ({
    // eslint-disable-next-line object-shorthand
    width: width
  }),

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  singleValue: (provided: any, state: { isDisabled: any }) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  }
};

export default style;
