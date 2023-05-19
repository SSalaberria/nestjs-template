import { Injectable } from '@nestjs/common';

import type { CreateGraphqlSampleInput } from './dto/create-graphql-sample.input';
import type { UpdateGraphqlSampleInput } from './dto/update-graphql-sample.input';

@Injectable()
export class GraphqlSampleService {
  create(_createGraphqlSampleInput: CreateGraphqlSampleInput) {
    return 'This action adds a new graphqlSample';
  }

  findAll() {
    return 'This action returns all graphqlSample';
  }

  findOne(id: number) {
    return `This action returns a #${id} graphqlSample`;
  }

  update(id: number, _updateGraphqlSampleInput: UpdateGraphqlSampleInput) {
    return `This action updates a #${id} graphqlSample`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphqlSample`;
  }
}
