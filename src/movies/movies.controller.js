const service = require("./movies.service.js")

async function movieExists(req,res,next) {
    const {movieId} = req.params
    res.locals.movie = movieId ? await service.read(movieId) : null
    if(res.locals.movie){
        return next()
    }
    next({
        status: 404,
        message: "Movie cannot be found."
    })
}

async function read (req,res,next){
    res.status(200).send({data: res.locals.movie})
}

async function list (req, res, next){
    const {is_showing} = req.query
    const movies = await service.list(!!is_showing)
    res.status(200).send({ data: movies })
}

module.exports = {
    list: [list],
    read: [movieExists, read],
    movieExists,
}