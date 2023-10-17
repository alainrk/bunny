import figlet from "figlet";
import banner from "./assets/banner.txt";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    console.log(req)
    const body = JSON.stringify({ message: banner })
    return new Response(body)
  }
})

console.log(figlet.textSync("Bunny"))
console.log(`Listening on port ${server.port}...`)

const res = await fetch('http://localhost:3000')
console.log(await res.json())
