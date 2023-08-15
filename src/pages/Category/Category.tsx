import { IonImg, IonText } from "@ionic/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IndividualProduct } from "../../components";
interface State {
  categories: [];
  products: [];
}
interface Category {
  name: string;
  cover: any;
  id: string;
}
interface Product {
  category: string;
  image: any;
  title: string;
  price: number;
}
const Category = () => {
  const { categoryId } = useParams();
  const transformedId = categoryId?.split("_").join(" "); // Transforming categories from the URLParams back to default to match
  const CATEGORIES = useSelector((state: State) => state.categories);
  const PRODUCTS = useSelector((state: State) => state.products);
  const presentCategory: any = CATEGORIES.find(
    (cat: Category) => cat.name === transformedId
  );
  // Filtering through all products to return only those products whose category matches the present 'category' in the URL.
  const PRESENT_CATEGORY_PRODUCTS = PRODUCTS.filter(
    (product: Product) => product.category === transformedId
  );
  console.log(PRODUCTS, PRESENT_CATEGORY_PRODUCTS);
  return (
    <section>
      <div className="flex flex-col items-center">
        <IonImg
          src={presentCategory.cover}
          className="h-[240px] md:h-[320px] w-full object-cover"
        ></IonImg>
        <IonText>
          <h2 className="text-2xl font-bold mt-4">
            {presentCategory.name.toUpperCase()}
          </h2>
        </IonText>
        <IonText>
          <p>{`${PRESENT_CATEGORY_PRODUCTS.length} items`}</p>
        </IonText>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-12 mt-8">
        {PRESENT_CATEGORY_PRODUCTS.map((product: Product, index) => (
          <IndividualProduct
            key={index}
            image={product.image}
            price={product.price}
            title={product.title}
          ></IndividualProduct>
        ))}
      </section>
    </section>
  );
};

export default Category;
