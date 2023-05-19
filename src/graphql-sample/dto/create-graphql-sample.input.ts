import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGraphqlSampleInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField!: number;
}
