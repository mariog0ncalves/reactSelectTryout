import { createContext } from "react";
import { authStore } from "../auth";

export const initialState = {
  store: {
    ...authStore
  },
  dispatch: () => {}
};
const Context = createContext(initialState);

export default Context;
