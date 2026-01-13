import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../features/booking/bookingSlice";
import { loadBookingState, saveBookingState } from "./storage";

const preloadedBooking = loadBookingState();

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
  preloadedState: preloadedBooking ? { booking: preloadedBooking } : undefined,
});

store.subscribe(() => {
  saveBookingState(store.getState().booking);
});
