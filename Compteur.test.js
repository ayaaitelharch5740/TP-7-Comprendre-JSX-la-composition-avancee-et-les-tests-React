import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Compteur from './Compteur';

test('la valeur initiale est 0', () => {
  render(<Compteur />);
  expect(screen.getByText('Total : 0')).toBeInTheDocument();
});

test('la valeur augmente après un clic', () => {
  render(<Compteur />);
  const btn = screen.getByText('Incrémenter');
  fireEvent.click(btn);
  expect(screen.getByText('Total : 1')).toBeInTheDocument();
});

test('la valeur augmente correctement après plusieurs clics', () => {
  render(<Compteur />);
  const btn = screen.getByText('Incrémenter');
  fireEvent.click(btn);
  fireEvent.click(btn);
  fireEvent.click(btn);
  expect(screen.getByText('Total : 3')).toBeInTheDocument();
});
