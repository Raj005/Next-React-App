import * as services from '../../services';
import { carsFetched, carFetched } from '../actions';

const getCars = () => {
  return async dispatch => {
    try {
      const data = await services.carService.getCars();
      dispatch(carsFetched(data.cars));
    } catch (e) {}
  };
};

const getCarById = id => {
  return async dispatch => {
    try {
      const data = await services.carService.getCarById(id);
      dispatch(carFetched(data.car));
    } catch (e) {}
  };
};

export { getCars, getCarById };
