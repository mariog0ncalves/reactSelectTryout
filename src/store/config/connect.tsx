/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Context from "./config";
import { Iauth } from "../auth";

const mapStateToPropsMock = (props: Iauth): any => ({
  ...props
});

const Connect = (mapStateToProps: any) => (Component: React.FC): any => {
  return (props: any): any => (
    <Context.Consumer>
      {({ dispatch, store }): any => {
        const storeProps = mapStateToProps
          ? { ...mapStateToProps(store, props) }
          : { ...mapStateToPropsMock(store) };
        return <Component {...props} {...storeProps} dispatch={dispatch} />;
      }}
    </Context.Consumer>
  );
};

export default Connect;
