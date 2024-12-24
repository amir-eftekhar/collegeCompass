import React from 'react';
import { State, City } from 'country-state-city';
import CustomSelect from './CustomSelect';

interface LocationSelectProps {
  stateValue: string;
  cityValue: string;
  onStateChange: (value: string) => void;
  onCityChange: (value: string) => void;
}

const LocationSelect: React.FC<LocationSelectProps> = ({
  stateValue,
  cityValue,
  onStateChange,
  onCityChange
}) => {
  // Get all US states
  const states = State.getStatesOfCountry('US').map(state => ({
    value: state.isoCode,
    label: state.name
  }));
  
  // Get cities for selected state
  const cities = stateValue 
    ? City.getCitiesOfState('US', stateValue).map(city => ({
        value: city.name,
        label: city.name
      }))
    : [];

  return (
    <div className="space-y-4">
      <CustomSelect
        value={stateValue}
        onChange={onStateChange}
        options={states}
        placeholder="Select a state"
        label="State"
      />

      {stateValue && (
        <CustomSelect
          value={cityValue}
          onChange={onCityChange}
          options={cities}
          placeholder="Select a city"
          label="City"
        />
      )}
    </div>
  );
};

export default LocationSelect;