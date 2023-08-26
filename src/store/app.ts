import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCart = create(
  persist(
    (set, get) => ({
      app: [],
    }),
    { name: 'app-storage' },
  ),
);