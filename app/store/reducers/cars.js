import { CAR_FETCHED, CARS_FETCHED } from '../actions';
import initialState from '../initialState';

export default (state = initialState.cars, action) => {
  switch (action.type) {
    case CAR_FETCHED: {
      return {
        ...state,
        data: action.payload
      };
    }

    case CARS_FETCHED: {
      return {
        ...state,
        data: action.payload
      };
    }

    default:
      return state;
  }
};
