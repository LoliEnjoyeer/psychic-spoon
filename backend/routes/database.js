'use strict'
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:123@maindatabase.uuetmec.mongodb.net/IoTDevices?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userSchema = new mongoose.Schema({
    userName: String,
    date: Date,
    logged: Boolean,
    password: String
});

const userModel = mongoose.model('User', userSchema, "User");

module.exports = async function (fastify, opts) {
  fastify.get('/user/getAll', async function (request, reply) {
    let users;
    await userModel.find({})
    .then((test) => {
        console.log
        users = test;
    })
    .catch(err => {
        
    })
    reply.code(200).send({users});
  })
}


