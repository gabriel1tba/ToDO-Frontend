import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(242, 243, 245, 0.8);
`;

export const Container = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem 3rem;
  width: 100%;
  max-width: 400px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.blue};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }
  strong {
    font-size: 2.25rem;
    color: ${(props) => props.theme.colors.title};
  }
  p {
    margin-top: 0.25rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.title};
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0;
    background: transparent;
    border: none;
  }
`;
