import { statesLGAsCoordinates } from '@data/dropdownData';
import Dropdown from './Dropdown';

interface LGADropdownProps {
  state: string;
  lga: string;
  onChangeLGA: (value: string) => void;
}

const LGADropdown: React.FC<LGADropdownProps> = ({
  state,
  lga,
  onChangeLGA,
}) => {
  const lgaOptions = state
    ? statesLGAsCoordinates[state as keyof typeof statesLGAsCoordinates].map(
        (lga) => ({
          name: lga.name,
          lat: lga.lat,
          lng: lga.lng,
        })
      )
    : [];

  return (
    <Dropdown
      label="LGA"
      value={lga}
      options={lgaOptions}
      onChange={onChangeLGA}
      required
      disabled={!state}
    />
  );
};

export default LGADropdown;
