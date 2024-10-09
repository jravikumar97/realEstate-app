import React, { useState } from "react";

const MenuDropdown = ({ name }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMenuHoverEnter = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="relative inline-block">
      <span
        className="uppercase whitespace-nowrap cursor-pointer hover:text-primary text-sm md:text-base"
        onClick={handleMenuHoverEnter}
      >
        {name}
      </span>
      <div
        className={`${
          !isHovered ? "hidden" : ""
        } absolute bg-white min-w-[160px] shadow-md`}
      >
        <p className="text-xs font-semibold w-full mt-4 hover:bg-secondary  hover:text-background p-2">
          I'D LIKE TO SELL
        </p>
        <p className="text-xs font-semibold mt-4 hover:bg-secondary  hover:text-background p-2">
          I'D LIKE TO RENT
        </p>
      </div>
    </div>
  );
};

export default MenuDropdown;
