const service = require("./movies.service.js")

async function movieExists(req,res,next) {
    const {movieId} = req.params
    const movie = service.read(movieId)
    if(movie){
        return next()
    }
    next({
        status: 404,
        message: "Movie cannot be found."
    })
}

async function list (req, res, next){
    const {is_showing} = req.query
    const movies = await service.listShowing(!!is_showing)
    res.status(200).send({ data: movies, is_showing })
}


module.exports = {
    list,
    read: [movieExists],
}