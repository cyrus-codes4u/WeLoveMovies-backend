const service = require("./reviews.service.js")
const reduceProperties = require("../utils/reduce-properties");

async function reviewExists(req,res,next){
    const {reviewId} = req.params
    const id = reviewId ? await service.readId(reviewId) : null
    if(id){
        res.locals.id = id.review_id
        return next()
    }
    next({
        status: 404,
        message: "Review cannot be found."
    })

}

function hasOnlyCorrectProperties(req,res,next){
    const {data} = req.body
    const mutableProperties = [ "score", "critic_id", "content", "movie_id" ]
    for ( let key of Object.keys(data) ){
        if(!mutableProperties.includes(key)){
            next({
                message: `Update request must only contain valid keys: ${key} is not a valid key`
            })
        }
    }
    next()
}

async function list(req,res,next){
    const {movieId} = req.params
    const reviewsAndCritics = await service.list(movieId)
    const reduceReviewsAndCritics = reduceProperties("review_id", {
        critic_id: ["critic", "critic_id"],
        preferred_name: ["critic", "preferred_name"],
        surname: ["critic", "surname"],
        organization_name: ["critic", "organization_name"],
      });

    res.status(200).send({data: reduceReviewsAndCritics(reviewsAndCritics)})
}

// function update(req,res,next){

// }

async function remove(req,res,next){
    await service.remove(res.locals.id)
    res.sendStatus(204)
}

module.exports = {
    list,
    update: [reviewExists, hasOnlyCorrectProperties, update],
    remove: [reviewExists, remove],
}