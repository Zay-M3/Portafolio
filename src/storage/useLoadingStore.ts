import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface LoadingStore {
  isLoading: boolean
  setLoading: (value: boolean) => void
}

export const useLoadingStore = create<LoadingStore>()(
  persist(
    (set) => ({
      isLoading: false,
      setLoading: (value) => set({ isLoading: value }),
    }),
    {
      name: 'loading-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ isLoading: state.isLoading }),
    }
  )
)
