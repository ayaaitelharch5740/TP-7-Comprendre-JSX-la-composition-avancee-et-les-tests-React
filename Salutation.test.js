import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Salutation from './Salutation';

test('affiche le prénom passé en prop', () => {
  render(<Salutation prenom="Marie" />);
  expect(
    screen.getByText('Bienvenue, Marie !')
  ).toBeInTheDocument();
});

test('affiche un autre prénom correctement', () => {
  render(<Salutation prenom="Lucas" />);
  expect(
    screen.getByText('Bienvenue, Lucas !')
  ).toBeInTheDocument();
});
