import { setupServer } from 'msw/node';
import { rest, ResponseResolver, MockedRequest, RestContext } from 'msw';
import { createSpotSuccessHandler } from './createSpotHandler';

const baseErrorHandler: ResponseResolver<MockedRequest, RestContext> = (
  _req,
  res,
  ctx,
) => res(ctx.status(500), ctx.json({ message: 'an error has occurred' }));
const server = setupServer(...createSpotSuccessHandler);

export { server, rest, baseErrorHandler };
