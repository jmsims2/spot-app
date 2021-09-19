import React from 'react';
import { StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SpotSceneAR } from './src/screens/SpotSceneAr';
import { SpotControls } from './src/screens/SpotControls';
import { SpotDataProvider } from './src/components/SpotDataContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default () => {
  return (
    <SpotDataProvider>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </SpotDataProvider>
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
});
