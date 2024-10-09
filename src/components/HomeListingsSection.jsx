import HomeListing from "./HomeListing";
import { MdOutlineExplore } from "react-icons/md";

const images = [
  "https://casasmallorca.com/wp-content/uploads/2023/12/CM-S01.818-Casas-Mallorca-Tramuntana-Fornalutx-Townhouse-Garden-Swimming-Pool-Area-With-Guesthouse-1536x1024.webp",
  "https://casasmallorca.com/wp-content/uploads/2023/12/CM-S01.818-Casas-Mallorca-Tramuntana-Fornalutx-Townhouse-Main-Entrance-1536x1024.webp",
  "https://casasmallorca.com/wp-content/uploads/2023/12/CM-S01.818-Casas-Mallorca-Tramuntana-Fornalutx-Townhouse-Bathroom-1-1536x1024.webp",
  "https://casasmallorca.com/wp-content/uploads/2023/12/CM-S01.818-Casas-Mallorca-Tramuntana-Fornalutx-Townhouse-2nd-Master-Bedroom-1536x1024.webp",
  "https://casasmallorca.com/wp-content/uploads/2023/12/CM-S01.818-Casas-Mallorca-Tramuntana-Fornalutx-Townhouse-1st-Master-Bedroom-1536x1024.webp",
  "https://casasmallorca.com/wp-content/uploads/2023/12/CM-S01.818-Casas-Mallorca-Tramuntana-Fornalutx-Townhouse-Bathroom-1-1536x1024.webp",
  "https://casasmallorca.com/wp-content/uploads/2023/12/CM-S01.818-Casas-Mallorca-Tramuntana-Fornalutx-Townhouse-Dining-Room-1-1536x1024.webp",
];

const HomeListingsSection = ({ heading, subHeading, explore }) => {
  return (
    <div className="max-w-6xl mx-auto mt-8 p-4 xl:p-0">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl text-accent uppercase">{heading}</h3>
          <h1 className="text-4xl">{subHeading}</h1>
        </div>
        {explore && (
          <div className="hover:cursor-pointer hover:text-accent flex items-center gap-2">
            <MdOutlineExplore className="text-2xl" />
            <p className="uppercase text-sm">Explore All</p>
          </div>
        )}
      </div>

      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <HomeListing images={images} />
      <HomeListing images={images} />
      <HomeListing images={images} />
      </div>
    </div>
  );
};

export default HomeListingsSection;
