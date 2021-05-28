
exports.up = function(knex) {
    return knex.schema.alterTable("movies", function (table) {
        table.text("description").alter(); // this current column is of the wrong datatype and can't handle longer descriptions
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable("movies", function (table) {
        table.string("description").alter();
    })
};
