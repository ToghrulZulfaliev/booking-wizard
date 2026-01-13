import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  staff: null,
  service: null,
  date: null,   // "YYYY-MM-DD"
  time: null,   // "09:00"
  user: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    nextStep(state) {
      if (state.step < 4) state.step += 1;
    },
    prevStep(state) {
      if (state.step > 1) state.step -= 1;
    },
    setStep(state, action) {
      const n = action.payload;
      if (n >= 1 && n <= 4) state.step = n;
    },
    setStaff(state, action) {
      state.staff = action.payload;
      // staff dəyişəndə service/date/time sıfırlamaq istəsən:
      // state.service = null; state.date = null; state.time = null;
    },
    setService(state, action) {
      state.service = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload;
      state.time = null; // tarix dəyişəndə vaxtı sıfırla
    },
    setTime(state, action) {
      state.time = action.payload;
    },
    setUser(state, action) {
      state.user = { ...state.user, ...action.payload };
    },
    resetBooking() {
      return initialState;
    },
  },
});

export const {
  nextStep,
  prevStep,
  setStep,
  setStaff,
  setService,
  setDate,
  setTime,
  setUser,
  resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
