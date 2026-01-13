import { useSelector, useDispatch } from "react-redux";
import { prevStep, setUser, resetBooking } from "../../features/booking/bookingSlice";
import StepHeader from "../layout/StepHeader";
import Button from "../ui/Button";

const StepConfirmation = () => {
  const booking = useSelector((s) => s.booking);
  const dispatch = useDispatch();

  const onChange = (key) => (e) => dispatch(setUser({ [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("FINAL BOOKING OBJECT:", booking);
    alert("Submitted! Check console for final object.");
  };

  return (
    <div>
      <StepHeader title="Confirmation" subtitle="Fill your details and confirm." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl border p-4">
          <div className="text-sm text-gray-500 mb-2">Selected</div>
          <div className="text-sm">
            <div><b>Staff:</b> {booking.staff?.name || "-"}</div>
            <div><b>Service:</b> {booking.service?.title || "-"}</div>
            <div><b>Date:</b> {booking.date || "-"}</div>
            <div><b>Time:</b> {booking.time || "-"}</div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              placeholder="First name"
              value={booking.user.firstName}
              onChange={onChange("firstName")}
              className="rounded-lg border px-3 py-2"
            />
            <input
              placeholder="Last name"
              value={booking.user.lastName}
              onChange={onChange("lastName")}
              className="rounded-lg border px-3 py-2"
            />
            <input
              placeholder="Email"
              value={booking.user.email}
              onChange={onChange("email")}
              className="rounded-lg border px-3 py-2 sm:col-span-2"
            />
            <input
              placeholder="Phone"
              value={booking.user.phone}
              onChange={onChange("phone")}
              className="rounded-lg border px-3 py-2 sm:col-span-2"
            />
          </div>

          <div className="mt-4 flex gap-3 justify-end">
            <Button type="button" variant="secondary" onClick={() => dispatch(resetBooking())}>
              Reset
            </Button>
            <Button type="submit">Confirm</Button>
          </div>
        </form>
      </div>

      <div className="flex justify-start">
        <Button variant="secondary" onClick={() => dispatch(prevStep())}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default StepConfirmation;
