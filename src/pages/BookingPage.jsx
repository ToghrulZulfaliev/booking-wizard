import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep } from "../features/booking/bookingSlice";

import StepSidebar from "../components/layout/StepSidebar";
import StepStaff from "../components/steps/StepStaff";
import StepService from "../components/steps/StepService";
import StepDateTime from "../components/steps/StepDateTime";
import StepConfirmation from "../components/steps/StepConfirmation";
import Button from "../components/ui/Button";

const BookingPage = () => {
  const step = useSelector((s) => s.booking.step);
  const dispatch = useDispatch();

  const renderStep = () => {
    switch (step) {
      case 1: return <StepStaff />;
      case 2: return <StepService />;
      case 3: return <StepDateTime />;
      case 4: return <StepConfirmation />;
      default: return <StepStaff />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <StepSidebar />

      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6 md:p-8">
          {renderStep()}

          {/* Optional debug controls (istəsən sil) */}
          <div className="mt-8 pt-6 border-t flex items-center justify-between">
            <div className="text-sm text-gray-500">Current step: {step}</div>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => dispatch(prevStep())}>Prev</Button>
              <Button onClick={() => dispatch(nextStep())}>Next</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
