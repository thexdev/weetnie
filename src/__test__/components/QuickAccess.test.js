import React from 'react';
import QuickAccess from 'components/quick-access';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('QuickAccess.js', () => {
  test('does render without crash', () => {
    render(<QuickAccess />);
    expect(screen.getByText('Quick Access')).toBeInTheDocument();
    expect(screen.getByText('View all')).toBeInTheDocument();
  });
});
