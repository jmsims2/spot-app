import React from 'react';
import { SpotDataContext } from '../components';
import { useQuery } from 'react-query';
import { Coordinates } from '../utils/types';

type UseGetSpotsArgs = {
  position: Coordinates;
  enabled: boolean;
};

export function useGetSpots({
  position: { latitude, longitude },
  enabled,
}: UseGetSpotsArgs) {
  const supabase = React.useContext(SpotDataContext);
  if (!supabase) {
    throw new Error('useCreateSpot must be used within a SpotDataProvider');
  }

  return useQuery(
    ['spot-locations', latitude, longitude],
    async () => {
      const { data, error } = await supabase.rpc('getspotswithinnmeters', {
        lon: longitude,
        lat: latitude,
        meters: 500,
      });
      if (error) throw new Error(error.message);
      console.log({ useQuery: data });
      return data;
    },
    { enabled, keepPreviousData: true, notifyOnChangeProps: 'tracked' },
  );
}
