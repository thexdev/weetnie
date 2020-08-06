import React from 'react';
import SpaceUsage from 'components/space-usage';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('SpaceUsage.js', () => {
  test('does render without crash', () => {
    render(<SpaceUsage />);
  });

  test('does display space usage detail', () => {
    render(<SpaceUsage />);
    screen.getByText(/GB/i);
    screen.getByText('Used');
  });
});
