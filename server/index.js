const express = require('express');
const next = require('next');
const config = require('./config');
const { carsRoute } = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/public', express.static('public'));

  server.use('/api/car', carsRoute);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(config.port, err => {
    if (err) throw err;
    console.log(`server is running on port : ${config.port}`);
  });
});
