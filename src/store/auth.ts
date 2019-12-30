export const authStore = { auth: { isLogged: false, user: {}, cookie: false } };
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export interface Iauth {
  auth: { isLogged: boolean; user: {}; cookie: boolean };
}

const authReducer = ({
  state = authStore,
  action
}: {
  state: Iauth;
  action: {
    type: string;
    payload: object;
  };
}): any => {
  switch (action.type) {
    case LOGIN:
      return {
        auth: {
          ...state.auth,
          isLogged: true,
          user: action.payload,
          cookie: true
        }
      };
    case LOGOUT:
      return {
        auth: {
          ...state.auth,
          isLogged: false,
          cookie: false,
          user: {}
        }
      };

    default:
      return state;
  }
};

export const LogInUser = (user: object): object => {
  return {
    type: LOGIN,
    payload: user
  };
};

export const LogOutUser = (): object => {
  return {
    type: LOGOUT
  };
};

export default authReducer;
