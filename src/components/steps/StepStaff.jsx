import { useSelector, useDispatch } from "react-redux";
import { setStaff, nextStep } from "../../features/booking/bookingSlice";
import { staffList } from "../../data/staff";
import StepHeader from "../layout/StepHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";

const StepStaff = () => {
  const { staff } = useSelector((s) => s.booking);
  const dispatch = useDispatch();

  return (
    <div>
      <StepHeader title="Select Staff" subtitle="Choose a staff member to continue." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {staffList.map((item) => (
          <Card
            key={item.id}
            active={staff?.id === item.id}
            onClick={() => dispatch(setStaff(item))}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold text-gray-900">{item.name}</div>
                <div className="text-sm text-gray-500">{item.role}</div>
              </div>
              <div className="text-xs text-gray-500">ID: {item.id}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <Button disabled={!staff} onClick={() => dispatch(nextStep())}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepStaff;
