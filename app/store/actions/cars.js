const CAR_FETCHED = 'CAR_FETCHED';
const CARS_FETCHED = 'CARS_FETCHED';

const carFetched = data => {
  return {
    type: CAR_FETCHED,
    payload: data.car
  };
};

const carsFetched = data => {
  return {
    type: CARS_FETCHED,
    payload: data.cars
  };
};

export { carFetched, CAR_FETCHED, carsFetched, CARS_FETCHED };
