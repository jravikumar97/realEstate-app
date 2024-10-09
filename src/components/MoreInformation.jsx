import React from "react";

const MoreInformation = () => {
  return (
    <div className="w-full p-4 mt-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row border-[1px] justify-between items-center border-[#D3D3D3] p-8">
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl text-center md:text-left'>Haven't found what you're looking for?</h1>
          <p className='text-[#9199a7] text-center md:text-left'>Send us a inquiry and we’ll get back to you with the best properties matching your preferences.</p>
        </div>
        <button className='bg-accent text-white uppercase p-4 hover:opacity-90 mt-6 md:mt-0'>Let us find your home</button>
      </div>
    </div>
  );
};

export default MoreInformation;
