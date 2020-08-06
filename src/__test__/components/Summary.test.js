import React from 'react';
import Summary from 'components/summary';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('Summary.js', () => {
  test('does render without crash', () => {
    render(<Summary />);
  });

  test('does display user photo and name', () => {
    render(<Summary />);
    screen.getByText('M. Akbar Nugroho');
    screen.getByAltText('user profile');
  });

  test('does display usage space by user', () => {
    render(<Summary />);
    screen.getAllByText('GB');
    screen.getByText('Used');
  });

  test('does display files information', () => {
    render(<Summary />);
    screen.getByText('Information');
    screen.getByText('Images');
    screen.getByText('Vidio');
    screen.getByText('Document');
    screen.getByText('Other Files');
    screen.getByText('Free Space');
  });

  test('does display upgrade to pro illustration and button', () => {
    render(<Summary />);
    screen.getByAltText('upgrade to pro');
    screen.getByText('Upgrade');
  });
});
