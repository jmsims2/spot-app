import React from 'react';
import {
  ViroARScene,
  ViroARPlane,
  ViroImage,
  ViroConstants,
} from '@viro-community/react-viro';

export const SpotSceneAR = () => {
  const [trackingState, setTrackingState] = React.useState();

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
        <ViroImage
          position={[0, 0, -3]}
          height={1}
          width={1}
          source={require('../assets/spot_black_dropshadow_gradient.png')}
        />
      </ViroARPlane>
    </ViroARScene>
  );
};
