import styled from 'styled-components';

export const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
`;

export const Wrapper = styled.div`
  z-index: 2;

  position: relative;
  text-align: flex;
  width: 550px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ced4da;
  header {
    margin: 15px 0;
    border-bottom: 1px solid #ced4da;

    > p {
      font-size: 20px;
      color: #343a40;

      margin: 0 0 15px 21px;

      cursor: default;
    }

    button {
      position: absolute;
      top: 15px;
      right: 20px;
      background: transparent;
      border: none;

      > svg {
        cursor: pointer;

        transition: transform 0.3s;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;

export const ModalWrapper = styled.div`
  margin: 40px 20px;
`;
