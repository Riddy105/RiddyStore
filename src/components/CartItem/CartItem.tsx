import { IonButton, IonIcon, IonImg, IonText } from "@ionic/react";
import { AddRemoveButton } from "../../components";
import { trash } from "ionicons/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";
interface CartItemProps {
  category: string;
  image: any;
  title: string;
  price: number;
  quantity: number;
  id: number;
}
const CartItem = (props: CartItemProps) => {
  const dispatch = useDispatch();
  const { image, price, category, title, quantity, id } = props;
  const incrementQuantity = () => {
    dispatch(cartActions.incrementQuantity(id));
  };
  const decrementQuantity = () => {
    dispatch(cartActions.decrementQuantity(id));
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  return (
    <div className="border-b border-black-50/30">
      <section className="flex gap-3 items-center mb-4">
        <IonImg src={image} alt={title} className="w-[70px] h-[70px]"></IonImg>
        <div>
          <IonText className="font-semibold">
            <h2>{title}</h2>
          </IonText>
          <IonText className="text-grey-100 text-lg">
            <h2>{`$${price}`}</h2>
          </IonText>
        </div>
      </section>
      <section className="grid grid-cols-2">
        <IonButton
          fill="clear"
          color="danger"
          className="justify-self-start"
          onClick={removeItemHandler}
        >
          <IonIcon icon={trash}></IonIcon>
          Remove
        </IonButton>
        <AddRemoveButton
          increase={incrementQuantity}
          decrease={decrementQuantity}
          quantity={quantity}
        />
      </section>
    </div>
  );
};

export default CartItem;

// This component houses the cart item UI and functionality. It accepts several props which includes the title, image, price, id of items added to cart.
// The "AddREmoveButton" component is used in here to increment and decrement quantity of items in cart.
