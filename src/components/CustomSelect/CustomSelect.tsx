import { IonSelect, IonSelectOption } from "@ionic/react";
import React from "react";
interface CustomSelectProps {
  options: string[] | number[];
  label: string;
  name: string;
  onChange: any;
  onBlur: any;
  hasError: boolean;
}
const CustomSelect = (props: CustomSelectProps) => {
  const { options, label, name, onChange, onBlur, hasError } = props;
  return (
    <IonSelect
      name={name}
      label={label}
      labelPlacement="floating"
      className={`border-b ${hasError ? "border-[#f00]" : "border-[#ddd]"}`}
      onIonChange={onChange}
      onIonBlur={onBlur}
    >
      {options.map((opt, index) => (
        <IonSelectOption value={opt} key={index}>
          {opt}
        </IonSelectOption>
      ))}
    </IonSelect>
  );
};

export default CustomSelect;

// This is a reusable Select component I created in order to ensure consistency in all select dropdowns accross the app. It return the ionic select component
// and accepts several props for configuring each dropdown. It receives an options prop which is an array, this is used to map out option elements for the dropdown.
// It also receives an 'hasError' prop which tells us if the select element is invalid and has been touched. This is important for from validation when I want to make sure that
// the select dropdown must be filled.
