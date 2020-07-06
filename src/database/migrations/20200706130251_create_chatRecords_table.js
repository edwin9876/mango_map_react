
exports.up = function (knex) {
    return knex.schema.createTable('chatRecords', (table) => {
        table.increments();
        table.text('body').notNullable()
        table.text('images');
        table.integer('chatroom_id').unsigned()
        table.foreign('chatroom_id').references('chatrooms.id')
        table.integer('user_id').unsigned()
        table.foreign('user_id').references('users.id')
        table.timestamp(true, true)        
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('chatRecords')
};
