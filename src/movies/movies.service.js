const knex = require("../db/connection")

function read(movieId){
    return knex 
        .from("movies")
        .select("*")
        .where("movie_id", movieId)
        .first()
}


function list(reqQuery){
    return knex
        .from("movies as m")
        .select("m.movie_id", "m.description", "m.title", "m.runtime_in_minutes", "m.rating", "m.image_url", "movies_theaters.is_showing")
        .join("movies_theaters", "m.movie_id", "movies_theaters.movie_id")
        .groupBy("m.movie_id")
        .then((results) => {
            if(reqQuery){
                return results.filter( (movie) => movie.is_showing)
            }else{
                return results
            }
        })
}

module.exports = {
    list,
    read,
}