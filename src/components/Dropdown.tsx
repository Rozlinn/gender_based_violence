import React from 'react';

interface DropdownProps {
  label: string;
  value: string;
  options: string[] | { name: string; lat: number; lng: number }[];
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  onChange,
  required = false,
  disabled = false,
}) => {
  return (
    <div>
      <label htmlFor={label} className="block text-sm font-medium text-gray-700">{label}</label>
      <select
      id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1 block w-full p-2 border border-gray-200 outline-1 outline-gray-300 rounded-md hover:border-gray-400 hover:outline-1 hover:outline-blue-500 focus:border-blue-500 transition-all disabled:cursor-not-allowed ${value === "" ? '!text-gray-400' : '!text-gray-700'}`}
        required={required}
        disabled={disabled}
      >
        <option value="" className='!text-gray-400'>Select {label}</option>
        {options.map((option) => (
          <option
            key={typeof option === 'string' ? option : option.name}
            value={typeof option === 'string' ? option : `${option.name}=${option.lat},${option.lng}`}
            className='text-gray-700'
          >
            {typeof option === 'string' ? option : option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;