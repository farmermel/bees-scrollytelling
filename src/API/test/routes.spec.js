const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('API routes', () => {
  beforeEach((done) => {
    database.migrate.rollback()
    .then(() => {
      database.migrate.latest()
        .then(() => {
          return database.seed.run()
          .then(() => {
            done();
        });
      });
    });
  });

  describe('POST /api/v1/users', () => {
    it('sends status 201 and id if post is successful', () => {
      return chai.request(server)
      .post('/api/v1/users')
      .send({
        concern: 'A little concerned',
        age: '13-19',
        location: {latitude: 100, longitude: 100}
      })
      .then(response => {
        response.should.have.status(201);
        response.body.should.have.property('id');
        response.body.id.should.equal(4);
      })
      .catch(error => {
        throw error;
      });
    });

    it('sends status 422 if missing required parameter', () => {
      return chai.request(server)
      .post('/api/v1/users')
      .send({
        // concern: 'A little concerned',
        age: '13-19',
        location: {latitude: 100, longitude: 100}
      })
      .then(response => {
        response.should.have.status(422);
        response.body.should.have.property('error');
        response.body.error.should.equal('Expected request body to have format {concern: <string>, age: <string>, location: <object>}, missing concern');
      })
      .catch(error => {
        throw error;
      });
    });
  });

  describe('POST /api/v1/answers', () => {
    it('sends status 201 and id if post is successful', () => {
      return chai.request(server)
      .post('/api/v1/answers')
      .send({
        users_id: 1,
        user_answer: '20',
        question: 'impact diet'
      })
      .then(response => {
        response.should.have.status(201);
        response.body.should.have.property('id');
        response.body.id.should.equal(3);
      })
      .catch(error => {
        throw error;
      });
    });

    it('sends status 422 if missing required parameter', () => {
      return chai.request(server)
      .post('/api/v1/answers')
      .send({
        users_id: 1
      })
      .then(response => {
        response.should.have.status(422);
        response.body.should.have.property('error');
        response.body.error.should.equal('Expected request body to have format {users_id: <number>, user_answer: <string>, question: <string>}, missing user_answer');
      });
    });
  });
});