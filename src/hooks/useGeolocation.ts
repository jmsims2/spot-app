import { useReducer, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';

export type GeolocationData = {
  latitude: number;
  longitude: number;
};

type State = {
  error: string;
  position: GeolocationData;
};

type Action =
  | { type: 'SET_POSITION'; payload: GeolocationData }
  | { type: 'SET_ERROR'; payload: string };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_POSITION':
      return { error: '', position: action.payload };
    case 'SET_ERROR':
      return { error: action.payload, position: { latitude: 0, longitude: 0 } };
  }
};

export function useGeolocation() {
  const [state, dispatch] = useReducer(reducer, {
    error: '',
    position: {
      latitude: 0,
      longitude: 0,
    },
  });

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      p => {
        dispatch({ type: 'SET_POSITION', payload: p.coords });
      },
      e => dispatch({ type: 'SET_ERROR', payload: e.message }),
    );

    return () => Geolocation.clearWatch(watchId);
  }, []);

  return state;
}
