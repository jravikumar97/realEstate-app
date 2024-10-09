import DualRangeSliderLabelPosition from "./DualRangeSliderComp";

const Filter = () => {
  const locationsList = [
    { id: 0, name: "All" },
    { id: 1, name: "Beverly Hills" },
    { id: 2, name: "Palm Beach" },
    { id: 3, name: "Aspen" },
    { id: 4, name: "The Hamptons" },
    { id: 5, name: "Napa Valley" },
    { id: 6, name: "Malibu" },
    { id: 7, name: "Fisher Island" },
    { id: 8, name: "Jackson Hole" },
  ];

  const propertyType = [
    { id: 0, type: "All" },
    { id: 1, type: "House" },
    { id: 2, type: "Apartment" },
    { id: 3, type: "TownHouse" },
    { id: 4, type: "Olivar" },
    { id: 5, type: "Plot" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // For example, you could gather form values and make an API call
    console.log("Form submitted");
  };

  return (
    <form
      className="bg-background md:mt-4 max-w-6xl mx-auto grid justify-center grid-cols-2 sm:grid-cols-4 lg:grid-cols-12 gap-4 p-8"
      aria-label="Property Filter"
      onSubmit={handleSubmit}
    >
      <fieldset className="w-full col-span-full sm:col-span-1">
        <legend className="text-xs font-bold">SELECT</legend>
        <div className="flex flex-row sm:flex-col">
          <div className="flex gap-2 items-center pr-2">
            <input
              type="radio"
              id="sell"
              name="select"
              value="sell"
              aria-labelledby="sellLabel"
            />
            <label id="sellLabel" htmlFor="sell" className="text-sm">SELL</label>
          </div>
          <div className="flex gap-2 items-center pr-2">
            <input
              type="radio"
              id="buy"
              name="select"
              value="buy"
              aria-labelledby="buyLabel"
            />
            <label id="buyLabel" htmlFor="buy" className="text-sm">BUY</label>
          </div>
        </div>
      </fieldset>
      <div className="w-full col-span-full sm:col-span-3 md:col-span-3 flex flex-col gap-2">
        <label className="text-xs font-bold" htmlFor="priceRange">PRICE</label>
        <DualRangeSliderLabelPosition />
      </div>
      <div className="w-full md:col-span-2 flex flex-col gap-2">
        <label className="text-xs font-bold" htmlFor="locations">LOCATIONS</label>
        <select id="locations" name="locations" className="w-full shadow-sm rounded p-1" aria-required="true">
          {locationsList.map((item) => (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full md:col-span-2 flex flex-col gap-2">
        <label className="text-xs font-bold" htmlFor="propertyType">PROPERTY TYPE</label>
        <select id="propertyType" name="propertyType" className="w-full shadow-sm rounded p-1">
          {propertyType.map((item) => (
            <option value={item.type} key={item.id}>
              {item.type}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label className="text-xs font-bold" htmlFor="bathrooms">BATHROOMS</label>
        <select id="bathrooms" name="bathrooms" className="w-full shadow-sm rounded p-1">
          {[1, 2, 3, 4].map((num) => (
            <option value={num} key={num}>{num}</option>
          ))}
        </select>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label className="text-xs font-bold" htmlFor="bedrooms">BEDROOMS</label>
        <select id="bedrooms" name="bedrooms" className="w-full shadow-sm rounded p-1">
          {[1, 2, 3, 4, 5].map((num) => (
            <option value={num} key={num}>{num}</option>
          ))}
        </select>
      </div>
      <div className="w-full col-span-full md:col-span-2 flex items-center">
        <button type="submit" className="bg-secondary text-white font-semibold w-full p-2 hover:opacity-90">
          FIND
        </button>
      </div>
    </form>
  );
};

export default Filter;
