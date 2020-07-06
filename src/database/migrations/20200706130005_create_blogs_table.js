
exports.up = function (knex) {
    return knex.schema.createTable('blogs', (table) => {
        table.increments();
        table.string("title").notNullable();
        table.unique("title");
        table.text("body").notNullable();
        table.text("main_picture_URL");
        table.boolean("modified");
        table.timestamps(true,true);
        table.integer('user_id').notNullable().unsigned();
        table.foreign('user_id').references('users.id');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('blogs')
};
