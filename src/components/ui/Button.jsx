const Button = ({ variant = "primary", disabled, className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition";

  const styles = {
    primary: "bg-purple-600 text-white hover:bg-purple-700 disabled:bg-purple-300",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
  };

  return (
    <button
      disabled={disabled}
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    />
  );
};

export default Button;
