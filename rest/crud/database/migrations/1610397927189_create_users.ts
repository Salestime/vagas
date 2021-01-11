import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateUsers extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('address')
      table.string('city')
      table.string('phone')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
