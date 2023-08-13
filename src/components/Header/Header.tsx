import React from "react";
import { Link } from "react-router-dom";
import { IonIcon, IonSearchbar } from "@ionic/react";
import { cartOutline } from "ionicons/icons";
import { useSelector } from "react-redux";
interface State {
  categories: [];
}
interface Category {
  name: string;
  id: string;
}
const Header: React.FC = () => {
  const categories = useSelector((state: State) => state.categories);
  console.log(categories);
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
        <IonIcon
          icon={cartOutline}
          className="h-[48px] w-[48px] justify-self-end"
        ></IonIcon>
      </div>
      <ul className="text-grey-100 flex flex-wrap justify-center gap-4 md:gap-8 text-base">
        {categories.map((category: Category) => (
          <li>
            <Link to={`category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
