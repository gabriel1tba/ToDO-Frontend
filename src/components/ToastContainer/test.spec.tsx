import { render, screen } from 'utils/test-utils';

import ToastContainer from '.';

const messages = [
  {
    id: '3c0e7f5ddd-02ed-4a97-9fe2-d901f7bbf275',
    title: 'Erro ao tentar logar1!',
    description: 'Um erro inesperado aconteceu... Tente novamente mais tarde.',
    secondsDuration: 5,
  },
  {
    id: '3c0e7f5d-02ed-4a97-9fe2-d901f7bbf275',
    title: 'Erro ao tentar logar2!',
    description: 'Um erro inesperado aconteceu... Tente novamente mais tarde.',
    secondsDuration: 5,
  },
  {
    id: '3c0e7f5d-02ed-4a97-9sfe2-d9d01f7bbf275',
    title: 'Erro ao tentar logar3!',
    description: 'Um erro inesperado aconteceu... Tente novamente mais tarde.',
    secondsDuration: 5,
  },
];

jest.mock('./components/Toast', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Toast"></div>;
    },
  };
});

describe('<ToastContainer />', () => {
  it('should render the ToastContainer with three Toast correctly', () => {
    render(<ToastContainer messages={messages} />);

    expect(screen.getAllByTestId('Mock Toast')).toHaveLength(3);
  });
});
