import React from 'react';

interface RankedSelectProps {
  id: string;
  label: string;
  options: string[];
  value: { option: string; rank: number }[];
  onChange: (value: { option: string; rank: number }[]) => void;
  maxSelections?: number;
}

const RankedSelect: React.FC<RankedSelectProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  maxSelections = 3
}) => {
  const handleSelect = (option: string, rank: number) => {
    const newValue = [...value];
    const existingIndex = newValue.findIndex(v => v.option === option);
    const existingRankIndex = newValue.findIndex(v => v.rank === rank);

    if (existingIndex >= 0) {
      // Remove existing selection
      newValue.splice(existingIndex, 1);
    }

    if (existingRankIndex >= 0) {
      // Remove option with same rank
      newValue.splice(existingRankIndex, 1);
    }

    if (rank > 0) {
      newValue.push({ option, rank });
    }

    onChange(newValue.sort((a, b) => a.rank - b.rank));
  };

  return (
    <div>
      <label className="block text-sm font-medium text-[#5C4C54] mb-2">
        {label}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-4">
            <span className="text-[#5C4C54] flex-grow">{option}</span>
            <div className="flex space-x-2">
              {Array.from({ length: maxSelections }, (_, i) => i + 1).map((rank) => (
                <button
                  key={rank}
                  type="button"
                  onClick={() => handleSelect(option, rank)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    value.find(v => v.option === option && v.rank === rank)
                      ? 'bg-[#4C9494] text-white'
                      : 'bg-gray-100 text-[#5C4C54] hover:bg-gray-200'
                  }`}
                >
                  {rank}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankedSelect;