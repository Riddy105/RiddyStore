import { IonButton, IonText } from "@ionic/react";

interface AddRemoveButtonProps {
  increase: () => void;
  decrease: () => void;
  quantity: number;
}
const AddRemoveButton = (props: AddRemoveButtonProps) => {
  const { increase, decrease, quantity } = props;
  return (
    <div className="flex justify-between items-center">
      <IonButton onClick={decrease} disabled={quantity === 1}>
        -
      </IonButton>
      <IonText>
        <p>{quantity}</p>
      </IonText>
      <IonButton onClick={increase}>+</IonButton>
    </div>
  );
};
export default AddRemoveButton;
