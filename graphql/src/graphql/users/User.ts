import { Field, ObjectType } from "type-graphql";

@ObjectType()
class User {
  @Field()
  _id: String;
  
  @Field()
  name: String;
  
  @Field()
  Address: String;
  
  @Field()
  city: String;
  
  @Field()
  phone: String;
  
};

export default User;