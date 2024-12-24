import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: LucideIcon;
  required?: boolean;
}

const Input = ({
  id,
  label,
  type = 'text',
  value = '',
  onChange,
  placeholder,
  icon: Icon,
  required = false,
}: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#5C4C54] mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5C4C54] h-5 w-5" />
        )}
        <input
          type={type}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C9494] focus:border-transparent`}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
};

export default Input;