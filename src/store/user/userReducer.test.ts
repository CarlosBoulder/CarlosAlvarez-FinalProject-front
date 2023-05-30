import {
  TokenStateStructure,
  loginActionCreator,
  userReducer,
} from "./UserSlice";

describe("Given a userReducer reducer", () => {
  describe("When it receives an empty initial state", () => {
    test("Then in should return a new state with id and token", () => {
      const initialState: TokenStateStructure = {
        id: "",
        token: "",
      };

      const newState: TokenStateStructure = {
        id: "testId",
        token: "testToken",
      };

      const expectedLoginState: TokenStateStructure = {
        id: newState.id,
        token: newState.token,
      };

      const loadLoginAction = loginActionCreator(newState);

      const newLoginState = userReducer(initialState, loadLoginAction);

      expect(newLoginState).toStrictEqual(expectedLoginState);
    });
  });
});
