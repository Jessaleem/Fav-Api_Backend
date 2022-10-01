/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const supertest = require('supertest');
const mongoose = require('mongoose');

const { app, server } = require('../index');

test('POST', () => {
  const login = {
    email: 'aleejess+5@gmail.com',
    password: 'J0123456789',
  };
  const response = supertest(app)
    .post('/auth/local/login')
    .send(login)
    .expect(200);

  expect(response._data.email).toMatch(login.email);
});

test('HEALTHCHECK', () => {
  supertest(app).get('/api/healthcheck')
    .expect(200);
});

test('REGISTER', () => {
  const register = {
    email: 'aleejess+3@gmail.com',
    password: 'J0123456789',
  };

  const response = supertest(app)
    .post('/api/users')
    .send(register)
    .expect(200)
    .expect('Content-Type', 'application/json');

  expect(response._data.email).toMatch(register.email);
});

afterAll(() => {
  mongoose.connection.close();
  server.close();
});
