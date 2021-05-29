const methodNotAllowed = require("../common/method-not-allowed")
const controller = require("./reviews.controller")

const router = require("express").Router({ mergeParams: true })

router
    .route("/:reviewId")
    .put()
    .delete(controller.remove)
    .all(methodNotAllowed)

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed)

module.exports = router