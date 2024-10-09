const PropertyOfTheMonth = ({ miniHeading, heading, body, image }) => {
  return (
    <div
      id="property-of-the-month"
      className="w-full bg-background lg:mt-20 px-4 py-12"
    >
      <div className="max-w-6xl mx-auto relative">
        <img
          src={image}
          alt="property-of-the-month"
          aria-label="propert of the month"
        />
        <div className="hidden md:block absolute top-0 left-0 w-ful h-full">
          <div className="w-full h-full flex justify-start items-center p-20">
            <div className="w-auto lg:w-3/4 bg-accent bg-opacity-70 p-10">
              <h3 className="text-xl font-bold text-secondary uppercase">
                {miniHeading}
              </h3>
              <h1 className="text-6xl text-white font-bold">{heading}</h1>
              <br />
              <p className="text-white font-sm">{body}</p>
              <button className="bg-secondary text-white font-bold uppercase p-4 mt-4 hover:opacity-90">view more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full p-6 bg-accent py-8 flex flex-col">
        <h3 className="text-md font-bold text-secondary uppercase">
          {miniHeading}
        </h3>
        <h1 className="text-4xl text-white font-bold mt-1">{heading}</h1>
        <br />
        <p className="text-white font-sm">{body}</p>
        <button className="bg-secondary text-white font-bold uppercase p-4 mt-4 hover:opacity-90">view more</button>
      </div>
    </div>
  );
};

export default PropertyOfTheMonth;
