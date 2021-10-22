import React from 'react';
import {
  ViroARScene,
  ViroARPlane,
  ViroImage,
  ViroConstants,
} from '@viro-community/react-viro';
import { useGeolocation } from '../hooks/useGeolocation';
import { SpotMarker } from '../components/SpotMarker';
import { useGetSpots } from '../hooks/useGetSpots';

export const SpotSceneAR = () => {
  const [trackingState, setTrackingState] = React.useState();
  const { position } = useGeolocation();
  const { data, isSuccess } = useGetSpots({
    position,
    enabled: trackingState === ViroConstants.TRACKING_NORMAL,
  });

  console.log({ data });

  function onInitialized(state, reason) {
    setTrackingState(state);
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroARPlane minHeight={0.5} minWidth={0.5} alignment={'Horizontal'}>
        {isSuccess &&
          data.map(spot => {
            const [longitude, latitude] = spot.location.coordinates;
            return (
              <SpotMarker
                key={spot.id}
                id={spot.id}
                position={{ latitude, longitude }}
                devicePosition={position}
              />
            );
          })}
      </ViroARPlane>
    </ViroARScene>
  );
};
