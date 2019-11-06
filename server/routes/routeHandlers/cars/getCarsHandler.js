const fetch = require('node-fetch');

module.exports = () => {
  return async (req, res) => {
    try {
      const headers = {
        Accept: '*/*',
        'User-Agent': 'someagent/1'
      };
      const data = await fetch('https://www.mobile.de/hiring-challenge.json', {
        headers
      });

      const car = await data.json();
      res.status(200).json({ cars: [car] });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
};
