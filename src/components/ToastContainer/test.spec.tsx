import { render, screen } from 'utils/test-utils';

import ToastContainer from '.';

const messages = [
  {
    id: '3c0e7f5ddd-02ed-4a97-9fe2-d901f7bbf275',
    title: 'Erro ao tentar logar!',
    description: 'Um erro inesperado aconteceu... Tente novamente mais tarde.',
    secondsDuration: 5,
  },
  {
    id: '3c0e7f5d-02ed-4a97-9fe2-d901f7bbf275',
    title: 'Erro ao tentar logar!',
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
  it('should render the ToastContainer with two Toass correctly', () => {
    render(<ToastContainer messages={messages} />);

    expect(screen.getAllByTestId('Mock Toast')).toHaveLength(2);
  });
});
