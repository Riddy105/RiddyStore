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
      <div className="flex flex-col items-center gap-2 md:gap-4">
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

// This component entails individual product card on the category page. It accepts image, price and title as props. On click of any of the product
// the url is updated to contain the name of the product but there is something worth explaining here, the way the product name is transformed to what
//eventually shows up in the URL. So let's say the name of the product is 'Men's fluffy leather wear', so that it doesn't get printed to the URL that way with space in-between.
// I transformed it to show up this way 'Men's+fluffy+leather+wear' in the URL. So basically I splitted the string and joined back using the '+'.
// So there is an edge case to take note here, some products may actually contain '/' and the way React-Router works is that whener it sees a '/', it creates a path and that breaks the code.
// In that case, I replaced every '/' with a '*' and that way every thing works fine. I revert this whenever we get to the product-detail page... 
