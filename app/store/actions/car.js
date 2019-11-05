const CAR_FETCHED = 'CAR_FETCHED';

const carFetched = data => {
  return {
    type: CAR_FETCHED,
    payload: data.car
  };
};

export { carFetched, CAR_FETCHED };
