const router = require("express").Router()
const theatersRouter = require("../theaters/theaters.router")
const controller = require("./movies.controller")

const methodNotAllowed = require("../common/method-not-allowed")

// /movies/:movieId/theaters read request
router.use("/:movieId/theaters", controller.movieExists, theatersRouter)

// /movies/:movieId read request
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