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


// UPDATE
router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body
    projects
        .update(id, changes)
        .then((updated) => {
            if (updated) {
                res.status(200).json(updated)
            } else {
                res.status(404).json({
                    message: "The project could not be found."
                })
            }
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error updating the project."
            })
        })
})

// DELETE
router.delete('/:id', (req, res) => {
    const id = req.params.id
    projects
        .remove(id)
        .then((project) => {
            res.status(200).json({
                message: "The project has been deleted."
            })
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error deleting the project."
            })
        })
})

// GET PROJECT ACTIONS
router.get('/project-actions/:id', (req, res) => {
    const projectId = req.params.id
    projects
        .getProjectActions(projectId)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error loading data."
            })
        })
})

module.exports = router;