const Button = ({styles}) => {
  return (
    <button type={"button"} className={`py-3 px-5 bg-blue-gradient ${styles} rounded-md outline-none cursor-pointer font-medium text-md text-gray-900
    `}>
      Get Started
    </button>
  );
};

export default Button;