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
  fastify.post('/login', async (request, reply) => {
    const bodyData = request.body.data;
    let user = await userModel.find({ userName: bodyData.user, password: bodyData.pass}).exec()
    .catch(err => {
      
    })
    if(user.length != 0)
    {
      reply.code(200).send(true);
    }
    else
    {
      reply.code(404).send(false);
    }
  })
}


