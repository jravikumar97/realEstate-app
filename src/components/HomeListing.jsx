import home1 from "../assets/images/home1.jpg"; // Example image, you may remove it if not needed
import { MdLocationPin } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { IoLogoUsd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import PropertyCarousel from "./PropertyCarousel"; // Adjust the path as needed

const HomeListing = ({ images }) => {
  const navigate = useNavigate();
  const handleViewMoreClick = () => {
    navigate('/viewProperty');
  };

  return (
    <div className="border-[1px] border-[#D3D3D3] rounded-md hover:shadow-lg">
      <PropertyCarousel images={images} /> {/* Replace the img tag with PropertyCarousel */}
      <div className="p-4">
        <h2 className="text-2xl">A Pearl Village in Palms</h2>
        <br />
        <p className="text-sm">
          Fresh, airy architecture with natural materials and Feng Shui
          influence, spacious interiors, stunning views, sustainable features
          and quick access to town.
        </p>
        <br />
        <div className="flex items-center gap-1">
          <MdLocationPin className="text-accent" />
          <p>Palm Beach</p>
        </div>
        <div className="flex items-center gap-4 ml-1">
          <div className="flex items-center gap-1">
            <LuBath />
            <p>2</p>
          </div>
          <div className="flex items-center gap-1">
            <IoBedOutline />
            <p>4</p>
          </div>
          <div className="flex items-center gap-1">
            <TbRulerMeasure />
            <p>372 m²</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-end">
          <div className="flex gap-1 items-center mt-4">
            <IoLogoUsd className="text-2xl" />
            <p className="text-2xl font-semibold">2,450,000</p>
          </div>
          <button
            className="bg-secondary text-white py-2 px-4 hover:opacity-90"
            onClick={handleViewMoreClick}
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeListing;
