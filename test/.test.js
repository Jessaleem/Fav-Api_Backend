const supertest = require('supertest');
const mongoose = require('mongoose');

const { app, server } = require('../index');
const api = supertest(app);

test('POST login', async () => {
  const login = {
    email: "aleejess+1@mail.com",
    password: 'J0123456789',
  };

  const response = await api
    .post('/api/auth/local/login')
    .send(login)
    .expect(404);

  const token = response.body;
  expect(token).toBeDefined();
});

afterAll(() => {
  mongoose.connection.close()
  server.close()
});

