import styled from 'styled-components';

export const Wrapper = styled.button`
  background: #ff9000;
  color: #fff;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;

  font-size: 16px;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`;
