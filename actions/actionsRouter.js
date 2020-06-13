const express = require("express")
const actions = require("../data/helpers/actionModel")

const router = express.Router()

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


module.exports = router 