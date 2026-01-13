const Card = ({ active, className = "", ...props }) => {
  return (
    <div
      className={
        "rounded-xl border p-4 shadow-sm transition cursor-pointer " +
        (active ? "border-purple-600 ring-2 ring-purple-200" : "border-gray-200 hover:border-gray-300") +
        " " +
        className
      }
      {...props}
    />
  );
};

export default Card;
