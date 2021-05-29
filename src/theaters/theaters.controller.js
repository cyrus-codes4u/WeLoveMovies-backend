const service = require("./theaters.service")
const reduceProperties = require("../utils/reduce-properties");

async function list(req,res,next){
    const theatersAndMovies = await service.list()
    const reduceTheaterAndMovies = reduceProperties("theater_id", {
        movie_id: ["movies", null, "movie_id"],
        title: ["movies", null, "title"],
        rating: ["movies", null, "rating"],
        is_showing: ["movies", null, "is_showing"],
        image_url: ["movies", null, "image_url"],
        description: ["movies", null, "description"],
        runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
      });


    res.status(200).send({data: reduceTheaterAndMovies(theatersAndMovies)})
}

module.exports ={
    list: list,
}