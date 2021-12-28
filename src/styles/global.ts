import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    font-size: 16px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray.dark};
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }
`;
