const service = require("./reviews.service.js")
const reduceProperties = require("../utils/reduce-properties");

const reduceReviewsAndCritics = reduceProperties("review_id", {
    // critic_id: ["critic", "critic_id"],
    preferred_name: ["critic", "preferred_name"],
    surname: ["critic", "surname"],
    organization_name: ["critic", "organization_name"],
});

async function reviewExists(req,res,next){
    const {reviewId} = req.params
    const review= reviewId ? await service.read(reviewId) : null
    if(review){
        res.locals.id = review.review_id
        return next()
    }
    next({
        status: 404,
        message: "Review cannot be found."
    })

}

async function hasOnlyCorrectProperties(req,res,next){
    const {data} = req.body
    const mutableProperties = [ "score", "critic_id", "content", "movie_id" ]
    for ( let key of Object.keys(data) ){
        //if any of the properties the request attempts to change are immutable, an error is returned
        if(!mutableProperties.includes(key)){
            next({
                message: `Update request must only contain valid keys: ${key} is not a valid key`
            })
        }
    }
    res.locals.update = data
    next()
}

async function list(req,res,next){
    const {movieId} = req.params
    const reviewsAndCritics = await service.list(movieId)

    res.status(200).send({data: reduceReviewsAndCritics(reviewsAndCritics)})
}

async function update(req,res,next){
    //update review in database
    await service.update(res.locals.id, res.locals.update)
    //retrieve updated entry
    const updatedReview = [ await service.read(res.locals.id) ]
    //send formatted version
    res.status(200).send({data: reduceReviewsAndCritics(updatedReview)[0] })
}

async function remove(req,res,next){
    await service.remove(res.locals.id)
    res.sendStatus(204)
}

module.exports = {
    list,
    update: [reviewExists, hasOnlyCorrectProperties, update],
    remove: [reviewExists, remove],
}