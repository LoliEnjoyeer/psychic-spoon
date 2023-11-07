'use strict'
const axios = require('axios');

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
      reply.code(200).send({ payload: "Hello World" });
  })
  fastify.get('/test', async function (request, reply) {
    const response = await fetch("http://192.168.137.123:8080/ESPHello");
    reply.code(200).send(response);
  })
}


