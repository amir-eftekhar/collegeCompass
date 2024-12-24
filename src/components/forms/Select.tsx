import React from 'react';

interface SelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('Select value changed:', e.target.value); // Debug log
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#5C4C54] mb-2">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C9494] focus:border-transparent"
        required={required}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;