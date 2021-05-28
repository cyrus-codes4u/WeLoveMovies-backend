exports.up = function(knex) {
    return knex.schema.createTable("movies_theaters", function(table) {
        table.integer("movie_id").unsigned();
        table.integer("theater_id").unsigned();
        table
            .foreign("theater_id")
            .references("theater_id")
            .inTable("theaters")
            .onDelete("cascade");
        table
            .foreign("movie_id")
            .references("movie_id")
            .inTable("movies")
            .onDelete("cascade");
        table.primary(["movie_id", "theater_id"])
        table.boolean("is_showing");
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("movies_theaters")
};