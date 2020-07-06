
exports.up = function(knex) {
  return knex.schema.createTable('chatsroom-users',(table)=>{
      table.increments();
      table.integer('chatroom_id').unsigned()
      table.foreign('chatroom_id').references('chatrooms.id')
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.timestamp(true,true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('chatsroom-users')
};
