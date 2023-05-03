// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
fastify.register(require('@fastify/cors'), {});

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})
//fastify.post('/registro', async (request, reply) => {
   // const datos = request.body;
  //})

fastify.post('/registro', require('./src/registro'));
fastify.post('/login', require('./src/login'));
fastify.post('/usuario/checktoken', require('./src/checktoken'));


// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
