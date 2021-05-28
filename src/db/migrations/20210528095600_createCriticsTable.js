
exports.up = function(knex) {
    return knex.schema.createTable("critics", function(table) {
        table.increments("critic_id").primary();
        table.string("preferred_name");
        table.string("surname");
        table.string("organization_name").defaultTo("");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("critics")
};
