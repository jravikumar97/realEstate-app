import location1 from "../assets/images/location1.jpg";
import location2 from "../assets/images/location2.jpg";
import location3 from "../assets/images/location3.jpg";
import location5 from "../assets/images/location5.jpg";

const imagesData = [
  {
    id: 1,
    name: "Location 1",
    imageUrl: location1,
  },
  {
    id: 2,
    name: "Location 2",
    imageUrl: location2,
  },
  {
    id: 3,
    name: "Location 3",
    imageUrl: location3,
  },
  {
    id: 4,
    name: "Location 4",
    imageUrl: location5,
  },
  {
    id: 5,
    name: "Location 5",
    imageUrl: location1,
  },
  {
    id: 6,
    name: "Location 6",
    imageUrl: location2,
  },
  {
    id: 7,
    name: "Location 7",
    imageUrl: location3,
  },
  {
    id: 8,
    name: "Location 8",
    imageUrl: location5,
  },
  {
    id: 9,
    name: "Location 9",
    imageUrl: location1,
  },
  {
    id: 10,
    name: "Location 10",
    imageUrl: location3,
  },
  {
    id: 11,
    name: "Location 11",
    imageUrl: location5,
  },
  {
    id: 12,
    name: "Location 12",
    imageUrl: location2,
  },
];

const Locations = () => {
  return (
    <section className="w-full bg-background lg:mt-20 py-14">
      <div className="max-w-6xl mx-auto flex flex-col p-4 lg:p-0">
        <h3 className="text-lg text-accent uppercase">Locations</h3>
        <h1 className="text-4xl">Discover Your Dream Place in BrickNest</h1>

        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {imagesData.map((image) => (
            <article
              className="relative w-full h-full group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              key={image.id}
            >
              <img
                src={image.imageUrl}
                alt={image.name}
                className="object-cover w-full min-h-60 max-h-80 h-full"
                loading="lazy"
                width="400" // Set a width for the image to help with CLS
                height="300" // Set a height for the image to help with CLS
              />
              <h2 className="absolute text-2xl text-white bottom-5 left-5">{image.name}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
