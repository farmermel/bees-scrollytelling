const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
// const configuration = require('./knexfile')[environment];
// const database = require('knex')(configuration);

app.use(bodyParser.json());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'bees-scrollytelling';

app.get('/', (request, response) => {
  response.send('Oh hey bees-scrollytelling time');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});