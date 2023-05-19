import { Module } from '@nestjs/common';

import { GraphqlSampleResolver } from './graphql-sample.resolver';
import { GraphqlSampleService } from './graphql-sample.service';

@Module({
  providers: [GraphqlSampleResolver, GraphqlSampleService],
})
export class GraphqlSampleModule {}
