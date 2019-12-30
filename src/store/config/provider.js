import React, { useReducer } from "react";
import Context from "./config";
import authReducer, { authStore } from "../auth";
import middleware from "./middleware";

const Store = props => {
  const { children } = props;

  const [authState, authDispatch] = useReducer(authReducer, authStore);

  const trigglerDispatchs = action => {
    console.log(action);
    const dispatchs = [authDispatch];
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](action);
    }
  };

  const middlewareContrutor = action => {
    console.log(action);
    middleware(action)(trigglerDispatchs);
  };

  const combinedReducers = {
    store: {
      ...authState
    },
    dispatch: middlewareContrutor
  };

  return (
    <Context.Provider value={combinedReducers}>{children}</Context.Provider>
  );
};

export default Store;
