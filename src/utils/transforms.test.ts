import { transformLatLongToViroAr } from './transforms';

const devicePosition = { latitude: 40.149757, longitude: -105.090122 };
const objectPosition = { latitude: 40.149779, longitude: -105.090074 };

describe('Transform Lat/Long to AR Tests', () => {
  it('should transform lat and long to x, y, z', () => {
    expect(
      transformLatLongToViroAr({ objectPosition, devicePosition }),
    ).toMatchObject([5.343335557729006, 0, -3.2040185471996665]);
  });
});
