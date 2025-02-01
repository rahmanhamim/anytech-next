import { createSlice } from '@reduxjs/toolkit'

interface INavbarState {
  isNavbarOpen: boolean
}

const initialState: INavbarState = {
  isNavbarOpen: false,
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    closeNavbar: (state) => {
      state.isNavbarOpen = false
    },
    openNavbar: (state) => {
      state.isNavbarOpen = true
    },
  },
})

export const { closeNavbar, openNavbar } = navbarSlice.actions

export default navbarSlice.reducer
