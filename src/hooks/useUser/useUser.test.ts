import { renderHook } from "@testing-library/react";
import useUser, { UserCredentials } from "./useUser";

describe("Given a useUser custom hook", () => {
  describe("When calls getToken function with a valid username and password", () => {
    test("Then it should return a user token", async () => {
      const mockUserCredentials: UserCredentials = {
        username: "test",
        password: "test",
      };

      const tokenMock = "rsdtfvgbhnjmkl";

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
