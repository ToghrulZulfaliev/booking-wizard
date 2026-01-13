import { useSelector, useDispatch } from "react-redux";
import { setDate, setTime, nextStep, prevStep } from "../../features/booking/bookingSlice";
import { timeSlots } from "../../data/timeSlots";
import StepHeader from "../layout/StepHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";

const todayISO = () => {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const StepDateTime = () => {
  const { date, time } = useSelector((s) => s.booking);
  const dispatch = useDispatch();

  return (
    <div>
      <StepHeader title="Select Date & Time" subtitle="Choose date and an available slot." />

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
        <input
          type="date"
          min={todayISO()}
          value={date || ""}
          onChange={(e) => dispatch(setDate(e.target.value))}
          className="w-full md:w-[260px] rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <div className="text-sm font-medium text-gray-700 mb-2">Time</div>

        {!date ? (
          <div className="text-gray-500 text-sm">First select a date.</div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {timeSlots.map((t) => (
              <Card
                key={t}
                active={time === t}
                onClick={() => dispatch(setTime(t))}
                className="p-3 text-center"
              >
                <span className="text-sm font-medium">{t}</span>
              </Card>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between">
        <Button variant="secondary" onClick={() => dispatch(prevStep())}>
          Back
        </Button>
        <Button disabled={!date || !time} onClick={() => dispatch(nextStep())}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepDateTime;
