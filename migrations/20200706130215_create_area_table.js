
exports.up = function (knex) {
    return knex.schema.createTable('chatrooms', (table) => {
        table.increments();
        table.string('name').notNullable()
        table.text('descriptions');
        table.timestamps(true, false)
    })
};

exports.down = function (knex) {

};
