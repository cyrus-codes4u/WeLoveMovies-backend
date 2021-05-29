const knex = require("../db/connection")

function list(movieId){
    return knex("movies_theaters as mt")
        .join("theaters as t", "mt.theater_id", "t.theater_id")
        .join("movies as m", "mt.movie_id", "m.movie_id")
        .select("*")
}

module.exports = {
    list
}