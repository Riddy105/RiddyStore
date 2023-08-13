import { IonButton, IonImg, IonText } from "@ionic/react";
import { Link } from "react-router-dom";

interface IndividualCategoryProps {
  name: string;
  cover: any;
  id: string;
}
const IndividualCategory = (props: IndividualCategoryProps) => {
  const { name, cover, id } = props;
  const link = name.split(" ").join("_"); // To format any category with a space between the name i.e Men's clothing => Men's_clothing
  const title = name.toUpperCase();
  return (
    <div className="flex flex-col gap-4 items-center text-black-100">
      <IonImg
        src={cover}
        alt={name}
        className="h-[240px] md:h-[320px] w-full object-cover "
      ></IonImg>
      <IonText>
        <h2>{title}</h2>
      </IonText>
      <Link
        to={`category/${link}`}
        className="py-2 px-4 border-2 border-solid border-black-50"
      >
        SHOP NOW
      </Link>
    </div>
  );
};

export default IndividualCategory;
