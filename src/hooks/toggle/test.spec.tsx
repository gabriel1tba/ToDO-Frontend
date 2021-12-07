import React from 'react';
import { waitFor } from 'utils/test-utils';
import { renderHook } from '@testing-library/react-hooks';

import { useToggle } from 'hooks';

describe('<useToggle />', () => {
  it('should initialize hook and change the state', async () => {
    const setState = jest.spyOn(React, 'useState');

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    );

    const { result } = renderHook(() => useToggle(), {
      wrapper,
    });

    const [, handleToggleOpen] = result.current;

    await waitFor(() => {
      handleToggleOpen();
    });

    await waitFor(() => {
      expect(setState).toBeCalled();
    });
  });
});
