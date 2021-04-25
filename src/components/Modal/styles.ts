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
  background: rgba(242, 243, 245, 0.7);
`;

export const Wrapper = styled.div`
  z-index: 100;

  position: relative;
  text-align: flex;
  padding: 1rem 2rem;
  height: 400px;
  width: 600px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  header {
    font-size: 30px;
    font-weight: 600;
    color: #5965e0;
  }

  > svg {
    position: absolute;
    top: 25px;
    right: 25px;
    background: transparent;
    border: none;

    cursor: pointer;
  }
`;
