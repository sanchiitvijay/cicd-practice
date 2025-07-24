import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders hello world message', () => {
  render(<HelloWorld />);
  const helloElement = screen.getByText(/Hello, World!/i);
  expect(helloElement).toBeInTheDocument();
});