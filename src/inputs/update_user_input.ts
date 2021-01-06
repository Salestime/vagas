import { InputType, Field } from 'type-graphql';

@InputType()
export class UpdateUserInput {
    
    @Field( { nullable: true } )
    firstName?: string;

    @Field( { nullable: true } )
    lastName?: string;

    @Field( { nullable: true } )
    nickName?: string;

    @Field( { nullable: true } )
    email?: string;

    @Field( { nullable: true } )
    password?: string;
}