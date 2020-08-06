import React from 'react';
import Layout from 'components/layout';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('Layout.js', () => {
  test('does render without crash', () => {
    const { getByText } = render(
      <Layout>
        <div>Sidebar</div>
        <div>Main</div>
        <div>Summary</div>
      </Layout>
    );
    expect(getByText('Sidebar')).toBeInTheDocument();
    expect(getByText('Main')).toBeInTheDocument();
    expect(getByText('Summary')).toBeInTheDocument();
  });
});
