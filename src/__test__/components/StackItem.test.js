import React from 'react';
import StackItem from 'components/stack/StackItem';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('StackItem.js', () => {
  test('does render without crash', () => {
    render(<StackItem />);
  });

  test('does render correctly with children props', () => {
    render(<StackItem>Stack item number 1</StackItem>);
  });
});
