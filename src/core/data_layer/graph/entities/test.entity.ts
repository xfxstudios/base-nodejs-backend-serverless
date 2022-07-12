import {Field, ObjectType} from "type-graphql";

@ObjectType()
export class TestEntity {
    @Field()
    message:String;
}