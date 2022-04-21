import { configureStore } from '@reduxjs/toolkit'
import settingSlice from './settingSlice'
import itemsSlice from './itemsSlice'

export const store = configureStore({
  reducer: {
    settings: settingSlice,
    items: itemsSlice,
  },
})