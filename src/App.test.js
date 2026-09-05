import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio with the engineer’s name', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Samuel Adekunle Oyebamiji/i);
  expect(nameElements.length).toBeGreaterThan(0);
});

test('renders primary navigation sections', () => {
  render(<App />);
  expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument();
  expect(screen.getByText(/View My Work/i)).toBeInTheDocument();
});
