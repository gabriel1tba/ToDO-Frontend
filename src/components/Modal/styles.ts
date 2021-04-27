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
  background: rgba(242, 243, 245, 0.7);
`;

export const Wrapper = styled.div`
  z-index: 2;

  position: relative;
  text-align: flex;
  width: 500px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ced4da;
  header {
    margin: 15px 0;
    border-bottom: solid 0.5px rgba(0, 0, 0, 0.2);

    > p {
      font-size: 20px;
      color: #000;

      margin: 0 0 15px 20px;

      cursor: default;
    }

    > svg {
      cursor: pointer;

      position: absolute;
      top: 15px;
      right: 20px;

      transition: transform 0.3s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export const ModalWrapper = styled.div`
  margin: 40px 20px;
`;
