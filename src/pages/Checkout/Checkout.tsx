import { IonButton, IonSelect, IonSelectOption, IonText } from "@ionic/react";
import React, { useState } from "react";
import {
  CartItem,
  CustomInput,
  CustomSelect,
  SuccessModal,
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store";
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
interface ValuesProp {
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  cardName: string;
  cardNumber: string;
  month: string;
  year: string;
  cvv: string;
}
const Checkout = () => {
  const [submitted, setSubmitted] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const initialValues = {
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    cardName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  };

  const formik = useFormik({
    initialValues,
    validate: (values: ValuesProp) => {
      const errors: any = {};
      if (!values.email) {
        errors.email = "Enter a Valid Email";
      }
      if (!values.phoneNumber) {
        errors.phoneNumber = "Enter a Valid Phone";
      }
      if (!values.address) {
        errors.address = "Enter a Valid Address";
      }
      if (!values.city) {
        errors.city = "Enter a Valid City";
      }
      if (!values.state) {
        errors.state = "Enter a Valid State";
      }
      if (!values.zip) {
        errors.zip = "Enter a Valid Postal Code";
      }
      if (!values.country) {
        errors.country = "Enter a Valid Country";
      }
      if (!values.cardName) {
        errors.cardName = "Enter a Valid Card Name";
      }
      if (!values.cardNumber) {
        errors.cardNumber = "Enter a Valid Card Number";
      }
      if (!values.month) {
        errors.month = "Invalid";
      }
      if (!values.year) {
        errors.year = "Invalid";
      }
      if (!values.cvv) {
        errors.cvv = "Enter a Valid CVV";
      }
      return errors;
    },
    onSubmit: (values) => {
      setSubmitted(true);
      dispatch(cartActions.clearCart(null));
      setTimeout(() => {
        navigate("/");
      }, 5000);
    },
  });
  return (
    <form className="md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <IonText>
            <h2 className="text-black-50 font-bold">ACCOUNT INFORMATION</h2>
          </IonText>
          <CustomInput
            name="email"
            label="Email"
            errorText="Enter a Valid Email"
            // hasError prop is a boolean value being passed to the component in order to allow ionic understand when to display our errorText. hasError is only true {when an input has been touched and also invalid} based on individual conditions..
            hasError={!!formik.errors.email && !!formik.touched.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <CustomInput
            name="phoneNumber"
            label="Phone Number"
            errorText="Enter a Valid Phone"
            hasError={
              !!formik.errors.phoneNumber && !!formik.touched.phoneNumber
            }
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
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
            hasError={!!formik.errors.address && !!formik.touched.address}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <CustomInput
            name="city"
            errorText="Invalid City"
            label="City"
            hasError={!!formik.errors.city && !!formik.touched.city}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          <div className="flex gap-4">
            <CustomInput
              name="state"
              errorText="Invalid State"
              label="State/Province"
              hasError={!!formik.errors.state && !!formik.touched.state}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.state}
            />
            <CustomInput
              name="zip"
              errorText="Invalid Postal Code"
              label="Zip/Postal Code"
              hasError={!!formik.errors.zip && !!formik.touched.zip}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.zip}
            />
          </div>
          <CustomSelect
            name="country"
            label="Country"
            options={["United States", "Nigeria"]}
            hasError={!!formik.errors.country && !!formik.touched.country}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
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
            hasError={!!formik.errors.cardName && !!formik.touched.cardName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.cardName}
          />
          <CustomInput
            name="cardNumber"
            errorText="Enter a Valid Card Number"
            label="Card Number"
            hasError={!!formik.errors.cardNumber && !!formik.touched.cardNumber}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.cardNumber}
          />
          <div className="flex gap-2 items-center">
            <CustomSelect
              name="month"
              label="Month"
              options={months}
              hasError={!!formik.errors.month && !!formik.touched.month}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            ></CustomSelect>
            <CustomSelect
              name="year"
              label="Year"
              options={years}
              hasError={!!formik.errors.year && !!formik.touched.year}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            ></CustomSelect>
            <CustomInput
              name="cvv"
              errorText="Enter a Valid CVV"
              label="CVV"
              hasError={!!formik.errors.cvv && !!formik.touched.cvv}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.cvv}
            />
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
          <IonButton
            onClick={() => formik.handleSubmit()}
            disabled={CART_ITEMS.length === 0}
          >
            PLACE ORDER
          </IonButton>
        </div>
      </section>
      {submitted && <SuccessModal />}
    </form>
  );
};

export default Checkout;
