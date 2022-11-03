import { waitFor } from 'utils/test-utils';
import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { useAuthContext } from 'hooks';
import { AuthProvider } from '.';

import HttpClient from 'services/utils/HttpClient';
const apiMock = new MockAdapter(HttpClient);

const authResponse = {
  user: {
    id: '6fbbf3bc-e147-4ec9-adb6-8c23acb1636e',
    name: 'Gabriel Ferreira',
    email: 'email@example.com',
    created_at: '2021-12-06T13:09:13.732Z',
    updated_at: '2021-12-06T13:09:13.732Z',
  },
  token: 'eyJhbGCIpXVCJ9.eU3NywicDQyZTk5In0.S_IaG-UxiO08M',
};

describe('<AuthProvider />', () => {
  beforeAll(() => {
    window.localStorage.clear();
  });

  it('should create the session and store the user/token in localStorage', async () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    apiMock.onPost('auth').reply(200, authResponse);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthProvider>{children}</AuthProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useAuthContext(), {
      wrapper,
    });

    result.current.signIn({
      email: 'email@example.com',
      password: '12345678',
    });

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith(
      '@TodoApp:token',
      authResponse.token
    );

    expect(setItemSpy).toHaveBeenCalledWith(
      '@TodoApp:user',
      JSON.stringify(authResponse.user)
    );

    expect(result.current.user.name).toStrictEqual('Gabriel Ferreira');
  });

  it('should must initialize the session using the data in localstorage', async () => {
    const setGetSpy = jest.spyOn(Storage.prototype, 'getItem');

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthProvider>{children}</AuthProvider>
    );

    const { result } = renderHook(() => useAuthContext(), {
      wrapper,
    });

    expect(setGetSpy).toHaveBeenCalledWith('@TodoApp:token');

    expect(setGetSpy).toHaveBeenCalledWith('@TodoApp:user');

    await waitFor(() => {
      expect(result.current.user.name).toStrictEqual('Gabriel Ferreira');
    });
  });

  it('should delete the user data logged in to context and localsStorage', async () => {
    const setRemoveSpy = jest.spyOn(Storage.prototype, 'removeItem');

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthProvider>{children}</AuthProvider>
    );

    const { result } = renderHook(() => useAuthContext(), {
      wrapper,
    });

    await waitFor(() => {
      result.current.signOut();
    });

    expect(setRemoveSpy).toHaveBeenCalledWith('@TodoApp:token');

    expect(setRemoveSpy).toHaveBeenCalledWith('@TodoApp:user');

    await waitFor(() => {
      expect(result.current.user).toBeUndefined();
    });
  });
});
