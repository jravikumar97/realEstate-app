import homeBg from "../assets/images/homeMainImage.jpg";
import PropTypes from 'prop-types';

const TitleImageCard = ({ heading, body }) => {
  return (
    <section id="title-image-card" className="relative w-full">
      <img
        src={homeBg}
        alt="Main Image representing the property"
        loading="lazy" // Enable lazy loading
        className="object-cover w-full h-auto"
        width="1200" // Default width to prevent CLS
        height="600" // Default height to prevent CLS
      />

      <div className="hidden md:block absolute top-0 left-0 w-full h-full">
        <div className="max-w-6xl mx-auto h-full flex items-center">
          <div className="bg-primary bg-opacity-60 p-8 w-3/4 mx-4 xl:mx-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-white" aria-level="1">
              {heading}
            </h1>
            <p className="text-white mt-2" aria-label="Description">
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

TitleImageCard.propTypes = {
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default TitleImageCard;
