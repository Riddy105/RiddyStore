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
