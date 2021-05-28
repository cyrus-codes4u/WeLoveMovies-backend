
exports.up = function(knex) {
    return knex.schema.alterTable("reviews", function (table) {
        table.dropColumn("city"); // this current column is not nullable
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable("reviews", function (table) {
        table.string("city").notNullable();
    })
};
