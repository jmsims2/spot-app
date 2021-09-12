import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Button,
} from 'react-native';
import { SpotFooter } from '../components/SpotFooter';
import { AddSpotForm } from '../components/AddSpot';
import BottomSheet from 'reanimated-bottom-sheet';

export const SpotControls = () => {
  const sheetRef = React.useRef<BottomSheet>(null);

  const renderContent = () => <AddSpotForm sheetRef={sheetRef} />;

  return (
    <>
      <SpotFooter sheetRef={sheetRef} />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[700, 0]}
        renderContent={renderContent}
        initialSnap={1}
      />
    </>
  );
};
