
exports.up = function(knex) {
    return knex.schema.createTable("reviews", function(table) {
        table.increments("review_id").primary();
        table.text("content").notNullable();
        table.integer("score");
        table.integer("movie_id").unsigned().notNullable();
        table.integer("critic_id").unsigned().notNullable();
        table
            .foreign("critic_id")
            .references("critic_id")
            .inTable("critics")
            .onDelete("cascade");
        table
            .foreign("movie_id")
            .references("movie_id")
            .inTable("movies")
            .onDelete("cascade");
        table.string("city").notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("reviews")
};
