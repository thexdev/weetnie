import React from 'react';
import Menu from 'components/menu';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('Menu.js', () => {
  test('does render without crash', () => {
    render(<Menu />);
    expect(screen.queryByRole('navigation')).toBeInTheDocument();
  });
});
