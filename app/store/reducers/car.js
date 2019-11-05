import { CAR_FETCHED } from '../actions';
import initialState from '../initialState';

export default (state = initialState.car, action) => {
  switch (action.type) {
    case CAR_FETCHED: {
      return action.payload;
    }

    default:
      return state;
  }
};
