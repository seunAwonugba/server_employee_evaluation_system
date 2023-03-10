import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ManagerFactory } from 'Database/factories'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await ManagerFactory.query().with('members', 5).createMany(2)
  }
}
