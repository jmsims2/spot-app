import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import {ViroText, ViroARSceneNavigator} from '@viro-community/react-viro';
import BottomSheet from 'reanimated-bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SpotSceneAR} from './src/screens/SpotView';
import {SpotControls} from './src/screens/SpotControls';

export default () => {
  return (
    <>
      <ViroARSceneNavigator
        autofocus={true}
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
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
