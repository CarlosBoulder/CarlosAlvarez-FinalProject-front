import { rest } from "msw";

const apiUrl = import.meta.env.VITE_API_URL;

export const tokenMock = "rsdtfvgbhnjmkl";

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),
];
