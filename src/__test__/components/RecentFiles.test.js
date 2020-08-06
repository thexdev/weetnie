import React from 'react';
import RecentFiles from 'components/recent-files';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('RecentFiles.js', () => {
  test('does render without crash', () => {
    render(<RecentFiles />);
    screen.getByText('Recent Files');
    screen.getByText('See all');
  });
});
