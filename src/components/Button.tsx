type ButtonProps = {
  label: string;
  color: string;
};

function Button({ label, color }: ButtonProps) {
  return (
    <button
      type="button"
      className={`text-white px-4 py-2 font-roboto rounded-lg ${color}`}
    >
      {label}
    </button>
  );
}

export default Button;