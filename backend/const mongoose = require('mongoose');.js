const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/contactdb')
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error de conexión:', err);
  });
