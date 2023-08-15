import { IonInput } from "@ionic/react";
import React from "react";
interface CustomInputProps {
  label: string;
  errorText: string;
  name: string;
  onChange: any;
  onBlur: any;
  value: string;
  hasError: boolean;
}
const CustomInput = (props: CustomInputProps) => {
  const { label, errorText, name, onBlur, onChange, value, hasError } = props;
  return (
    <IonInput
      className={!!hasError ? "ion-invalid ion-touched" : ""}
      name={name}
      label={label}
      value={value}
      labelPlacement="floating"
      errorText={errorText}
      onIonChange={onChange}
      onIonBlur={onBlur}
    ></IonInput>
  );
};

export default CustomInput;

// I faced a challenge using the IonInput component, initially I tried to compute the classname from the errorText prop. errorText was either the error message I wanted to show in a case where there is an error, otherwise it'd be an empty string.
// Passing an empty string as a value to the errorText prop on IonInput gave rise to an unusual behaviour where it took the styling off the element. I then had to settle for always passing an error message to the errorText so that it is always a string with characters.
// I then used the "hasError" prop which is always a boolean to dynamically compute the classname. If true, "ion-invalid ion-touched" is injected into the classname as these two classes are required to bring the errorText on the screen.
