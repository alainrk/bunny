import figlet from "figlet";
import banner from "./assets/banner.txt";

const port = process.env.PORT || 3000

const server = Bun.serve({
  port: port,
  fetch(req) {
    console.log(req)
    const body = JSON.stringify({ message: banner })
    return new Response(body)
  }
})

console.log(figlet.textSync("Bunny"))
console.log(`Listening on port ${server.port}...`)

const res = await fetch(`http://localhost:${port}`)
console.log(await res.json())
