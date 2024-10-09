import React, { useState } from "react";

const locations = [
  { id: 1, name: "Beverly Hills" },
  { id: 2, name: "Palm Beach" },
  { id: 3, name: "Aspen" },
  { id: 4, name: "The Hamptons" },
  { id: 5, name: "Napa Valley" },
  { id: 6, name: "Malibu" },
  { id: 7, name: "Fisher Island" },
  { id: 8, name: "Jackson Hole" },
];

const amenities = [
  "Terrace/Garden",
  "Pool",
  "Parking/Garage",
  "Air Conditioner",
  "ETV/Tourist Licence",
  "Lift",
  "Heating",
  "Fireplace",
];

const BuySellHouseInfoCard = () => {
  const [propertyType, setPropertyType] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [amenitiesChecked, setAmenitiesChecked] = useState([]);
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [comments, setComments] = useState("");

  const handlePropertyTypeChange = (event) => {
    const { value } = event.target;
    setPropertyType((prev) =>
      prev.includes(value) ? prev.filter((type) => type !== value) : [...prev, value]
    );
  };

  const handleLocationChange = (event) => {
    const { value } = event.target;
    setSelectedLocations((prev) =>
      prev.includes(value) ? prev.filter((loc) => loc !== value) : [...prev, value]
    );
  };

  const handleAmenitiesChange = (event) => {
    const { value } = event.target;
    setAmenitiesChecked((prev) =>
      prev.includes(value) ? prev.filter((amenity) => amenity !== value) : [...prev, value]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ propertyType, selectedLocations, amenitiesChecked, bedrooms, bathrooms, comments });
  };

  return (
    <div className="w-full p-4">
      <div className="max-w-6xl mx-auto bg-background border-[1px] border-[#D3D3D3] p-4">
        <h2 className="text-2xl mb-2">Tell Us About Your Property</h2>
        <p className="text-xs mb-4">
          Your property is special, and we want to know all about it. Use the form below to tell us its story, and together, we’ll connect you with the ideal buyer.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <div className="flex flex-col">
            <label>Property Type</label>
            <div className="flex gap-4">
              {["House", "Apartment", "Plot"].map((type) => (
                <label key={type} className="flex gap-1">
                  <input
                    type="checkbox"
                    value={type}
                    onChange={handlePropertyTypeChange}
                    checked={propertyType.includes(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col">
            <label>Location</label>
            <div className="flex gap-4 flex-wrap">
            {locations.map((location) => (
              <label key={location.id} className="flex gap-1">
                <input
                  type="checkbox"
                  value={location.name}
                  onChange={handleLocationChange}
                  checked={selectedLocations.includes(location.name)}
                />
                {location.name}
              </label>
            ))}
            </div>
          </div>

          <div className="flex flex-col">
            <label>No. of Bedrooms</label>
            <input
              type="number"
              min="0"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="p-2 border-2 border-gray-300"
              required
            />
          </div>

          <div className="flex flex-col">
            <label>No. of Bathrooms</label>
            <input
              type="number"
              min="0"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              className="p-2 border-2 border-gray-300"
              required
            />
          </div>

          <div className="flex flex-col">
            <label>Amenities</label>
            <div className="flex gap-4 flex-wrap">
              {amenities.map((amenity) => (
                <label key={amenity} className="flex gap-1">
                  <input
                    type="checkbox"
                    value={amenity}
                    onChange={handleAmenitiesChange}
                    checked={amenitiesChecked.includes(amenity)}
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="comments">Additional Comments</label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="p-2 border-2 border-gray-300"
              rows="4"
            />
          </div>

          <button type="submit" className="bg-secondary text-white py-2 mt-4 hover:bg-opacity-80">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuySellHouseInfoCard;
