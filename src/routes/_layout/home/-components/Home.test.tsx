import { HomeComponent as Home } from './Home';
//technically ./tests/setup already import this
import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Home', () => {
  it('renders the heading with the correct class', () => {
    const { getByText } = render(<Home />);
    const headingElement = getByText('Vite + React');
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the Environment variable', () => {
    const { getByText } = render(<Home />);
    const modeEnvVar = getByText('Vite is running in "test"');
    expect(modeEnvVar).toBeInTheDocument();
  });
});
