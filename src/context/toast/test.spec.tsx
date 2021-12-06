import React from 'react';
import { waitFor } from 'utils/test-utils';
import { renderHook } from '@testing-library/react-hooks';

import { useToast } from 'hooks';
import { ToastProvider } from '.';

describe('<ToastProvider />', () => {
  it('should run the method to add and remove toast', async () => {
    const setToastMessage = jest.spyOn(React, 'useState');

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ToastProvider>{children}</ToastProvider>
    );

    const { result } = renderHook(() => useToast(), {
      wrapper,
    });

    await waitFor(() => {
      result.current.addToast({
        type: 'success',
        title: 'Atualizado com sucesso!',
        secondsDuration: 1,
      });
    });

    await waitFor(() => {
      expect(setToastMessage).toBeCalled();
    });
  });
});
