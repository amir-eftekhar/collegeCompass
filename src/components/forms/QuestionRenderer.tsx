import React from 'react';
import { Question } from '../../types/forms';
import Select from './Select';
import LocationSelect from './LocationSelect';
import RankedSelect from './RankedSelect';

interface QuestionRendererProps {
  question: Question;
  value: any;
  onChange: (value: any) => void;
  locationState?: string;
  locationCity?: string;
  onLocationChange?: {
    state: (value: string) => void;
    city: (value: string) => void;
  };
}

const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  value,
  onChange,
  locationState,
  locationCity,
  onLocationChange
}) => {
  switch (question.type) {
    case 'select':
      return (
        <Select
          id={question.id}
          label={question.title}
          options={question.options || []}
          value={value || ''}
          onChange={onChange}
          required={question.required}
        />
      );
    
    case 'location':
      return (
        <LocationSelect
          stateValue={locationState || ''}
          cityValue={locationCity || ''}
          onStateChange={onLocationChange?.state || (() => {})}
          onCityChange={onLocationChange?.city || (() => {})}
        />
      );
    
    case 'ranked':
      return (
        <RankedSelect
          id={question.id}
          label={question.title}
          options={question.options || []}
          value={value || []}
          onChange={onChange}
          maxSelections={3}
        />
      );
    
    case 'text':
      return (
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C9494] focus:border-transparent"
        />
      );
    
    default:
      return null;
  }
};

export default QuestionRenderer;