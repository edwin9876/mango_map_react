
exports.up = function(knex) {
  return knex.schema.createTable('users-districts',(table)=>{
      table.increments();
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.integer('district_id').unsigned()
      table.foreign('district_id').references('districts.id')
      table.timestamps(false,false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users-districts')
};
