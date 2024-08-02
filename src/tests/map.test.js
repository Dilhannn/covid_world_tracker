
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Map from '../components/map';

describe('Map Component', () => {
  test('renders map component', () => {
    render(<Map />);
    expect(screen.getByTestId('map-container')).toBeInTheDocument();
  });

  test('renders countries on the map', () => {
    render(<Map />);
    expect(screen.getAllByTestId('country')).toHaveLength(195); 
  });

  test('displays country data when clicked', () => {
    render(<Map />);
    const countryElement = screen.getByTestId('country-usa');
    fireEvent.click(countryElement);
    expect(screen.getByText('USA Data')).toBeInTheDocument();
  });

  test('updates state correctly when fetching data', async () => {
    render(<Map />);
  });
});
