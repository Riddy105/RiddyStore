import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IonIcon, IonSearchbar } from "@ionic/react";
import { cartOutline } from "ionicons/icons";
import { useSelector } from "react-redux";
interface State {
  categories: [];
  cartItems: [];
  itemsInCart: number;
  products: [];
}
interface Category {
  name: string;
  id: string;
}
interface Product {
  category: string;
  image: any;
  title: string;
  price: number;
}
const Header: React.FC = () => {
  const pathname = useLocation();
  const [visibleProducts, setVisibleProduct] = useState<any>([]);
  const [seachBarEmpty, setSearchBarEmpty] = useState(true);
  const categories = useSelector((state: State) => state.categories);
  const itemsInCart = useSelector((state: State) => state.itemsInCart);
  const PRODUCTS = useSelector((state: State) => state.products);

  const PRODUCT_LINKS = PRODUCTS.map((product: Product) => {
    return { category: product.category, title: product.title };
  });
  const searchProductHandler = (e: any) => {
    const value = e.target.value.toLowerCase();
    setSearchBarEmpty(!value);
    const match = PRODUCT_LINKS.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setVisibleProduct(match);
  };

  // This 'searchProductHandler' function is worthy of being explained. What it does is that it filters through an array of 'PRODUCT_LINK' and returns an array filled with product title that matches the user input in the searchbox.
  // PRODUCT_LINK however was mapped out from PRODUCTS array pulled out from the store, it returns an object for each product and this object contains the category and title field for each products {category: '', title: ''}
  useEffect(() => {
    setSearchBarEmpty(true);
  }, [pathname]); // This effect runs any time the path changes in the URL, what it does is get rid of the searchbox component soon as the user moves to another page.
  return (
    <header className="mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 py-6 items-center gap-y-2">
        <Link to="/">
          <h2 className="text-2xl font-bold">RiddyStore</h2>
        </Link>
        <IonSearchbar
          placeholder="Search products..."
          className="row-start-2 col-span-2 md:col-auto md:row-start-auto"
          onInput={searchProductHandler}
          onIonClear={() => setSearchBarEmpty(true)}
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
      {!seachBarEmpty && (
        <SearchOptions
          visibleProducts={visibleProducts}
          setSearchBarEmpty={setSearchBarEmpty}
        />
      )}
    </header>
  );
};

export default Header;
// The header component essentially outputs the header that shows up across all pages. Here we find the logo, the search bar and the cart icon.
// It also contains the navigations to all the categories.
interface SearchOptionsProps {
  visibleProducts: [];
  setSearchBarEmpty: (arg: boolean) => void;
}
const SearchOptions = (props: SearchOptionsProps) => {
  const { visibleProducts, setSearchBarEmpty } = props;
  return (
    <>
      <div
        className="overlay"
        onClick={() => {
          setSearchBarEmpty(true);
        }}
      ></div>
      <ul
        className=" flex flex-col gap-2 w-11/12 md:w-1/2 h-fit bg-[#f0f8ff] shadow-search z-10 fixed top-[180px] left-[50%] translate-x-[-50%] overflow-scroll py-4 px-4"
        onClick={() => {
          setSearchBarEmpty(true);
        }}
      >
        {visibleProducts.map((link: any) => {
          const category = link.category.split(" ").join("_");
          const title = link.title.split(" ").join("+");
          return (
            <li key={link.title}>
              <Link to={`category/${category}/${title}`}>{link.title}</Link>
            </li>
          );
        })}
        {visibleProducts.length === 0 && (
          <li>Oops! No item match your search.. </li>
        )}
      </ul>
    </>
  );
};

// This SearchOptions component is a box that shows up whenever a user starts typing in the search box. This box is populated by links to those products that matches the text being input by the user.
// This looks a bit sophisticated, searching for products would have been a whole lot easier if on the home page, I had rendered all the products but because I took an approach where
// what I have categories on the home page, I couldn't possibly be fltering the array of products against the user input.
// It takes in two props, visibleProducts and setSearchBarEmpty.
//1. visibleProducts is an array which contains the links to the products that matches the user inputs, updates on every key stroke.
//2. setSearchBarEmpty is a state updating function, 'searchBarEmpty' itself is a boolean value that controls the appearance and dissapearance of the box. So I need to set it to false whenever I click on any link so that the box can dissapear when routing to another page. If not done this way, because the header is an app-wide component, the box will persist even after leaving one page to another.
