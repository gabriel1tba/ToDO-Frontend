import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, screen, waitFor } from 'utils/test-utils';

import Dashboard from '.';

import HttpClient from 'services/utils/HttpClient';
const apiMock = new MockAdapter(HttpClient);

const todoMock = [
  {
    id: 'f6d1fa61-4feb-4548-a793-74f5cb61e18e',
    user_id: '0ffb1214-a627-4afa-9125-22bd21b9a6db',
    completed: false,
    title: 'Iniciar teste',
    description: '',
    created_at: '2021-10-10T07:15:32.776Z',
    updated_at: '2021-12-25T17:10:03.977Z',
  },
];

const storedUser = {
  user: {
    id: '0ffb1214-a627-4afa-9125-22bd21b9a6db',
    created_at: '2021-08-15T15:47:01.030Z',
    email: 'gabriel.ferreira.itba@gmail.com',
    name: 'Gabriel Ferreira',
    updated_at: '2021-08-15T15:47:01.030Z',
  },
  token: 'eyJhbGCIpXVCJ9.eU3NywicDQyZTk5In0.S_IaG-UxiO08M',
};

jest.mock('components/Loading', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Loading"></div>;
    },
  };
});

jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>;
    },
  };
});

jest.mock('components/TodoList', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock TodoList"></div>;
    },
  };
});

describe('<Dashboard />', () => {
  beforeAll(() => {
    window.localStorage.setItem(
      '@TodoApp:user',
      JSON.stringify(storedUser.user)
    );
    window.localStorage.setItem(
      '@TodoApp:token',
      JSON.stringify(storedUser.token)
    );
  });

  beforeEach(() => {
    apiMock.onGet(`todos/${storedUser.user.id}`).reply(200, todoMock);
  });

  it('should render the Dashboard correctly', async () => {
    render(
      <>
        <div id="portal-loader-root" />
        <Dashboard />
      </>
    );

    await waitFor(() => {
      expect(screen.getByTestId('Mock Loading')).toBeInTheDocument();
      expect(screen.getByTestId('Mock Header')).toBeInTheDocument();
    });
  });

  it('should get todo items and render TodoList', async () => {
    const setIsLoading = jest.spyOn(React, 'useState');

    render(<Dashboard />);

    await waitFor(() => {
      expect(setIsLoading).toHaveBeenCalledWith(false);
    });

    await waitFor(() => {
      expect(screen.getByTestId('Mock TodoList')).toBeInTheDocument();
    });
  });
});
