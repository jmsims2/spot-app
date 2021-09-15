import React from 'react';
import { StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SpotSceneAR } from './src/screens/SpotSceneAr';
import { SpotControls } from './src/screens/SpotControls';

export default () => {
  return (
    <>
      <ViroARSceneNavigator
        autofocus={true}
        worldAlignment="GravityAndHeading"
        initialScene={{
          scene: SpotSceneAR,
        }}
        style={styles.f1}
      />
      <GestureHandlerRootView>
        <SpotControls />
      </GestureHandlerRootView>
    </>
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
});
