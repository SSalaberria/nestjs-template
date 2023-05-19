import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

import { CreateGraphqlSampleInput } from './create-graphql-sample.input';

@InputType()
export class UpdateGraphqlSampleInput extends PartialType(CreateGraphqlSampleInput) {
  @Field(() => Int)
  id!: number;
}
