import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MLA Office Dashboard', () => {
  render(<App />);
  const dashboardElement = screen.getByText(/MLA Office Dashboard/i);
  expect(dashboardElement).toBeInTheDocument();
});
