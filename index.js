const express = require("express")
const projectsRouter = require("./projects/projectsRouter")
const actionsRouter = require("./actions/actionsRouter")

const server = express()
const port = 7000

server.use(express.json())
server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
