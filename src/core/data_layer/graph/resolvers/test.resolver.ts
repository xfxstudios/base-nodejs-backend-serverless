import {Arg, Query, Resolver} from "type-graphql";
import { TestEntity } from '../entities/test.entity';
import {TestInput} from "../inputs/test.input";

@Resolver()
export class TestResolver {

    @Query(returns => TestEntity)
    async testMethod(@Arg("data") data:TestInput){
        return {message:`Hola ${data.name}`}
    }

}