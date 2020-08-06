import React from 'react';
import Stack from 'components/stack';
import StackItem from 'components/stack/StackItem';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('Stack.js', () => {
  test('does render without crash', () => {
    render(<Stack />);
  });

  test('does display stack with title', () => {
    render(<Stack title="Trash files" />);
    screen.getByText('Trash files');
  });

  test('does render correctly with children', () => {
    render(
      <Stack>
        <StackItem>Trash file 1</StackItem>
        <StackItem>Trash file 2</StackItem>
      </Stack>
    );
  });
});
