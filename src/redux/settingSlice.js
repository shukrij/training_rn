import { createSlice } from '@reduxjs/toolkit'
import { my } from '../lang/my'
import { en } from '../lang/en'

const initialState = {
  language: my,
  appMode:'dark'
}

export const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage:(state, actions) => {
        state.language = actions.payload
    },
    setBahasa:(state) => {
        state.language = my
    },
    setEnglish:(state) => {
        state.language = en
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLanguage, setBahasa, setEnglish} = settingSlice.actions

export default settingSlice.reducer