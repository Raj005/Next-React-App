import fetch from 'isomorphic-unfetch';
import config from './config';

export default {
  getCar: async () => {
    const res = await fetch(`${config.serverUrl}/car`);
    const car = await res.json();
    return {
      car
    };
  }
};
