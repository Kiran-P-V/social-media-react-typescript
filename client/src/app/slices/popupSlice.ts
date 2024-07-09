import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PopupState {
  anchorEl: any;
  type: string;
}

const initialState: PopupState = {
  anchorEl: null,
  type: "",
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (
      state,
      action: PayloadAction<{ anchorEl: any; type: string }>
    ) => {
      state.anchorEl = action.payload.anchorEl;
      state.type = action.payload.type;
    },
    closePopup: (state) => {
      state.anchorEl = null;
      state.type = "";
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;
