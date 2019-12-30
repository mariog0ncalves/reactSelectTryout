import { LOGOUT, LOGIN } from "../auth";

interface Iaction {
  type: string;
}

const middleware = (action: Iaction) => (next: any): void => {
  if (action.type === LOGIN) {
    // console.log(action, 'middleware');
  }

  if (action.type === LOGOUT) {
    // console.log('middleware');
  }

  next(action);
};

export default middleware;
