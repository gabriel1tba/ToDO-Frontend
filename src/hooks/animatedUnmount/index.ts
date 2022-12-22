import { useState, useEffect, useRef } from 'react';

const useAnimatedUnmount = <T extends HTMLElement>(isOpen: boolean) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  const animetedElementRef = useRef<T>(null);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }

    const handleAnimationEnd = () => {
      setShouldRender(false);
    };

    const currentElementRef = animetedElementRef.current;

    if (!isOpen && currentElementRef) {
      currentElementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (currentElementRef) {
        currentElementRef.removeEventListener(
          'animationend',
          handleAnimationEnd
        );
      }
    };
  }, [isOpen]);

  return { shouldRender, animetedElementRef };
};

export default useAnimatedUnmount;
