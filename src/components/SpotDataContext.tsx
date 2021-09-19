import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const SpotDataContext = React.createContext<SupabaseClient | null>(null);
export const supabase = createClient(
  'https://xwcidxuiqlpntssorsxe.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTkxNDIwMywiZXhwIjoxOTQ3NDkwMjAzfQ.Ene44VFeLnHDrj91K1HGBi-WdlA6EpaXDuggRfTt5ew',
  { localStorage: AsyncStorage as any },
);

export const SpotDataProvider = ({ children }) => (
  <SpotDataContext.Provider value={supabase}>
    {children}
  </SpotDataContext.Provider>
);
