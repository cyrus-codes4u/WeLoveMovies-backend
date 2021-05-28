const router = require("express").Router()
const controller = require("./movies.controller")

// /movies list request
router
    .route("/")
    .get(controller.list)

module.exports = router