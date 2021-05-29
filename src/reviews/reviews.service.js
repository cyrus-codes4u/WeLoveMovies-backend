const knex = require("../db/connection")

function readId(id){
    return knex
        .from("reviews")
        .select("review_id")
        .where({review_id : id})
        .first()
}

function remove(id){
    return knex
        .from("reviews")
        .where({review_id : id})
        .del()
}

function list(movieId){
    return knex("reviews as r")
        .join("critics as c", "r.critic_id", "c.critic_id")
        .select("*")
        .where({movie_id : movieId})
}

module.exports = {
    remove,
    readId,
    list,
    // update,
}