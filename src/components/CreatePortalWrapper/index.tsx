import { useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ICreatePortalWrapper {
  divElementId?: string;
  children: ReactNode;
}

const CreatePortalWrapper = ({
  divElementId = 'portal-root',
  children,
}: ICreatePortalWrapper) => {
  const divElement = document.createElement('div');

  useEffect(() => {
    divElement.setAttribute('id', divElementId);
    document.body.appendChild(divElement);

    return () => {
      document.body.removeChild(divElement);
    };
  }, [divElement, divElementId]);

  return ReactDOM.createPortal(children, divElement);
};

export default CreatePortalWrapper;
