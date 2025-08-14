const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./server'); // Asegúrate que server.js exporta 'app'

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/contactdb_test');
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

describe('Contact API', () => {
  it('POST /api/contact guarda y envía mensaje', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({
        nombre: 'Test Nombress',
        telefono: '123456789',
        email: 'test@mail.com',
        mensaje: 'Mensaje de prueba'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.ok).toBe(true);
  });

  it('GET /api/contact devuelve mensajes', async () => {
    const res = await request(app).get('/api/contact');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/contact falla si falta un campo', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({
        nombre: '',
        telefono: '',
        email: '',
        mensaje: ''
      });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBeDefined();
  });
});
