import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SpotFooter } from './SpotFooter';

const mockSheetRef = {
  current: {
    snapTo: jest.fn(),
  },
};

const northAndWestCoordinates = {
  latitude: 40.123456789,
  longitude: -105.123456789,
};
const southAndEastCoordinates = {
  latitude: -40.123456789,
  longitude: 105.123456789,
};

describe('SpotFooter Tests', () => {
  it('should render north and west coordinates', () => {
    const { getByText } = render(
      <SpotFooter sheetRef={mockSheetRef} position={northAndWestCoordinates} />,
    );

    expect(getByText('40.123457°N')).not.toBeNull();
    expect(getByText('-105.123457°W')).not.toBeNull();
  });
  it('should render south and east coordinates', () => {
    const { getByText } = render(
      <SpotFooter sheetRef={mockSheetRef} position={southAndEastCoordinates} />,
    );

    expect(getByText('-40.123457°S')).not.toBeNull();
    expect(getByText('105.123457°E')).not.toBeNull();
  });
  it('should click the add spot button to launch the add form', () => {
    const { getByTestId } = render(
      <SpotFooter sheetRef={mockSheetRef} position={southAndEastCoordinates} />,
    );

    const button = getByTestId('add-spot');
    fireEvent.press(button);

    expect(mockSheetRef.current.snapTo).toHaveBeenCalledWith(0);
  });
});
