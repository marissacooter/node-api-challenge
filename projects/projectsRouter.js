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

module.exports = router;