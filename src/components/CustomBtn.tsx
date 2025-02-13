import { ButtonHTMLAttributes } from 'react';

interface CustomBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  xtraStyle?: string;
  btnName: string;
}

const CustomBtn: React.FC<CustomBtnProps> = ({
  xtraStyle,
  btnName,
  ...props
}) => {
  return (
    <button
      className={`w-full p-2 rounded-md transition duration-300 cursor-pointer ${
        props.disabled
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-primary'
      } ${xtraStyle ? xtraStyle : ''}`}
      {...props}
    >
      {btnName}
    </button>
  );
};

export default CustomBtn;
