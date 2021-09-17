import { renderHook } from '@testing-library/react-hooks';
import { useGeolocation } from './useGeolocation';

describe('useGeolocation Tests', () => {
  it('should get the position of the device', async () => {
    const { result, waitFor } = renderHook(() => useGeolocation());

    await waitFor(() => result.current.position.latitude > 0);

    expect(result.current).toMatchObject({
      error: '',
      position: { latitude: 40, longitude: 105 },
    });
  });
});
