import React from 'react';
import Section from 'components/section';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('Section.js', () => {
  test('does render without crash', () => {
    render(<Section />);
  });

  test('should display section with title', () => {
    render(<Section title="File manager" />);
    screen.getByText('File manager');
  });

  test('should display section with link', () => {
    render(<Section link={{ name: 'See all files' }} />);
    screen.getByText('See all files');
  });
});
