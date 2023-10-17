import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    console.log(req)
    const body = JSON.stringify({ message: 'Hello World!' })
    return new Response(body)
  }
})

console.log(figlet.textSync("Bunny"))
console.log(`Listening on port ${server.port}...`)

const res = await fetch('http://localhost:3000')
console.log(await res.json())
