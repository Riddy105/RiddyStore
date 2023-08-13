import { IonImg, IonText } from "@ionic/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
interface State {
  categories: [];
}
interface Category {
  name: string;
  cover: any;
  id: string;
}
const Category = () => {
  const { categoryId } = useParams();
  const CATEGORIES = useSelector((state: State) => state.categories);
  const presentCategory: any = CATEGORIES.find(
    (cat: Category) => cat.id === categoryId
  );
  console.log(presentCategory);
  return (
    <section>
      <div className="flex flex-col items-center gap-4">
        <IonImg
          src={presentCategory.cover}
          className="h-[240px] md:h-[320px] w-full object-cover "
        ></IonImg>
        <IonText>
          <h2 className="text-2xl font-bold ">{presentCategory.name}</h2>
        </IonText>
        <IonText>
          <p>Number of Items</p>
        </IonText>
      </div>
    </section>
  );
};

export default Category;
