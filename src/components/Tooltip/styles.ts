import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  span {
    width: 160px;
    background: ${({ theme }) => theme.colors.orange.main};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.colors.gray.main};

    &::before {
      content: '';
      border-style: solid;
      border-color: ${({ theme }) => theme.colors.orange.main};
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
