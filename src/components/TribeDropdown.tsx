import { tribes } from '@data/dropdownData';
import InputField from './InputField';
import Dropdown from './Dropdown';

interface TribeDropdownProps {
  tribe: string;
  otherTribe: string;
  onChangeTribe: (value: string) => void;
  onChangeOtherTribe: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const TribeDropdown: React.FC<TribeDropdownProps> = ({
  tribe,
  otherTribe,
  onChangeTribe,
  onChangeOtherTribe,
}) => {
  return (
    <div>
      <Dropdown
        label="Tribe"
        value={tribe}
        options={tribes}
        onChange={onChangeTribe}
        required
      />
      {tribe === 'Other' && (
        <div className="my-3">
          <InputField
            label="Specify Tribe"
            type="text"
            value={otherTribe}
            onChange={(event) => onChangeOtherTribe(event)}
            required
            placeholder="Enter your tribe"
          />
        </div>
      )}
    </div>
  );
};

export default TribeDropdown;
