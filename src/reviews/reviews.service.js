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

module.exports = {
    remove,
    readId,
    // list,
    // update,
}