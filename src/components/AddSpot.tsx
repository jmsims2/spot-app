import React from 'react';
import { View, Text, Button } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { Coordinates } from '../utils/types';
import { supabase } from './SpotDataContext';
import { useCreateSpot } from './../hooks/useCreateSpot';

type AddSpotFormProps = {
  sheetRef: React.RefObject<BottomSheet>;
  position: Coordinates;
};

export const AddSpotForm = ({ sheetRef, position }: AddSpotFormProps) => {
  const { mutate, error } = useCreateSpot();

  const save = () => {
    mutate(position, {
      onSuccess: () => {
        sheetRef?.current?.snapTo(1);
      },
    });
  };
  return (
    <View
      testID="add-spot-form"
      style={{ height: 700, backgroundColor: 'black' }}>
      {error && <Text style={{ color: 'red' }}>Please try again.</Text>}
      <Text style={{ color: 'white' }}>Add Spot Form Here</Text>
      <Button title="Save" onPress={save}>
        <Text style={{ color: 'white' }}>Save</Text>
      </Button>
    </View>
  );
};
