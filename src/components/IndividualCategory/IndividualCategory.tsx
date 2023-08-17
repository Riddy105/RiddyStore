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

// This component is responsible for each category box seen on the home page. It accepts name, image of the category as props. On click of each category, it essentially updates
// the url to '/category/link, where link here is constructed from the name of the category with some string methods. It transforms those categories that have
// a space in their name. i.e men's category => mens_category
// electronics still returns => electronics.
