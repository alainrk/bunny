const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const body = JSON.stringify({ message: 'Hello World!' })
    return new Response(body)
  }
})

console.log(`Listening on port ${server.port}...`)