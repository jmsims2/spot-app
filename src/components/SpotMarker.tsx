import React from 'react';
import { ViroImage } from '@viro-community/react-viro';
import { Coordinates } from '../utils/types';
import { transformLatLongToViroAr } from '../utils/transforms';

type SpotMarkerProps = {
  spotId: string;
  position: Coordinates;
  devicePosition: Coordinates;
};

export const SpotMarker = ({
  spotId,
  position,
  devicePosition,
}: SpotMarkerProps) => {
  const [x, y, z] = transformLatLongToViroAr({
    objectPosition: position,
    devicePosition,
  });
  return (
    //@ts-ignore
    <ViroImage
      position={[x, y, z]}
      height={1}
      width={1}
      source={require('../assets/spot_black_dropshadow_gradient.png')}
    />
  );
};
