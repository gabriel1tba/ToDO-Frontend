import styled, { keyframes } from 'styled-components';

import signUpBackgroundImg from '../../assets/sign-up-background.jpg';

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const animationFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(80px);
  }

  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 1rem;

  animation: ${animationFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 2.5rem;
      color: ${({ theme }) => theme.colors.gray[500]};
      font-size: 2.5rem;
    }
  }

  button {
    margin-top: 1rem;
  }

  > a {
    color: ${({ theme }) => theme.colors.primary.main};
    margin-top: -30px;
    text-decoration: none;
    transition: filter 0.3s;

    display: flex;
    align-items: center;
    transition: filter 0.3s;
    margin-right: 20px;

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;

  @media (max-width: 1024px) {
    display: none;
  }
`;
