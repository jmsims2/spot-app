import React from 'react';
import { AddSpotForm } from '.';
import { TestProvider } from '../utils/TestProviders';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { server, rest, baseErrorHandler, baseResource } from '../mock-api';

beforeEach(() => jest.resetAllMocks());

const mockRef = { current: { snapTo: jest.fn() } };
const mockPosition = { latitude: 40, longitude: -105 };

const renderAddSpotForm = () =>
  render(
    <TestProvider>
      <AddSpotForm
        position={mockPosition}
        sheetRef={mockRef as unknown as React.RefObject<BottomSheet>}
      />
    </TestProvider>,
  );

describe('AddSpotForm Tests', () => {
  it('should save a spot', async () => {
    const { getByText } = renderAddSpotForm();

    fireEvent.press(getByText('Save'));

    await waitFor(() => expect(mockRef.current.snapTo).toHaveBeenCalledWith(1));
  });
  it('should handle errors', async () => {
    server.use(
      rest.post(`${baseResource}/rpc/addspotlocation`, baseErrorHandler),
    );
    const { getByText } = renderAddSpotForm();

    fireEvent.press(getByText('Save'));

    await waitFor(() => expect(getByText('Please try again.')).not.toBeNull());
    expect(mockRef.current.snapTo).not.toHaveBeenCalled();
  });
});
