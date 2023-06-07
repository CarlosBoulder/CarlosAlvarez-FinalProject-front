import { renderHook } from "@testing-library/react";
import useUser, { UserCredentials } from "./useUser";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { wrapper } from "../../utils/testUtils";
import { store } from "../../store";

describe("Given a useUser custom hook", () => {
  const mockUserCredentials: UserCredentials = {
    username: "test",
    password: "test",
  };
  describe("When calls getToken function with a valid username and password", () => {
    test("Then it should return a user token", async () => {
      const tokenMock =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwNWYyOTU0YWVhZTkyNWQ0NmQ4ZDQiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU3OTE5NjQsImV4cCI6MTY4NTg3ODM2NH0.ShrYNKznLbxIvDdGvBgdy8zsIIL96gASjJddRyIBauY";

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const token = await getToken(mockUserCredentials);

      expect(token).toBe(tokenMock);
    });
  });

  describe("When the function getToken is called with an invalid user credentials", () => {
    test("Then it should return the response's method with an error with 401 status code", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      await getToken(mockUserCredentials);

      const message = store.getState().uiStore.message;

      expect(message).toBe("Wrong Credentials");
    });
  });
});
