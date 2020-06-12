const express = require("express")

const server = express()
const port = 6000

server.use(express.json())

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
