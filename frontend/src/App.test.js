import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to My Fullstack App/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders hello world component', () => {
  render(<App />);
  const helloElement = screen.getByText(/Hello, World!/i);
  expect(helloElement).toBeInTheDocument();
});

test('renders backend connection test button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Test Backend Connection/i);
  expect(buttonElement).toBeInTheDocument();
});