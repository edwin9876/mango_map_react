
exports.up = function (knex) {
    return knex.schema.createTable('districts', (table) => {
        table.increments();
        table.string('name').notNullable()
        table.unique('name')
        table.float('lat', 14, 10).notNullable();
        table.float('lng', 14, 10).notNullable();
        table.integer('area_id').notNullable().unsigned()
        table.foreign('area_id').references('area.id')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('districts')
};
