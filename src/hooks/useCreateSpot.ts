import React from 'react';
import { SpotDataContext } from '../components';
import { useMutation } from 'react-query';
import { Coordinates } from '../utils/types';

export function useCreateSpot() {
  const supabase = React.useContext(SpotDataContext);
  if (!supabase) {
    throw new Error('useCreateSpot must be used within a SpotDataProvider');
  }

  return useMutation(async ({ latitude: lat, longitude: lon }: Coordinates) => {
    const { data, error } = await supabase.rpc('addspotlocation', {
      lon,
      lat,
    });
    if (error) throw new Error(error.message);
    return data;
  });
}
