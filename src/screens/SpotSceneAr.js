import React from 'react';
import {
  ViroARScene,
  ViroARPlane,
  ViroImage,
  ViroConstants,
} from '@viro-community/react-viro';
import { useGeolocation } from '../hooks/useGeolocation';
import { SpotMarker } from '../components/SpotMarker';

export const SpotSceneAR = () => {
  const [trackingState, setTrackingState] = React.useState();
  const { position } = useGeolocation();

  function onInitialized(state, reason) {
    setTrackingState(state);
    //   if (state === ViroConstants.TRACKING_NORMAL) {
    //     //fetch
    //   } else if (state === ViroConstants.TRACKING_NONE) {
    //     // Handle loss of tracking
    //   }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroARPlane minHeight={0.5} minWidth={0.5} alignment={'Horizontal'}>
        {/* <ViroImage
          position={[0, 0, -3]}
          height={1}
          width={1}
          source={require('../assets/spot_black_dropshadow_gradient.png')}
        /> */}
        <SpotMarker
          id="jeff"
          position={{ latitude: 40.149779, longitude: -105.090074 }}
          devicePosition={position}
        />
      </ViroARPlane>
    </ViroARScene>
  );
};
