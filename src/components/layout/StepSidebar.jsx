import { useSelector, useDispatch } from "react-redux";
import { setStep } from "../../features/booking/bookingSlice";

const steps = ["Staff", "Service", "Date & Time", "Confirmation"];

const StepSidebar = () => {
  const step = useSelector((s) => s.booking.step);
  const dispatch = useDispatch();

  return (
    <aside className="w-[300px] bg-[#141414] text-white p-6">
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Booking</h2>
        <p className="text-white/60 text-sm">Appointment wizard</p>
      </div>

      <ul className="space-y-4">
        {steps.map((label, idx) => {
          const num = idx + 1;
          const active = step === num;

          return (
            <li key={label}>
              <button
                type="button"
                onClick={() => dispatch(setStep(num))}
                className="w-full flex items-center gap-3 text-left"
              >
                <span
                  className={
                    "w-9 h-9 rounded-full flex items-center justify-center text-sm " +
                    (active ? "bg-purple-600" : "bg-white/10 text-white/70")
                  }
                >
                  {num}
                </span>
                <span className={active ? "font-semibold" : "text-white/60"}>
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default StepSidebar;
