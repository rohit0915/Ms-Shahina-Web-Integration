import { useNavigate } from "react-router-dom";

export const Header = ({ heading, styles }) => {
  const navigate = useNavigate();
  return (
    <div className="Backward_Heading step_Heading">
    <div>
      <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
      <p style={{ width: "50%" }}>STEP 3 OF 3</p>
    </div>
    <p className="title">Review & Confirm</p>
  </div>
  );
};

export const PrimaryButton = ({ btnName, styles }) => {
  return (
    <button
      className={`w-96 py-6 ${
        styles ? styles : "bg-secondary text-primary"
      } text-2xl font-bold`}
    >
      {btnName}
    </button>
  );
};

export const ValidInput = ({ props }) => {
  const { label, placeholder, type, register, name } = props;

  return (
    <label
      htmlFor={label}
      className="w-full flex flex-col gap-5 font-medium text-2xl text-secondary"
    >
      {label}
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        {...register(name, { required: true })}
        className="w-full py-6 appearance-none px-12 border-none text-gray-700"
      />
    </label>
  );
};
