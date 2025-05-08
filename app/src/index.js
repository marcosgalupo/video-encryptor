import Fastify from 'fastify'
import fastifyMultipart from '@fastify/multipart'
import CommandLine from './services/CommandLine.js'


const app = Fastify()

// await app.register(fastifyMultipart)


app.get('/', async function handler (request, reply) {
  console.log("meu Deus");

})

app.get('/fragment', async function handler (request, reply) {
  CommandLine.fragmentVideo()
})


app.listen({ port: 3000 }, (err) => {
    if(err){
      app.log.error(err)
      process.exit(1)
    }
    console.log(`server listening on `)
})

