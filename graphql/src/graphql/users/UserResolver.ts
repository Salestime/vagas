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

  @Mutation(() => User)
  async updateUser(
    @Arg("_id") _id: string, 
    @Arg("userInput") userInput: UserInput
  ) {
    const updatedUser = await UserSchema.findOneAndUpdate({ _id }, userInput, {
      new: true,
    });

    if(!updatedUser) {
      throw new Error('user not found');
    }

    return updatedUser;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("_id") _id: string) {
    const user = await UserSchema.findOne({ _id })

    if(!user) {
      throw new Error('user not found');
    }

    await UserSchema.deleteOne({ _id });
    
    return true;
  }
}

export default UserResolver;