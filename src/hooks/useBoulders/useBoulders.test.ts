import { renderHook } from "@testing-library/react";
import useBoulders from "./useBoulders";
import bouldersMock from "../../mocks/bouldersMock";

describe("Given a useBoulders custom hook", () => {
  describe("When it calls getBoulders with a valid token", () => {
    test("Then it should return a list of boulders", async () => {
      const tokenMock =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwNWYyOTU0YWVhZTkyNWQ0NmQ4ZDQiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU3OTE5NjQsImV4cCI6MTY4NTg3ODM2NH0.ShrYNKznLbxIvDdGvBgdy8zsIIL96gASjJddRyIBauY";

      const {
        result: {
          current: { getBoulders },
        },
      } = renderHook(() => useBoulders(tokenMock));

      const boulders = await getBoulders();
      const expectedResponse = { boulders: bouldersMock };

      expect(boulders).toStrictEqual(expectedResponse);
    });
  });
});
