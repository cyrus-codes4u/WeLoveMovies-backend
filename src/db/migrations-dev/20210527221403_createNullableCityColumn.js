
exports.up = function(knex) {
    return knex.schema.alterTable("reviews", function (table) {
        table.string("city");
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable("reviews", function (table) {
        table.dropColumn("city"); 
    })
};
