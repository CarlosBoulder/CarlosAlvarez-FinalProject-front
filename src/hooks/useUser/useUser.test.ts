import { renderHook } from "@testing-library/react";
import useUser, { UserCredentials } from "./useUser";

describe("Given a useUser custom hook", () => {
  describe("When calls getToken function with a valid username and password", () => {
    test("Then it should return a user token", async () => {
      const mockUserCredentials: UserCredentials = {
        username: "test",
        password: "test",
      };

      const tokenMock =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwNWYyOTU0YWVhZTkyNWQ0NmQ4ZDQiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU3OTE5NjQsImV4cCI6MTY4NTg3ODM2NH0.ShrYNKznLbxIvDdGvBgdy8zsIIL96gASjJddRyIBauY";

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser());

      const token = await getToken(mockUserCredentials);

      expect(token).toBe(tokenMock);
    });
  });
});
