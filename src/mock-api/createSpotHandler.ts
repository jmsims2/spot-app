import { rest } from './server';
import { baseResource } from './baseResource';

export const createSpotUrl = `${baseResource}/rpc/addspotlocation`;

export const createSpotSuccessHandler = [
  rest.post(createSpotUrl, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        created_at: '2021-09-18T20:49:56.652228+00:00',
        id: 16,
        location: [-105, 40],
        updated_at: '2021-09-18T20:49:56.652228+00:00',
      }),
    );
  }),
];
