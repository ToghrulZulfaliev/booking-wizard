import { useSelector, useDispatch } from "react-redux";
import { setService, nextStep, prevStep } from "../../features/booking/bookingSlice";
import { servicesList } from "../../data/services";
import StepHeader from "../layout/StepHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";

const StepService = () => {
  const { service } = useSelector((s) => s.booking);
  const dispatch = useDispatch();

  return (
    <div>
      <StepHeader title="Select Service" subtitle="Pick a service you need." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {servicesList.map((item) => (
          <Card
            key={item.id}
            active={service?.id === item.id}
            onClick={() => dispatch(setService(item))}
          >
            <div className="font-semibold text-gray-900">{item.title}</div>
            <div className="text-sm text-gray-500 mt-1">
              {item.duration} min • ${item.price}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <Button variant="secondary" onClick={() => dispatch(prevStep())}>
          Back
        </Button>
        <Button disabled={!service} onClick={() => dispatch(nextStep())}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepService;
