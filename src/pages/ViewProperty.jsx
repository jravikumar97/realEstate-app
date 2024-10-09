import { IoLogoUsd } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineOutdoorGrill, MdOutlineBedroomParent } from "react-icons/md";
import { LiaToiletSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa";
import PropertyCarousel from "@/components/PropertyCarousel";

const images = [
  "https://casasmallorca.com/wp-content/uploads/2023/12/CM-S01.818-Casas-Mallorca-Tramuntana-Fornalutx-Townhouse-Garden-Swimming-Pool-Area-With-Guesthouse-1536x1024.webp",
  "https://casasmallorca.com/wp-content/uploads/2023/12/CM-S01.818-Casas-Mallorca-Tramuntana-Fornalutx-Townhouse-Main-Entrance-1536x1024.webp",
  "https://casasmallorca.com/wp-content/uploads/2023/12/CM-S01.818-Casas-Mallorca-Tramuntana-Fornalutx-Townhouse-Bathroom-1-1536x1024.webp",
  "https://casasmallorca.com/wp-content/uploads/2023/12/CM-S01.818-Casas-Mallorca-Tramuntana-Fornalutx-Townhouse-2nd-Master-Bedroom-1536x1024.webp",
  "https://casasmallorca.com/wp-content/uploads/2023/12/CM-S01.818-Casas-Mallorca-Tramuntana-Fornalutx-Townhouse-1st-Master-Bedroom-1536x1024.webp",
  "https://casasmallorca.com/wp-content/uploads/2023/12/CM-S01.818-Casas-Mallorca-Tramuntana-Fornalutx-Townhouse-Bathroom-1-1536x1024.webp",
  "https://casasmallorca.com/wp-content/uploads/2023/12/CM-S01.818-Casas-Mallorca-Tramuntana-Fornalutx-Townhouse-Dining-Room-1-1536x1024.webp",
];

const ViewProperty = () => {

  return (
    <main className="w-full">
      <div className="w-full md:hidden bg-accent flex justify-center items-center p-2 hover:bg-opacity-90">
        <p className="text-white">I'm Interested</p>
      </div>

      <section className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl">A Pearl in the Village of Bastiville</h1>
        <div className="flex items-center" aria-label="Location">
          <MdLocationPin aria-hidden="true" />
          <h3>Fornalutx</h3>
        </div>
        <div className="flex gap-1 items-center mt-4" aria-label="Price">
          <IoLogoUsd className="text-2xl" aria-hidden="true" />
          <p className="text-2xl font-semibold">2,450,000</p>
        </div>

        <div className="gap-2 flex flex-col md:flex-row">
          <article className="flex flex-col gap-2 md:w-2/3 my-4">
            <PropertyCarousel images={images} />

            <div className="bg-background grid grid-cols-2 md:grid-cols-4 p-4">
              <div className="flex flex-col" aria-label="Property Details">
                <div className="flex items-center">
                  <IoHomeOutline aria-hidden="true" />
                  <p>372 m²</p>
                </div>
                <p>Constructed Area</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <MdOutlineOutdoorGrill aria-hidden="true" />
                  <p>1403 m²</p>
                </div>
                <p>Outside Area</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <MdOutlineBedroomParent aria-hidden="true" />
                  <p>4</p>
                </div>
                <p>Bedrooms</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <LiaToiletSolid aria-hidden="true" />
                  <p>4</p>
                </div>
                <p>Bathrooms</p>
              </div>
            </div>

            <p className="text-sm">
              This traditional village house in Fornalutx consists of 3 floors
              with a total of 3 bedrooms, 2 bathrooms, 1 kitchen, and 4
              different rooms that can be used as a dining or living room, and
              an office on the roof with its own terrace and fantastic views
              over Fornalutx and the surrounding mountains. A small terrace
              opens from the kitchen to the garden with a separate casita,
              which is used as a laundry and storage room and which also has a
              toilet and a shower. Behind this, on various terraced levels,
              are gardens, seating areas, a koi pond, a large pool and a guest
              house with terrace, living room/kitchen, bathroom and 1 bedroom.
              Further towards the mountain, more terraced levels open up with
              olive trees and space for a fruit and vegetable garden. The main
              house could easily be converted into a spacious living area, or
              the kitchen could be converted into a large living and dining
              area. The house is ready to move into but could be renovated or
              extended internally. A central oil heating system warms the main
              and guest house in the cooler months. This historic village
              house, 5 minutes walk from the centre of Fornalutx, has an
              exceptionally large plot and yet enjoys a lot of privacy and the
              feeling of being in a finca in the countryside. Definitely a gem
              in the middle of the mountains in the Soller valley.
            </p>

            <div aria-label="Property Features">
              {["Fireplace", "Heating", "Pool"].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <FaCheck aria-hidden="true" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="bg-background border-[1px] border-[#FFFFFF] p-4 w-full md:w-1/3 my-4">
            <h2 className="text-2xl">Contact Us</h2>
            <form>
              {["firstName", "lastName", "email", "phone"].map((field) => (
                <div key={field} className="flex flex-col mb-4">
                  <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  <input
                    type={field === "phone" ? "tel" : "text"}
                    className="border-[1px] outline-[#FFFFFF]"
                    id={field}
                    required
                  />
                </div>
              ))}
              <div className="flex flex-col mb-4">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="border-[1px] outline-[#FFFFFF]"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-secondary w-full py-4 font-bold mt-4 text-white hover:ring-opacity-90">
                Send
              </button>
            </form>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ViewProperty;
