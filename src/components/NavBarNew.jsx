import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "../assets/images/logovector.jpg";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useNavigate } from "react-router-dom";

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

const NavBarNew = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  const [open, setOpen] = useState(false);

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
    <div className="z-10 w-full">
      
      <div className="shadow-md w-full sticky top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center justify-between w-full
        text-gray-800"
          >
            <div
              onClick={handleHomeIconClick}
              className="max-h-12 flex flex-row items-center"
            >
              <img
                src={logo}
                alt="App-Logo"
                className="object-contain max-w-14"
              />
              <h1 className="text-2xl md:text-4xl font-medium hover:cursor-pointer">
                BrickNest
              </h1>
            </div>
            <div className="hidden lg:flex">
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
                            onClick={() =>
                              handleMenuClick(item.name, subItem.name)
                            }
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

            <div className="flex items-center gap-4">
              <button className="hidden md:block bg-secondary text-sm text-white px-4 py-2 hover:opacity-90">
                CONTACT
              </button>
              <div
                onClick={() => setOpen(!open)}
                className="text-3xl cursor-pointer flex items-center"
              >
                <GiHamburgerMenu className="text-secondary lg:hidden" />
              </div>
            </div>
          </div>
        </div>

        <ul
          className={`md:flex md:items-center md:p-0 pb-12 pr-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7"></li>
          ))}

          {menuItemsData.map((mainItem) => (
            <Accordion
              key={mainItem.id}
              type="single"
              collapsible
              className="md:hidden"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline uppercase">
                  {mainItem.name}
                </AccordionTrigger>
                {mainItem.items.map((subItem) => (
                  <AccordionContent
                    key={subItem.id}
                    className="hover:underline capitalize"
                  >
                    {subItem.name}
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>
          ))}
        </ul>
      </div>
      <div className="md:hidden w-full">
        <button className="w-full bg-secondary text-white p-2 shadow-md hover:opacity-90">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default NavBarNew;
