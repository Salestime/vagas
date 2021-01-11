import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {

  public async index() {
    const users = await User.all();

    return users;
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'address', 'city', 'phone']);

    const user = await User.create(data);

    return user;
  }

  public async update({request, params}: HttpContextContract) {
    const user = await User.findOrFail(params.id);

    const data = request.only(['name', 'address', 'city', 'phone']);

    user.merge(data);

    return user;
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id);

    await user.delete();
  }
}
