// src/mocks/handlers.js
import { rest } from 'msw';
import { CAROUSEL_ITEMS } from './data/carousel';
import { MOVIES } from './data/movie';

export const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_S3_BASE_URL}/data/home/carouseItems.json`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(CAROUSEL_ITEMS));
    },
  ),

  rest.get(`${process.env.NEXT_PUBLIC_S3_BASE_URL}/data/home/movies.json`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOVIES));
  }),
];
