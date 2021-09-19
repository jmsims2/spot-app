import { server } from './src/mock-api';

beforeAll(() => {
  global.fetch = require('node-fetch');
  server.listen({ onUnhandledRequest: 'error' });
});
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());
