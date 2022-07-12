import {Field, InputType} from "type-graphql";

@InputType()
export class TestInput {
    @Field({nullable: true, defaultValue:"extraño"})
    name:String;
}