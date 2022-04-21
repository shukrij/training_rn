import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setListState: (state, actions) => {
      state.list = actions.payload;
    },
    deleteItem: (state, actions) => {
      const idx = actions.payload;
      const getFilterData = state.list.filter(each => each.idx !== idx)
      state.list = getFilterData
    },
  },
});

// Action creators are generated for each case reducer function
export const {setListState, deleteItem} = itemsSlice.actions

export default itemsSlice.reducer;