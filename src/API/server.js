const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'bees-scrollytelling';

app.get('/', (request, response) => {
  response.send('Oh hey bees-scrollytelling time');
});

app.post('/api/v1/users', async (request, response) => {
  const requiredArr = ['concern', 'age'];
  for(let param of requiredArr) {
    if(!request.body[param]) {
      return response
      .status(422)
      .send({
        error: `Expected request body to have format {concern: <string>, age: <string>}, missing ${param}`
      })
    }
  }
  try {
    const { concern, age } = request.body;
    const id = await database('users').insert({ concern, age }, 'id');
    return response.status(201).send({ id: id[0] });
  } catch (error) {
    return response.status(500).error({ error: 'something went wrong!' })
  }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;