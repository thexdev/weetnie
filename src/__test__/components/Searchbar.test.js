import React from 'react';
import Searchbar from 'components/searchbar';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

describe('Searchbar.js', () => {
  test('does render without crash', () => {
    render(<Searchbar />);
  });
});
