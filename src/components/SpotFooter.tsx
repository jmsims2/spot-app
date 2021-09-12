import React from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

type SpotFooterProps = {
  sheetRef: BottomSheet;
};

export const SpotFooter = ({ sheetRef }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      height: 120,
      padding: 20,
    }}>
    <TouchableWithoutFeedback onPress={() => sheetRef.current.snapTo(0)}>
      <Image
        style={{ height: 50, width: 50 }}
        resizeMode="contain"
        source={require('../assets/spot_black_dropshadow_gradient.png')}
      />
    </TouchableWithoutFeedback>
  </View>
);
