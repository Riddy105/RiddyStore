import { IonButton, IonText } from "@ionic/react";
import { CartItem } from "../../components";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
interface State {
  categories: [];
  products: [];
  cartItems: [];
  totalAmount: number;
}
interface CartItem {
  category: string;
  image: any;
  title: string;
  price: number;
  quantity: number;
  id: number;
}
const Cart = () => {
  const CART_ITEMS = useSelector((state: State) => state.cartItems);
  const totalAmount = useSelector((state: State) => state.totalAmount);
  console.log(CART_ITEMS);
  return (
    <section>
      <IonText className="text-center font-semibold">
        <p>Your cart</p>
      </IonText>
      <IonText className="text-center">
        <p>{`${CART_ITEMS.length} items`}</p>
      </IonText>
      {totalAmount !== 0 && (
        <p className="text-center font-semibold">{`Total Amount: $${totalAmount.toFixed(
          2
        )}`}</p>
      )}
      <div className="flex flex-col gap-6 my-4">
        {CART_ITEMS.map((item: CartItem, index) => (
          <CartItem
            category={item.category}
            title={item.title}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            id={item.id}
          ></CartItem>
        ))}
      </div>
      {CART_ITEMS.length > 0 && (
        <Link to="/checkout" className="flex justify-end">
          <IonButton>Checkout</IonButton>
        </Link>
      )}
    </section>
  );
};

export default Cart;

// This is the component rendered on '/cart' path. It is the cart page where all cart items are mapped out. 