import { MdClose } from 'react-icons/md';

import { useAnimatedUnmount } from 'hooks';

import CreatePortalWrapper from 'components/CreatePortalWrapper';

import * as S from './styles';

export interface IModal {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onCloseModal: () => void;
}

const Modal = ({ title, children, isOpen, onCloseModal }: IModal) => {
  const { shouldRender, animetedElementRef } =
    useAnimatedUnmount<HTMLDivElement>(isOpen);

  if (!shouldRender) {
    return null;
  }
  return (
    <CreatePortalWrapper divElementId="modal-root">
      <S.Overlay isLeaving={!isOpen} ref={animetedElementRef}>
        <S.Wrapper>
          <header>
            <h1>{title}</h1>
            <button onClick={onCloseModal}>
              <MdClose size={30} />
            </button>
          </header>

          <S.ModalWrapper>{children}</S.ModalWrapper>
        </S.Wrapper>
      </S.Overlay>
    </CreatePortalWrapper>
  );
};

export default Modal;
