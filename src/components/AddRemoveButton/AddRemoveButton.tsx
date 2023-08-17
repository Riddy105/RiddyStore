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

// This component handles the increment and decrement functionality of each cart item. Because this component acts differently on seperate pages, there was
// a need to abstract it out. It accept three props, the increase function, decrease function and the quantity itself.

// i.e On the product detail page, where users can add a product to cart, the quantity starts off as 1. The increase function being passed increment the
// quantity in steps of 1 and the decrease function reduces the quantity in steps of 1 also. The decrease button in this component becomes automatically
// diabled if "quantity === 1" so that way, quantity can't go below 1.

//On the cart page, where all the items that has been added to cart is displayed. This component takes in those exact same props but what the values of
// those props are a bit different.
//1. The quantity now does not start off as 1, rather is it the quantity that is in that cart object.
//2. The increase function now calls a reducer action from the store "incrementQuantity" which increases the quantity of that particular item in the store.
//3.. The decrease function now calls a reducer action from the store "decrementQuantity" which decreases the quantity of that particular item in the store.
