import {
  UserStateStructure,
  loginActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer reducer", () => {
  describe("When it receives an empty initial state", () => {
    test("Then in should return a new state with id and token", () => {
      const initialState: UserStateStructure = {
        id: "",
        token: "",
        isLogged: false,
      };

      const newState: UserStateStructure = {
        id: "testId",
        token: "testToken",
        isLogged: true,
      };

      const expectedLoginState: UserStateStructure = {
        id: newState.id,
        token: newState.token,
        isLogged: newState.isLogged,
      };

      const loadLoginAction = loginActionCreator(newState);

      const newLoginState = userReducer(initialState, loadLoginAction);

      expect(newLoginState).toStrictEqual(expectedLoginState);
    });
  });
});
