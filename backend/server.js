require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors());

// Modelo
const ContactMessage = mongoose.model('ContactMessage', new mongoose.Schema({
  nombre: { type: String, required: true },
  telefono: { type: String, required: true },
  email: { type: String, required: true },
  mensaje: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
}));

// Configura Nodemailer (usa variables de entorno para seguridad)
const transporter = nodemailer.createTransport({
  service: 'gmail', // o el servicio que uses
  auth: {
    user: process.env.EMAIL_USER || 'davidpalmaalarcon@gmail.com', // Usa variable de entorno
    pass: process.env.EMAIL_PASS || 'yo_fui_a_canasvieiras_24' // Usa variable de entorno
  }
});

// Endpoint para guardar mensaje y enviar correo
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body); // <-- log para depuración
    const { nombre, telefono, email, mensaje } = req.body;

    // Validación manual (opcional, ayuda a depurar)
    if (!nombre || !telefono || !email || !mensaje) {
      return res.status(400).json({ error: 'Todos los campos son requeridos.' });
    }

    // Guarda en MongoDB
    const msg = new ContactMessage({ nombre, telefono, email, mensaje });
    await msg.save();

    // Envía el correo
    await transporter.sendMail({
      from: '"Contacto Web" <davidpalmaalarcon@gmail.com>',
      to: 'davidpalma@hotmail.cl',
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nMensaje: ${mensaje}`
    });

    res.status(201).json({ ok: true });
  } catch (err) {
    console.error('Error en POST /api/contact:', err);
    res.status(400).json({ error: err.message });
  }
});

// Endpoint para consultar mensajes
app.get('/api/contact', async (req, res) => {
  const mensajes = await ContactMessage.find().sort({ fecha: -1 });
  res.json(mensajes);
});

// Conexión y arranque
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/contactdb';
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`API corriendo en http://localhost:${PORT}`));
  })
  .catch(err => console.error('Error de conexión MongoDB:', err));

module.exports = app;
