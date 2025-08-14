const mongoose = require('mongoose');

const ContactMessage = mongoose.model('ContactMessage', new mongoose.Schema({
  nombre: String,
  telefono: String,
  email: String,
  mensaje: String,
  fecha: { type: Date, default: Date.now }
}));

mongoose.connect('mongodb://localhost:27017/contactdb')
  .then(async () => {
    console.log('Conexión exitosa a MongoDB');
    // Insertar documento de prueba
    const doc = await ContactMessage.create({
      nombre: 'Prueba',
      telefono: '123456789',
      email: 'prueba@mail.com',
      mensaje: 'Este es un mensaje de prueba'
    });
    console.log('Documento insertado:', doc);
    await mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error de conexión:', err);
  });
