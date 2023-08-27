import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { searchData } from '../routes/HomePage';

interface appStore {
  searchData: searchData
  setSearchData: (data: searchData) => void
}

export const useCart = create(
  persist(
    (set, get) => ({
      app: [],
    }),
    { name: 'app-storage' },
  ),
);