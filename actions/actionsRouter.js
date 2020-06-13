const express = require("express")
const actions = require("../data/helpers/actionModel")

const router = express.Router()

// POST
router.post('/', (req, res) => {
    const action = req.body
    actions
        .insert(action)
        .then((data) => {
            res.status(201).json(action)
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error adding action to the database."
            })
        })
})

// GET 
router.get('/', (req, res) => {
    const id = req.params.id
    actions
        .get(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error retrieving actions."
            })
        })
})

// GET :id
router.get('/:id', (req, res) => {
    const id = req.params.id
    actions
        .get(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error retrieving action."
            })
        })
})


module.exports = router 