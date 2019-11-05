import * as services from '../../services';
import { carFetched } from '../actions';

const getCar = () => {
  return async dispatch => {
    try {
      const data = await services.carService.getCar();
      dispatch(carFetched(data.car));
    } catch (e) {}
  };
};

export { getCar };
