import { IonImg, IonText } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
interface IndividualProductProps {
  image: any;
  price: number;
  title: string;
}
const IndividualProduct = (props: IndividualProductProps) => {
  const { image, price, title } = props;
  const link = title.replace("/", "*").split(" ").join("+"); // Converting product title to readable string as productId in the URL i.e Men's fluffy shirt => Men's+fluffy+shirt
  return (
    <Link to={link}>
      <div className="flex flex-col items-center gap-4">
        <IonImg src={image} className="h-[300px] w-[300px]"></IonImg>
        <IonText className="font-bold w-3/5 text-center">
          <h2>{title}</h2>
        </IonText>
        <IonText className="text-grey-100">
          <p>{`$${price}`}</p>
        </IonText>
      </div>
    </Link>
  );
};

export default IndividualProduct;
