import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showVerticalNav: false,
};

const showVerticalNavSlice = createSlice({
  name: "showVerticalNav",
  initialState,
  reducers: {
    toggleShowVerticalNav: (state) => {
      state.showVerticalNav = state.showVerticalNav === true ? false : true;
    },
    setShowVerticalNav: (state, action) => {
      state.showVerticalNav = action.payload;
    },
  },
});

export const { toggleShowVerticalNav, setShowVerticalNav } = showVerticalNavSlice.actions;
export default showVerticalNavSlice.reducer;
