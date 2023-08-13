import { IonImg, IonText } from "@ionic/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AddRemoveButton } from "../../components";
interface Product {
  category: string;
  image: any;
  title: string;
  price: number;
  description: string;
}
interface State {
  categories: [];
  products: [];
}
const ProductDetail = () => {
  const { productId } = useParams();
  const transformedId = productId?.replace("*", "/").split("+").join(" "); // Converting productId in the URL back to the default string (title of the product)
  const PRODUCTS = useSelector((state: State) => state.products); // Getting all products from store to extract the particular product to be displayed.
  const productToDisplay: any = PRODUCTS.find(
    (item: Product) => item.title === transformedId
  );
  const { image, description, price, title } = productToDisplay;
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrementQuantity = () => {
    setQuantity((prev) => prev - 1);
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <IonImg
        src={image}
        alt={title}
        className="w-full md:w-1/2 h-[388px] md:h-auto justify-self-center"
      ></IonImg>
      <article>
        <IonText className="font-bold text-lg md:text-2xl">
          <h2 className="mb-4">{title}</h2>
        </IonText>
        <IonText className="text-grey-100 text-lg">
          <p className="mb-10">{`$ ${price}`}</p>
        </IonText>
        <AddRemoveButton
          increase={incrementQuantity}
          decrease={decrementQuantity}
          quantity={quantity}
        />
        <div className="mt-10 flex flex-col gap-6">
          <IonText className="font-semibold text-xl">
            <h2>Description:</h2>
          </IonText>
          <IonText>
            <p>{description}</p>
          </IonText>
        </div>
      </article>
    </section>
  );
};
export default ProductDetail;