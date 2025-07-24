const request = require('supertest');
const express = require('express');
const apiRoutes = require('./api');

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);

describe('API Routes', () => {
  test('GET /api/health should return status OK', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect(200);
    
    expect(response.body.status).toBe('OK');
    expect(response.body.service).toBe('API');
  });

  test('GET /api/hello should return hello message', async () => {
    const response = await request(app)
      .get('/api/hello')
      .expect(200);
    
    expect(response.body.message).toBe('Hello from the backend!');
  });

  test('GET /api/data should return sample data', async () => {
    const response = await request(app)
      .get('/api/data')
      .expect(200);
    
    expect(response.body.data).toHaveLength(3);
    expect(response.body.count).toBe(3);
  });
});