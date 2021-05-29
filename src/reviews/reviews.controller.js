const service = require("./reviews.service.js")

async function reviewExists(req,res,next){
    const {reviewId} = req.params
    const id = reviewId ? await service.readId(reviewId) : null
    if(id){
        res.locals.id = id
        return next()
    }
    next({
        status: 404,
        message: "Review cannot be found."
    })

}

// function hasCorrectProperties(req,res,next){

// }

async function list(req,res,next){

}

// function update(req,res,next){

// }

async function remove(req,res,next){
    await service.remove(res.locals.id)
    res.sendStatus(204)
}

module.exports = {
    list,
    // update: [reviewExists, hasCorrectProperties, update],
    remove: [reviewExists, remove],
}