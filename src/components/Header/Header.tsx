import React from "react";
import { Link } from "react-router-dom";
import { IonIcon, IonSearchbar } from "@ionic/react";
import { cartOutline } from "ionicons/icons";
import { useSelector } from "react-redux";
interface State {
  categories: [];
  cartItems: [];
  itemsInCart: number;
}
interface Category {
  name: string;
  id: string;
}
const Header: React.FC = () => {
  const categories = useSelector((state: State) => state.categories);
  const itemsInCart = useSelector((state: State) => state.itemsInCart);
  return (
    <header className="mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 py-6 items-center gap-y-2">
        <Link to="/">
          <h2 className="text-2xl font-bold">RiddyStore</h2>
        </Link>
        <IonSearchbar
          placeholder="Search products..."
          className="row-start-2 col-span-2 md:col-auto md:row-start-auto"
        ></IonSearchbar>
        <Link to="cart" className="justify-self-end relative">
          <IonIcon icon={cartOutline} className="h-12 w-12"></IonIcon>
          {itemsInCart !== 0 && (
            <p className="bg-black-50 rounded-full absolute h-6 w-6 top-[-4px] right-0 text-center text-white">
              {itemsInCart}
            </p>
          )}
        </Link>
      </div>
      <ul className="text-grey-100 flex flex-wrap justify-center gap-4 md:gap-8 text-base">
        {categories.map((category: Category, i) => {
          const link = category.name.split(" ").join("_"); // To format any category with a space between the name i.e Men's clothing => Men's_clothing
          const title = category.name.toUpperCase();
          return (
            <li key={i}>
              <Link to={`category/${link}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
