const router = require("express").Router()
const controller = require("./movies.controller")

const methodNotAllowed = require("../common/method-not-allowed")

router
    .route("/:movieId")
    .get(controller.read)
    .all(methodNotAllowed)


// /movies list request
router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed)

module.exports = router