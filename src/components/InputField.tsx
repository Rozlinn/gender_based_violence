import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  required?: boolean;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  required = false,
  placeholder = '',
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={label}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full p-2 border border-gray-200 outline-1 outline-gray-300 rounded-md hover:border-gray-400 hover:outline-1 hover:outline-blue-500 focus:border-transparent focus:outline-blue-500 transition-all placeholder:text-gray-400"
          required={required}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={label}
          type={type}
          value={value}
          onChange={onChange}
          className={`mt-1 block w-full p-2 border border-gray-200 outline-1 outline-gray-300 rounded-md hover:border-gray-400 hover:outline-1 hover:outline-blue-500 focus:border-transparent focus:outline-blue-500 transition-all placeholder:text-gray-400`}
          required={required}
          placeholder={placeholder}
          {...props}
        />
      )}
    </div>
  );
};

export default InputField;
