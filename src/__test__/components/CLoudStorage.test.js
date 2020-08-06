import React from 'react';
import CloudStorage from 'components/cloud-storage';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('CLoudStorage.js', () => {
  test('does render without crash', () => {
    const { getByText } = render(<CloudStorage />);

    expect(getByText('Cloud Storage')).toBeInTheDocument();
    expect(getByText('Dropbox')).toBeInTheDocument();
    expect(getByText('OneDrive')).toBeInTheDocument();
    expect(getByText('Google Drive')).toBeInTheDocument();
  });
});
