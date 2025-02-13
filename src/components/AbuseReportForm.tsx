import React, { useEffect, useState } from 'react';
import InputField from '@components/InputField';
import TribeDropdown from './TribeDropdown';
import LGADropdown from './LGADropdown';
import Dropdown from './Dropdown';
import {
  genders,
  maritalStatuses,
  professions,
  socioEconomicStatuses,
  states,
} from '@data/dropdownData';
import CustomBtn from './CustomBtn';

interface Props {
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

const AbuseReportForm: React.FC<Props> = ({ setIsSuccess }) => {
  // State for form inputs
  const [age, setAge] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [relationship, setRelationship] = useState<string>('');
  const [frequency, setFrequency] = useState<string>('');
  const [occupation, setOccupation] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [numberOfChildren, setNumberOfChildren] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [lga, setLga] = useState<string>('');
  const [tribe, setTribe] = useState<string>('');
  const [otherTribe, setOtherTribe] = useState<string>('');
  const [socioEconomicStatus, setSocioEconomicStatus] = useState<string>('');
  const [maritalStatus, setMaritalStatus] = useState<string>('');
  const [profession, setProfession] = useState<string>('');

  // State for validation
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // Handle form validation
  const validateForm = () => {
    const isValid =
      age.trim() !== '' &&
      description.trim() !== '' &&
      relationship.trim() !== '' &&
      frequency.trim() !== '' &&
      occupation.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      numberOfChildren.trim() !== '' &&
      gender !== '' &&
      state !== '' &&
      lga !== '' &&
      tribe !== '' &&
      socioEconomicStatus !== '' &&
      maritalStatus !== '' &&
      profession !== '' &&
      (tribe !== 'Other' || otherTribe.trim() !== '');

    setIsFormValid(isValid);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Form submitted:', {
        age,
        description,
        relationship,
        frequency,
        occupation,
        phoneNumber,
        numberOfChildren,
        gender,
        state,
        lga,
        tribe: tribe === 'Other' ? otherTribe : tribe,
        socioEconomicStatus,
        maritalStatus,
        profession,
      });
      // Display Message
      setIsSuccess(true);
    }
  };

  useEffect(() => {
    validateForm();
  }, [
    age,
    description,
    relationship,
    frequency,
    occupation,
    phoneNumber,
    numberOfChildren,
    gender,
    state,
    lga,
    tribe,
    otherTribe,
    socioEconomicStatus,
    maritalStatus,
    profession,
  ]);

  return (
    <div className="2xl:flex 2xl:justify-center 2xl:items-center w-full mx-auto h-screen overflow-y-auto p-6 custom-scrollbar">
      <div className="w-full">
        <h1 className="text-2xl font-bold mt-12 md:mt-16 lg:mt-0 mb-6 text-center">
          Abuse Report Form
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-3 max-w-[30rem] mx-auto w-full"
        >
          <InputField
            label="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <InputField
            label="Description of the Abuse/Violence"
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <InputField
            label="Relationship to the Perpetrator"
            type="text"
            value={relationship}
            placeholder="e.g. Spouse, Parent, Sibling, etc."
            onChange={(e) => setRelationship(e.target.value)}
            required
          />
          <InputField
            label="Frequency of the Abuse/Violence"
            type="text"
            value={frequency}
            placeholder="e.g. Daily, Weekly, Monthly, etc."
            onChange={(e) => setFrequency(e.target.value)}
            required
          />
          <InputField
            label="Occupation"
            type="text"
            value={occupation}
            placeholder="e.g. Teacher, Nurse, etc."
            onChange={(e) => setOccupation(e.target.value)}
            required
          />
          <InputField
            label="Phone Number"
            type="tel"
            value={phoneNumber}
            placeholder="e.g. 08012345678"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <InputField
            min={0}
            label="Number of Children"
            type="number"
            value={numberOfChildren}
            onChange={(e) => setNumberOfChildren(e.target.value)}
            required
          />
          <Dropdown
            label="Gender"
            value={gender}
            options={genders}
            onChange={setGender}
            required
          />
          <Dropdown
            label="State"
            value={state}
            options={states}
            onChange={setState}
            required
          />
          <LGADropdown state={state} lga={lga} onChangeLGA={setLga} />
          <TribeDropdown
            tribe={tribe}
            otherTribe={otherTribe}
            onChangeTribe={setTribe}
            onChangeOtherTribe={(e) => setOtherTribe(e.target.value)}
          />
          <Dropdown
            label="Socio-economic Status"
            value={socioEconomicStatus}
            options={socioEconomicStatuses}
            onChange={setSocioEconomicStatus}
            required
          />
          <Dropdown
            label="Marital Status"
            value={maritalStatus}
            options={maritalStatuses}
            onChange={setMaritalStatus}
            required
          />
          <Dropdown
            label="Profession"
            value={profession}
            options={professions}
            onChange={setProfession}
            required
          />
          <CustomBtn type="submit" btnName="Submit" disabled={!isFormValid} />
        </form>
      </div>
    </div>
  );
};

export default AbuseReportForm;
