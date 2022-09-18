import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@ObjectType()
export class User {
  @Field(() => Int /*, { description: 'ID' }*/)
  id: number;

  @Field()
  username: string;
}
