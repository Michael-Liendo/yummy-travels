import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { searchData } from '../routes/HomePage';

interface appStore {
  searchData: searchData
  setSearchData: (data: searchData) => void
}

export const useApp = create(
  persist<appStore>(
    (set) => ({
      searchData: {
        current_address: '',
        address: '',
        travel_date: '',
        passengers: 0,
      },
      setSearchData(data) {
        set({ searchData: data });
      },
    }),
    { name: 'app-storage' },
  ),
); 