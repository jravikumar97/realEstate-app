import sellHome from "../assets/images/houseForSale.jpg";
import BuySellHouseInfoCard from "../components/BuySellHouseInfoCard";

const sellingStepsData = [
  {
    id: 1,
    title: "Step 1 - Lorem Ipsum",
    items: [
      { id: 1, text: "Lorem ipsum dolor sit amet" },
      { id: 2, text: "Consectetur adipiscing elit" },
      { id: 3, text: "Sed do eiusmod tempor incididunt" },
      { id: 4, text: "Ut labore et dolore magna aliqua" },
      { id: 5, text: "Quis ipsum suspendisse ultrices" },
      { id: 6, text: "Risus commodo viverra maecenas" },
    ],
  },
  {
    id: 2,
    title: "Step 2 - Lorem Ipsum",
    items: [
      { id: 1, text: "Mauris pellentesque pulvinar" },
      { id: 2, text: "Aliquam id diam maecenas ultricies" },
      { id: 3, text: "Lorem mollis aliquam ut porttitor" },
      { id: 4, text: "Est velit egestas dui id ornare" },
      { id: 5, text: "Non consectetur a erat nam" },
      { id: 6, text: "Vulputate odio ut enim blandit" },
    ],
  },
  {
    id: 3,
    title: "Step 3 - Lorem Ipsum",
    items: [
      { id: 1, text: "Commodo ullamcorper a lacus" },
      { id: 2, text: "Phasellus vestibulum lorem sed" },
      { id: 3, text: "Cursus sit amet dictum sit amet" },
      { id: 4, text: "Vivamus at augue eget arcu dictum" },
      { id: 5, text: "Pellentesque adipiscing commodo elit" },
      { id: 6, text: "Tincidunt eget nullam non nisi est" },
    ],
  },
  {
    id: 4,
    title: "Step 4 - Lorem Ipsum",
    items: [
      { id: 1, text: "Ut enim ad minim veniam" },
      { id: 2, text: "Excepteur sint occaecat cupidatat" },
      { id: 3, text: "Duis aute irure dolor in reprehenderit" },
      { id: 4, text: "Voluptate velit esse cillum dolore" },
      { id: 5, text: "Exercitation ullamco laboris nisi ut" },
      { id: 6, text: "Nulla pariatur excepteur sint occaecat" },
    ],
  },
  {
    id: 5,
    title: "Step 5 - Lorem Ipsum",
    items: [
      { id: 1, text: "Felis eget nunc lobortis mattis" },
      { id: 2, text: "Est velit egestas dui id ornare" },
      { id: 3, text: "In hac habitasse platea dictumst" },
      { id: 4, text: "Purus gravida quis blandit turpis" },
      { id: 5, text: "Velit scelerisque in dictum non" },
      { id: 6, text: "Scelerisque felis imperdiet proin" },
    ],
  },
  {
    id: 6,
    title: "Step 6 - Lorem Ipsum",
    items: [
      { id: 1, text: "Facilisi etiam dignissim diam" },
      { id: 2, text: "Tristique senectus et netus et" },
      { id: 3, text: "Malesuada fames ac turpis egestas" },
      { id: 4, text: "Fermentum odio eu feugiat pretium" },
      { id: 5, text: "Platea dictumst quisque sagittis" },
      { id: 6, text: "Vulputate enim nulla aliquet porttitor" },
    ],
  },
];

const SellMyHome = () => {
  return (
    <main className="w-full">
      <section className="max-w-6xl mx-auto p-4 flex flex-col justify-start items-center md:flex-row gap-4">
        <header className="flex flex-col gap-2 md:w-1/2">
          <h3 className="text-xl text-accent uppercase">List Your Property</h3>
          <h1 className="text-4xl">Thinking of Selling Your House?</h1>
          <p className="text-[#9199a7]">
            Welcome to our professional sales processing services, designed to streamline the selling process for your property. From market-oriented pricing to personalized buyer qualification, we handle every aspect of your sale with expertise and efficiency. Our comprehensive approach ensures your property stands out, leading to faster sales and optimized proceeds. Trust us to guide you through the process seamlessly, from initial listing to successful closing.
          </p>
        </header>
        <figure className="flex justify-center items-center md:w-1/2">
          <img
            src={sellHome}
            loading="lazy"
            width="600"  // Set a default width
            height="400" // Set a default height
            className="object-cover"
            alt="Listing Property"
            aria-label="Listing Property"
          />
        </figure>
      </section>

      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-center p-4">
          Sell with Ease: Let Us Guide You Through Each Stage of the Selling 
          <br />
          Process
        </h1>
      </section>

      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-2">
          {sellingStepsData.map((step) => (
            <article key={step.id} className="border-[1px] border-[#D3D3D3] rounded-lg p-4 flex flex-col gap-2 m-4">
              <h3 className="text-xl text-accent uppercase">{step.title}</h3>
              <ul className="list-disc ml-5 text-[#9199a7]">
                {step.items.map((item) => (
                  <li key={item.id} className="text-sm">{item.text}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-4">
        <h1 className="text-4xl text-center p-4">
          Exclusive Marketing - Reach Your Goal Faster
        </h1>
        <p className="text-[#9199a7]">
          Place your trust in us in the form of an exclusive marketing contract and benefit from the full range of our sales promotion activities. For a faster sale and optimized proceeds, this is how we make your property stand out from the mass of offers. An exclusive mandate is worthwhile for you as a seller, as experience has shown that this enables faster, more efficient marketing and, above all, a better price for your property.
        </p>
      </section>

      <BuySellHouseInfoCard />
    </main>
  );
};

export default SellMyHome;
