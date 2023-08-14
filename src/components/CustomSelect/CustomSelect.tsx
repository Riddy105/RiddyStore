import { IonSelect, IonSelectOption } from "@ionic/react";
import React from "react";
interface CustomSelectProps {
  options: string[] | number[];
  label: string;
  name: string;
}
const CustomSelect = (props: CustomSelectProps) => {
  const { options, label, name } = props;
  return (
    <IonSelect
      name={name}
      label={label}
      labelPlacement="floating"
      className="border-b border-[#ddd]"
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
