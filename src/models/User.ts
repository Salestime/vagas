import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { EncryptionTransformer } from 'typeorm-encrypted';

import { MyEncryptionTransformerConfig } from '../configs/encription-config';

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(() => String)
    @Column()
    firstName: string;

    @Field(() => String)
    @Column()
    lastName: string;

    @Field(() => String)
    @Column()
    nickName: string;

    @Field(() => String)
    @Column()
    email: string;

    @Field(() => String)
    @Column({
        transformer: new EncryptionTransformer(MyEncryptionTransformerConfig)
    })
    password: string;
}