require('dotenv').config();

const express = require('express');
const { join } = require('path');

const connect = require('./connection.js');

// const v1Routes = require('./../controllers/v1.js');
const rootRoutes = require('./../controllers/index.js');

const app = express();

app.set('trust proxy', 1);

app.use(require('express-boom')());
app.use(require('cors')());
app.use(require('compression')());
app.use(require('helmet')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());
app.use(require('morgan')('combined'));
/*
app.use(
  '/v1',
  require('express-rate-limit')({
    windowMs: 10000,
    max: 50,
    headers: true,
    handler: (_req, res) => {
      res.boom.tooManyRequests();
    },
  })
);*/

/*
app.use(
  '/v1/token',
  require('express-rate-limit')({
    windowMs: 43200000,
    max: 1,
    headers: true,
    handler: (_req, res) => {
      res.boom.tooManyRequests();
    },
  })
);*/

const db = connect(process.env.DB_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
});

// app.use('/v1', v1Routes);
app.use(rootRoutes);

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));