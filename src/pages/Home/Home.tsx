import React from "react";
import { useSelector } from "react-redux";
import { IndividualCategory } from "../../components";
interface State {
  categories: [];
}
interface Category {
  name: string;
  cover: any;
  id: string;
}
const Home = () => {
  const CATEGORIES = useSelector((state: State) => state.categories);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8">
      {CATEGORIES.map((cat: Category, index) => (
        <IndividualCategory
          key={index}
          name={cat.name}
          cover={cat.cover}
          id={cat.id}
        ></IndividualCategory>
      ))}
    </section>
  );
};

export default Home;
