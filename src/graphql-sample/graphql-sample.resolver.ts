import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { CreateGraphqlSampleInput } from './dto/create-graphql-sample.input';
import { UpdateGraphqlSampleInput } from './dto/update-graphql-sample.input';
import { GraphqlSample } from './entities/graphql-sample.entity';
import { GraphqlSampleService } from './graphql-sample.service';

@Resolver(() => GraphqlSample)
export class GraphqlSampleResolver {
  constructor(private readonly graphqlSampleService: GraphqlSampleService) {}

  @Mutation(() => GraphqlSample)
  createGraphqlSample(@Args('createGraphqlSampleInput') createGraphqlSampleInput: CreateGraphqlSampleInput) {
    return this.graphqlSampleService.create(createGraphqlSampleInput);
  }

  @Query(() => [GraphqlSample], { name: 'graphqlSample' })
  findAll() {
    return this.graphqlSampleService.findAll();
  }

  @Query(() => GraphqlSample, { name: 'graphqlSample' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlSampleService.findOne(id);
  }

  @Mutation(() => GraphqlSample)
  updateGraphqlSample(@Args('updateGraphqlSampleInput') updateGraphqlSampleInput: UpdateGraphqlSampleInput) {
    return this.graphqlSampleService.update(updateGraphqlSampleInput.id, updateGraphqlSampleInput);
  }

  @Mutation(() => GraphqlSample)
  removeGraphqlSample(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlSampleService.remove(id);
  }
}
