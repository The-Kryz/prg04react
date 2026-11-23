import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

beforeEach(() => sessionStorage.clear());

test('home renderiza título e cards', () => {
  renderAt('/');
  expect(screen.getByText('Controle Financeiro')).toBeInTheDocument();
  expect(screen.getByText('Receitas')).toBeInTheDocument();
});

test('admin sem login redireciona para login', () => {
  renderAt('/admin');
  expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument();
});

test('login válido leva ao admin e logout volta', () => {
  renderAt('/login');
  fireEvent.click(screen.getByRole('button', { name: 'Entrar' }));
  expect(screen.getByText('Gestão de Usuários')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Sair' }));
  expect(screen.getByText('Controle Financeiro')).toBeInTheDocument();
});
