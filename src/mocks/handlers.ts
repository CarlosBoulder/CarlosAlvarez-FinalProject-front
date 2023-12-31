import { rest } from "msw";
import bouldersMock from "./bouldersMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwNWYyOTU0YWVhZTkyNWQ0NmQ4ZDQiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU3OTE5NjQsImV4cCI6MTY4NTg3ODM2NH0.ShrYNKznLbxIvDdGvBgdy8zsIIL96gASjJddRyIBauY";

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}/boulders/all`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ boulders: bouldersMock }));
  }),

  rest.delete(`${apiUrl}/boulders/:boulderId`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Boulder deleted" }));
  }),

  rest.post(`${apiUrl}/boulders/create`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ message: "Boulder created" }));
  }),

  rest.get(`${apiUrl}/boulders/paged`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ boulders: bouldersMock }));
  }),

  rest.get(`${apiUrl}/boulders/:id`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ boulder: bouldersMock[0] }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}/boulders/all`, (_req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ boulders: [] }));
  }),

  rest.delete(`${apiUrl}/boulders/:boulderId`, (_req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: "Boulder not found" }));
  }),

  rest.post(`${apiUrl}/boulders/create`, (_req, res, ctx) => {
    return res(
      ctx.status(401),
      ctx.json({ message: "Error trying to create the boulder" })
    );
  }),

  rest.get(`${apiUrl}/boulders/paged`, (_req, res, ctx) => {
    return res(ctx.status(500));
  }),

  rest.get(`${apiUrl}/boulders/:id`, (_req, res, ctx) => {
    return res(ctx.status(401), ctx.json({ message: "Boulder not found" }));
  }),
];

export const paginatedBouldersHandlers = [
  rest.get(`${apiUrl}/boulders/paged`, (_req, res, ctx) => {
    res(ctx.status(200), ctx.json({ bouldersMock }));
  }),
];
