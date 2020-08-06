import React from 'react';
import Sidebar from 'components/sidebar';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('Sidebar.js', () => {
  test('does render without crash', () => {
    render(<Sidebar />);
  });
});
