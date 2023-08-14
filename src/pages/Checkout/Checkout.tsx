import { IonButton, IonSelect, IonSelectOption, IonText } from "@ionic/react";
import React from "react";
import { CartItem, CustomInput, CustomSelect } from "../../components";
import { useSelector } from "react-redux";
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
const Checkout = () => {
  const CART_ITEMS = useSelector((state: State) => state.cartItems);
  const totalAmount = useSelector((state: State) => state.totalAmount);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = [2023, 2024, 2025, 2026, 2027, 2028];
  return (
    <form className="md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <IonText>
            <h2 className="text-black-50 font-bold">ACCOUNT INFORMATION</h2>
          </IonText>
          <CustomInput
            name="Email"
            errorText="Enter a Valid Email"
            label="Email"
          />
          <CustomInput
            name="phoneNumber"
            errorText="Enter a Valid Phone"
            label="Phone Number"
          />
        </div>
        <div className="flex flex-col gap-4">
          <IonText>
            <h2 className="text-black-50 font-bold">SHIPPING ADDRESS</h2>
          </IonText>
          <CustomInput
            name="address"
            errorText="Enter a Valid Address"
            label="Address"
          />
          <CustomInput name="city" errorText="Invalid City" label="City" />
          <div className="flex gap-4">
            <CustomInput
              name="state"
              errorText="Invalid State"
              label="State/Province"
            />
            <CustomInput
              name="zip"
              errorText="Invalid Postal Code"
              label="Zip/Postal Code"
            />
          </div>
          <CustomSelect
            name="country"
            label="Country"
            options={["United States", "Nigeria"]}
          ></CustomSelect>
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <IonText>
            <h2 className="text-black-50 font-bold">PAYMENT METHOD</h2>
          </IonText>
          <CustomInput
            name="cardName"
            errorText="Enter a Valid Name"
            label="Cardholder Name"
          />
          <CustomInput
            name="cardNumber"
            errorText="Enter a Valid Card Number"
            label="Card Number"
          />
          <div className="flex gap-2">
            <CustomSelect
              name="month"
              label="Month"
              options={months}
            ></CustomSelect>
            <CustomSelect
              name="year"
              label="Year"
              options={years}
            ></CustomSelect>
            <CustomInput name="cvv" errorText="Enter a Valid CVV" label="CVV" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <IonText>
            <h2 className="font-bold">Order Summary</h2>
          </IonText>
          {CART_ITEMS.length > 0 && (
            <div className="flex flex-col gap-6 ">
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
          )}
          <div className="flex justify-between">
            <IonText>
              <h2 className="font-bold">Total:</h2>
            </IonText>
            <IonText>
              <h2 className="font-bold">{`$ ${totalAmount.toFixed(2)}`}</h2>
            </IonText>
          </div>
          <IonButton>PLACE ORDER</IonButton>
        </div>
      </section>
    </form>
  );
};

export default Checkout;
