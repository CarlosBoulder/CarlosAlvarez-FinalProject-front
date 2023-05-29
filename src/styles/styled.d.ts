import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    color: {
      primary: string;
    };
    fonts: {
      fontFamily: string;
    };
  }
}
export default DefaultTheme;
