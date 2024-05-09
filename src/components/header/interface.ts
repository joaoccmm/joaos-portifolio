import { DefaultTheme } from "styled-components";

export interface IHeader {
  handleTheme(): void;
  theme: DefaultTheme;
}