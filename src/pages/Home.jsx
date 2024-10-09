import TitleImageCard from "../components/TitleImageCard";
import TitleCard from "../components/TitleCard";
import Filter from "../components/Filter";
import HomeListingsSection from "../components/HomeListingsSection";
import PropertyOfTheMonth from "../components/PropertyOfTheMonth";
import Locations from "../components/Locations";
import Team from "../components/Team";
import MoreInformation from "../components/MoreInformation"

import propertyOfTheMonthImg from "../assets/images/propertyOfTheMonth.jpg";
import listingHomeImg from "../assets/images/sellHouse.jpg";

const headerTextContent = {
  miniHeading: "Property of the month",
  heading: "Discover unparalleled beauty in BrickNest",
  body: "At Casas BrickNest, we want to redefine luxury real estate, offering an exclusive blend of elegance and authenticity that is truly unique. Our mission is simple: to help you find your dream property on this picturesque island we call home.",
};

const listPropertyContent = {
  miniHeading: "List your property",
  heading: "Thinking of selling your house?",
  body: "Let us be your trusted guide through every step. From personalized attention to tailor-made marketing, we’re here to make your selling experience smooth and stress-free.",
};

const Home = () => {

  return (
    <main id="main-home" className="w-full">
      <TitleImageCard
        heading={headerTextContent.heading}
        body={headerTextContent.body}
      />
      <TitleCard
        heading={headerTextContent.heading}
        body={headerTextContent.body}
      />
      <Filter />
      <HomeListingsSection
        heading={"Exclusive"}
        subHeading={"Unique Selections for you"}
        explore={false}
      />
      <PropertyOfTheMonth
        miniHeading={headerTextContent.miniHeading}
        heading={headerTextContent.heading}
        body={headerTextContent.body}
        image={propertyOfTheMonthImg}
      />
      <HomeListingsSection
        heading={"buy"}
        subHeading={"Newest handpicked properties"}
        explore={true}
      />
      <Locations />
      <Team />
      <PropertyOfTheMonth
        miniHeading={listPropertyContent.miniHeading}
        heading={listPropertyContent.heading}
        body={listPropertyContent.body}
        image={listingHomeImg}
      />
      <MoreInformation/>

    </main>
  );
};

export default Home;
