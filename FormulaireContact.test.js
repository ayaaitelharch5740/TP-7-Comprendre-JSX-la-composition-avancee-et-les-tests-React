import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormulaireContact from './FormulaireContact';

test("affiche une erreur si le champ nom est vide à la soumission", () => {
  render(<FormulaireContact />);
  fireEvent.click(screen.getByText('Envoyer'));
  expect(
    screen.getByText('Le champ nom est obligatoire.')
  ).toBeInTheDocument();
});

test("n'affiche pas d'erreur si le nom est rempli", () => {
  render(<FormulaireContact />);
  fireEvent.change(screen.getByLabelText('Nom :'), {
    target: { value: 'Sophie' },
  });
  fireEvent.click(screen.getByText('Envoyer'));
  expect(
    screen.queryByText('Le champ nom est obligatoire.')
  ).not.toBeInTheDocument();
});
