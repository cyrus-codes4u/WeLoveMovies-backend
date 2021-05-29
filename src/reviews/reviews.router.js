const methodNotAllowed = require("../common/method-not-allowed")

const router = reuqire("express").Router({ mergeParams: true })

router
    .route("/")
    .put()
    .delete()
    .all(methodNotAllowed)