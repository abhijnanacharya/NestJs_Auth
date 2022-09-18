import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }
  getRequest(context: ExecutionContext) {
    //Doing this just to map the data into a REST format, as passport works only with the RESTFul architecture
    const ctx = GqlExecutionContext.create(context);
    //debugger;
    console.log(ctx);
    const request = ctx.getContext();
    //console.log('req--->', request);
    request.body = ctx.getArgs().loginUserInput;
    //console.log('req.body--->', request.body);
    return request;
  }
}
