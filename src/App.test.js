import { render, screen } from '@testing-library/react';
import App from './App';


test('renders rotating app logo', () => {
  render(<App />);
  const appLogo = screen.getByAltText('logo');
  expect(appLogo).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});