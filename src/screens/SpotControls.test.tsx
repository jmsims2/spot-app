import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { SpotControls } from './SpotControls';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

describe('SpotControls Tests', () => {
  it('should render', async () => {
    const { getByText, getByTestId } = render(<SpotControls />);
    await waitFor(() => expect(getByTestId('add-spot')).not.toBeNull());
    await waitFor(() => {
      expect(getByText('40.000000°N')).not.toBeNull();
      expect(getByText('105.000000°E')).not.toBeNull();
    });
  });
  it('should let you click the button and show the add form', async () => {
    const { getByTestId } = render(<SpotControls />);
    const button = await waitFor(() => getByTestId('add-spot'));
    fireEvent.press(button);
    await waitFor(() => expect(getByTestId('add-spot-form')).not.toBeNull());
  });
});
