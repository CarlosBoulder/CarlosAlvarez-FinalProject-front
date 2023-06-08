import { renderHook } from "@testing-library/react";
import useBoulders from "./useBoulders";
import bouldersMock from "../../mocks/bouldersMock";
import { wrapper } from "../../utils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { store } from "../../store";

describe("Given a useBoulders custom hook", () => {
  describe("When it calls getBoulders with a valid token", () => {
    test("Then it should return a list of boulders", async () => {
      const tokenMock =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwNWYyOTU0YWVhZTkyNWQ0NmQ4ZDQiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU3OTE5NjQsImV4cCI6MTY4NTg3ODM2NH0.ShrYNKznLbxIvDdGvBgdy8zsIIL96gASjJddRyIBauY";

      const {
        result: {
          current: { getBoulders },
        },
      } = renderHook(() => useBoulders(tokenMock), { wrapper: wrapper });

      const boulders = await getBoulders();
      const expectedResponse = { boulders: bouldersMock };

      expect(boulders).toStrictEqual(expectedResponse);
    });
  });
  describe("When it calls getBoulders with invalid token", () => {
    test("Then it should return throw error", async () => {
      server.resetHandlers(...errorHandlers);

      const tokenMock = "invalidToken";

      const {
        result: {
          current: { getBoulders },
        },
      } = renderHook(() => useBoulders(tokenMock), { wrapper: wrapper });

      await getBoulders();

      const message = store.getState().uiStore.message;

      expect(message).toBe("Error trying to get boulders");
    });
  });
});

describe("Given a useBoulders custom hook", () => {
  const tokenMock =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwNWYyOTU0YWVhZTkyNWQ0NmQ4ZDQiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU3OTE5NjQsImV4cCI6MTY4NTg3ODM2NH0.ShrYNKznLbxIvDdGvBgdy8zsIIL96gASjJddRyIBauY";

  describe("When it calls deleteBoulders with a valid token and existing id", () => {
    test("Then it should return a 200 status", async () => {
      const {
        result: {
          current: { deleteBoulder },
        },
      } = renderHook(() => useBoulders(tokenMock), { wrapper: wrapper });

      const boulderId = bouldersMock[0].id;

      const status = 200;

      const expectedStatus = await deleteBoulder(boulderId);

      expect(status).toBe(expectedStatus);
    });
  });

  describe("When it calls deleteBoulders with a valid token and no existing id", () => {
    test("Then it should return undefined", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { deleteBoulder },
        },
      } = renderHook(() => useBoulders(tokenMock), { wrapper: wrapper });

      const boulderId = "1589";

      const expectedStatus = await deleteBoulder(boulderId);

      expect(expectedStatus).toBeUndefined();
    });
  });
});
