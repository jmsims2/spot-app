import React from 'react';
import { View, Text, Button } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

type AddSpotFormProps = {
  sheetRef: BottomSheet;
};

export const AddSpotForm = ({ sheetRef }) => {
  return (
    <View
      testID="add-spot-form"
      style={{ height: 700, backgroundColor: 'black' }}>
      <Text style={{ color: 'white' }}>Add Spot Form Here</Text>
      <Button title="Save" onPress={() => sheetRef.current.snapTo(1)}>
        <Text style={{ color: 'white' }}>Save</Text>
      </Button>
    </View>
  );
};
