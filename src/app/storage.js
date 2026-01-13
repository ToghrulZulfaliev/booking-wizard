const KEY = "booking_state_v1";

export const loadBookingState = () => {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return undefined;
    return JSON.parse(raw);
  } catch {
    return undefined;
  }
};

export const saveBookingState = (state) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    
  }
};

export const clearBookingState = () => {
  try {
    localStorage.removeItem(KEY);
  } catch {}
};
