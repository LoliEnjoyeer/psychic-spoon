'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:123@maindatabase.uuetmec.mongodb.net/IoTDevices?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userSchema = new mongoose.Schema({
  userName: String,
  date: Date,
  logged: Boolean,
  password: String,
});

const userModel = mongoose.model('User', userSchema, 'User');

const requestSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.Mixed,
  method: mongoose.Schema.Types.Mixed,
  path: mongoose.Schema.Types.Mixed,
  statusCode: mongoose.Schema.Types.Mixed,
  timestamp: mongoose.Schema.Types.Mixed,
  ip: mongoose.Schema.Types.Mixed,
});

const requestModel = mongoose.model('Log', requestSchema, 'APIRequestLog');

module.exports = async function (fastify, opts) {
  // Add the onResponse hook
  fastify.addHook('onResponse', async (request, reply) => {
    console.log('onResponse hook called'); // Check if this log statement appears

    const logEntry = new requestModel({
      id: request.id,
      method: request.raw.method,
      path: request.raw.url,
      statusCode: reply.statusCode,
      timestamp: new Date(),
      ip: request.ip,
    });

    try {
      await logEntry.save();
      console.log('Log entry saved successfully'); // Check if this log statement appears
    } catch (error) {
      console.error('Error saving log entry:', error);
    }
  });

  // Define your routes below
  fastify.get('/user/getAll', async function (request, reply) {
    // Your route logic here
    reply.code(200).send({ users: [] }); // Placeholder response
  });

  fastify.post('/login', async (request, reply) => {
    // Your route logic here
    reply.code(200).send(true); // Placeholder response
  });
};