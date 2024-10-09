import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logovector.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
  const menuItemsData = [
    {
      id: 0,
      name: "owners",
      items: [
        {
          id: 0,
          name: "i'd  like to sell",
        },
        {
          id: 1,
          name: "i'd  like to buy",
        },
      ],
    },
    {
      id: 1,
      name: "properties",
      items: [
        {
          id: 0,
          name: "sale",
        },
        {
          id: 1,
          name: "rent",
        },
      ],
    },
    {
      id: 2,
      name: "locations",
      items: [
        {
          id: 1,
          name: "Beverly Hills",
        },
        {
          id: 2,
          name: "Palm Beach",
        },
        {
          id: 3,
          name: "Aspen",
        },
        {
          id: 4,
          name: "The Hamptons",
        },
        {
          id: 5,
          name: "Napa Valley",
        },
        {
          id: 6,
          name: "Malibu",
        },
        {
          id: 7,
          name: "Fisher Island",
        },
        {
          id: 8,
          name: "Jackson Hole",
        },
      ],
    },
    {
      id: 3,
      name: "about us",
      items: [
        {
          id: 0,
          name: "your team",
        },
        {
          id: 1,
          name: "services",
        },
      ],
    },
    {
      id: 4,
      name: "news",
      items: [],
    },
  ];

  const navigate = useNavigate();

  const handleMenuClick = (item, subItem) => {
    if (subItem === "i'd  like to sell") {
      navigate("/sellmyhome");
    }
  };
  const handleHomeIconClick = () => {
    navigate("/");
  };
  return (
    <>
      <header className="w-full max-h-12 flex sticky top-0 z-10 flex-row justify-between px-2 py-6 items-center border-[2px]">
        <div className="max-h-12 flex flex-row items-center">
          <img src={logo} alt="App-Logo" className="object-contain max-w-14" />
          <h1 className="text-2xl md:text-4xl font-medium hover:cursor-pointer">
            BrickNest
          </h1>
        </div>

        <div className="hidden">
          {menuItemsData.map((item) => (
            <Menubar
              key={item.id}
              className="border-none bg-white shadow-none hover:text-primary"
            >
              <MenubarMenu className="bg-white">
                <MenubarTrigger className="bg-white uppercase text-base">
                  {item.name}
                </MenubarTrigger>
                {item.items.length !== 0 ? (
                  <MenubarContent className="border-none bg-white">
                    {item.items.map((subItem) => (
                      <MenubarItem
                        key={subItem.id}
                        className="capitalize"
                        onClick={() => handleMenuClick(item.name, subItem.name)}
                      >
                        {subItem.name}
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                ) : null}
              </MenubarMenu>
            </Menubar>
          ))}
        </div>

        <div className="flex justify-center items-center hover:cursor-pointer">
          <button className="hidden hover:opacity-90 uppercase hover:cursor-pointer bg-primary text-background px-4 py-2">
            Contact
          </button>
          <button>
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>
      </header>

      {/* <header className="w-full sticky top-0 z-10 flex flex-col">
      <section className="flex justify-between items-center bg-white shadow-md">
        <section id="logo" className="flex justify-start items-center">
          <img
            onClick={handleHomeIconClick}
            src={logo}
            alt="App Logo"
            aria-label="App Logo"
            className="max-w-12 md:max-w-20 hover:cursor-pointer"
          />
          <h1
            onClick={handleHomeIconClick}
            className="text-2xl md:text-4xl font-medium hover:cursor-pointer"
          >
            BrickNest
          </h1>
        </section>

        <section id="menu" className="hidden lg:flex gap-2 lg:gap-8">
          {menuItemsData.map((item) => (
            <Menubar
              key={item.id}
              className="border-none bg-white shadow-none hover:text-primary"
            >
              <MenubarMenu className="bg-white">
                <MenubarTrigger className="bg-white uppercase text-base">
                  {item.name}
                </MenubarTrigger>
                {item.items.length !== 0 ? (
                  <MenubarContent className="border-none bg-white">
                    {item.items.map((subItem) => (
                      <MenubarItem
                        key={subItem.id}
                        className="capitalize"
                        onClick={() => handleMenuClick(item.name, subItem.name)}
                      >
                        {subItem.name}
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                ) : null}
              </MenubarMenu>
            </Menubar>
          ))}
        </section>
        
        <section>
          <button className="hidden sm:block hover:opacity-90 uppercase bg-primary text-background px-4 py-2">
            Contact
          </button>
        </section>
      </section>
      <section className="sm:hidden w-full">
        <button className="w-full bg-secondary text-white p-2 shadow-md hover:opacity-90">
          Contact Us
        </button>
      </section>
    </header> */}
    </>
  );
};

export default Navbar;
