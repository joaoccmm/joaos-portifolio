import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      font: string,
      primary: string,
      secondary: string,
      background: string,

    },
  }
}