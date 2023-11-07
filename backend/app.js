'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const cors =  require('@fastify/cors')

module.exports.options = {}

module.exports = async function (fastify, opts) {

  ////

  await fastify.register(cors, { 
    // put your options here
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
