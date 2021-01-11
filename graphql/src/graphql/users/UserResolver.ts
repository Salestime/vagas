import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import UserSchema from "../../model/UserSchema";
import User from "./User";

@InputType()
class UserInput {
  @Field()
  name: String;
  
  @Field()
  Address: String;
  
  @Field()
  city: String;
  
  @Field()
  phone: String;
}

@Resolver(User)
class UserResolver {

  @Query(() => [User])
  async users() {
    const users = await UserSchema.find();

    return users;
  }

  @Mutation(() => User)
  async createUser(@Arg("userInput") userInput: UserInput) {
    const user = await UserSchema.create(userInput);

    return user;
  }
}

export default UserResolver;