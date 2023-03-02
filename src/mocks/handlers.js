// src/mocks/handlers.js
import { rest } from 'msw';
import { CAROUSEL_ITEMS } from './data/carousel';
import { MOVIES_HOME } from './data/movie';

export const handlers = [
  rest.get(`/api/carousel`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CAROUSEL_ITEMS));
  }),

  rest.get(`/api/movies`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOVIES_HOME));
  }),
];
