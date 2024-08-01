// __tests__/Map.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// import '@testing-library/jest-dom/extend-expect';
import Map from '../components/map'; // Bileşeninizin doğru yolunu belirtin

describe('Map Component', () => {
  test('renders map component', () => {
    render(<Map />);
    // Bileşenin render olup olmadığını kontrol edin
    expect(screen.getByTestId('map-container')).toBeInTheDocument();
  });

  test('renders countries on the map', () => {
    render(<Map />);
    // Örnek olarak, haritada ülkelerin yer aldığını kontrol edin
    expect(screen.getAllByTestId('country')).toHaveLength(195); // Örneğin 195 ülke varsayalım
  });

  test('displays country data when clicked', () => {
    render(<Map />);
    const countryElement = screen.getByTestId('country-usa'); // Örnek olarak ABD'yi test ediyoruz
    fireEvent.click(countryElement);
    // Tıklama sonrası ülke verisinin doğru şekilde gösterildiğini kontrol edin
    expect(screen.getByText('USA Data')).toBeInTheDocument();
  });

  test('updates state correctly when fetching data', async () => {
    // Asynchronous test to check if data fetching updates the state correctly
    render(<Map />);
    // Simulate fetching and state update here
    // Example:
    // await waitFor(() => expect(screen.getByText('Fetched Data')).toBeInTheDocument());
  });
});
