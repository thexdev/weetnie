import React from 'react';
import Profile from 'components/profile';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('Profile.js', () => {
  test('does render without crash', () => {
    render(<Profile />);
    screen.getByAltText('user profile');
    screen.getByText('M. Akbar Nugroho');
  });
});
