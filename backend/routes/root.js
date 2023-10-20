'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send({ hello: 'world'})
  })
}


