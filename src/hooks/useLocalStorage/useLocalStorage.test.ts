import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";

beforeEach(() => {
  localStorage.clear();
});

describe("Given a useLocalStorage custom hook with setToken function", () => {
  describe("When the function setToken is called with a key 'token' and the value", () => {
    test("Then it should save the token in the local storage", () => {
      const key = "token";
      const value = "testtoken";

      const {
        result: {
          current: { setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);

      expect(localStorage.getItem(key)).toBe(value);
    });
  });
});

describe("Given a useLocalStorage custom hook with getToken function", () => {
  describe("When the function getToken is called with a 'token' key", () => {
    test("Then it should return the token saved in the local storage of the browser", () => {
      const key = "token";
      const value = "testtoken";

      const {
        result: {
          current: { setToken, getToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);

      const expectedToken = getToken(key);

      expect(value).toStrictEqual(expectedToken);
    });
  });
});

describe("Given a useLocalStorage custom hook with removeToken function", () => {
  describe("When the function removeToken is called with a 'token' key", () => {
    test("Then it should remove the token saved in the local storage of the browser", () => {
      const key = "token";
      const value = "testToken";
      const expectedLocalStorageLengh = 0;

      const {
        result: {
          current: { setToken, removeToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);

      removeToken(key);

      expect(localStorage.length).toBe(expectedLocalStorageLengh);
    });
  });
});
