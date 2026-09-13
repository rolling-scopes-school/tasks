import { render, screen } from '@testing-library/react';
import { App } from './App';

// Smoke test — proves the Vitest + RTL + jsdom + jest-dom setup works.
// Replace / expand with real behavior tests as you build the app (see TASK.md, Feature 8).
describe('App', () => {
  it('renders the starting heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /weather dashboard/iu })).toBeInTheDocument();
  });
});
