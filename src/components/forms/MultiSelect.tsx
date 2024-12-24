import React from 'react';

interface MultiSelectProps {
  id: string;
  label: string;
  value: string[];
  onChange: (value: string[]) => void;
  options: string[];
}

const MultiSelect = ({
  id,
  label,
  value = [],
  onChange,
  options,
}: MultiSelectProps) => {
  const handleChange = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter(item => item !== option)
      : [...value, option];
    onChange(newValue);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-[#5C4C54] mb-2">
        {label}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={value.includes(option)}
              onChange={() => handleChange(option)}
              className="h-4 w-4 text-[#4C9494] focus:ring-[#4C9494] border-gray-300 rounded"
            />
            <span className="text-[#5C4C54]">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;