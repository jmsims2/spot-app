type Coordinates = {
  latitude: number;
  longitude: number;
};

type TransformLatLongProps = {
  objectPosition: Coordinates;
  devicePosition: Coordinates;
};

const transformLatLongToMercator = ({
  latitude,
  longitude,
}: Coordinates): { x: number; y: number } => {
  const longRadians = (longitude / 180.0) * Math.PI;
  const latRadians = (latitude / 180.0) * Math.PI;
  const sma = 6378137.0;
  const x = sma * longRadians;
  const y = sma * Math.log((Math.sin(latRadians) + 1) / Math.cos(latRadians));
  return { x, y };
};

export const transformLatLongToViroAr = ({
  objectPosition,
  devicePosition,
}: TransformLatLongProps): [number, number, number] => {
  const objectPoint = transformLatLongToMercator(objectPosition);
  const devicePoint = transformLatLongToMercator(devicePosition);
  const x = objectPoint.x - devicePoint.x;
  const z = -(objectPoint.y - devicePoint.y);
  return [x, 0, z];
};
