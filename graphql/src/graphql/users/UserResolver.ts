import { Query, Resolver } from "type-graphql";
import UserSchema from "../../model/UserSchema";
import User from "./User";

@Resolver(User)
class UserResolver {
  
  @Query(() => [User])
  async users() {
    const users = await UserSchema.find();

    return users;
  }
}

export default UserResolver;