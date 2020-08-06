import React from 'react';
import Button from 'components/button';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('Button.js', () => {
  test('does render without crash', () => {
    const { getByText } = render(<Button>Hello, Akbar!</Button>);

    expect(getByText('Hello, Akbar!')).toBeInTheDocument();
  });

  test('does render with or without children', () => {
    render(
      <Button>
        <span>Hello, August!</span>
      </Button>
    );
    screen.getByRole('button', { name: 'Hello, August!' });
  });
});
