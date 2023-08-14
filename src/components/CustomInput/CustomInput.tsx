import { IonInput } from "@ionic/react";
import React from "react";
interface CustomInputProps {
  label: string;
  errorText: string;
  name: string;
}
const CustomInput = (props: CustomInputProps) => {
  const { label, errorText, name } = props;
  return (
    <IonInput
      name={name}
      label={label}
      labelPlacement="floating"
      errorText={errorText}
    ></IonInput>
  );
};

export default CustomInput;
