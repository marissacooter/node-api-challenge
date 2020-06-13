const express = require("express")
const projects = require("../data/helpers/projectModel")

const router = express.Router()

// GET
router.get('/', (req, res) => {
    const id = req.params.id
    projects
        .get(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error retreiving projects."
            })
        })
})

// GET :id
router.get('/:id', (req, res) => {
    const id = req.params.id
    projects
        .get(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error retreiving project."
            })
        })
})

// POST 
router.post('/', (req, res) => {
    const project = req.body
    projects
        .insert(project)
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error adding project to the database."
            })
        })
})

module.exports = router;