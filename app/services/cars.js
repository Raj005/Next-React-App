import fetch from 'isomorphic-unfetch';
import config from './config';

export default {
  getCars: async () => {
    const res = await fetch(`${config.serverUrl}/cars`);
    const cars = await res.json();
    return {
      cars
    };
  },
  getCarById: async id => {
    const res = await fetch(`${config.serverUrl}/cars/${id}`);
    const car = await res.json();
    return {
      car
    };
  }
};
