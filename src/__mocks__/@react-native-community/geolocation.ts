export default {
  addListener: jest.fn(),
  getCurrentPosition: jest.fn(),
  removeListeners: jest.fn(),
  requestAuthorization: jest.fn(),
  setConfiguration: jest.fn(),
  startObserving: jest.fn(),
  stopObserving: jest.fn(),
  watchPosition: jest.fn(onSuccess =>
    onSuccess({ coords: { latitude: 40, longitude: 105 } }),
  ),
};
