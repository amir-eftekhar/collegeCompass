import React from 'react';
import { Plus } from 'lucide-react';

interface AddButtonProps {
  onClick: () => void;
  label: string;
  description?: string;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick, label, description }) => {
  return (
    <div className="space-y-2">
      <button
        onClick={onClick}
        className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#4C5FE3] text-white rounded-lg hover:bg-opacity-90 transition-colors w-full"
      >
        <Plus className="h-5 w-5" />
        <span>{label}</span>
      </button>
      {description && (
        <p className="text-sm text-[#5C4C54] px-2">{description}</p>
      )}
    </div>
  );
};

export default AddButton;