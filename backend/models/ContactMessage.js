const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Debes crear sequelize.js para la conexión

const ContactMessage = sequelize.define('ContactMessage', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mensaje: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'contact_messages',
  timestamps: false
});

module.exports = ContactMessage;
