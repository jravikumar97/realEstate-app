import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full mt-6 bg-primary">
      <div className="max-w-6xl mx-auto py-8 px-6 xl:px-0">
        <h3 className="text-white w-full text-2xl">
          Be ahead of everyone else and get the latest offers
        </h3>
        <div className="flex w-full gap-8 justify-between items-center mt-2">
          <input
            type="text"
            className="w-3/4 p-3"
            placeholder="Enter your email"
          />
          <button className="w-1/4 border-2 border-white flex justify-center p-4">
            <FaArrowRight className="text-white" />
          </button>
        </div>

        <div className="flex gap-1 items-center">
          <input type="radio" id="terms" name="terms" />
          <label htmlFor="terms" className="text-white">
            I agree to the use of my data acording to the privacy policy
          </label>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          <div className="mt-12">
            <h3 className="text-white w-full text-2xl">
              Browse properties by location
            </h3>
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-white text-sm hover:underline hover:cursor-pointer">
                Properties in Beverly Hills
              </p>
              <p className="text-white text-sm hover:underline hover:cursor-pointer">
                Properties in Palm Beach
              </p>
              <p className="text-white text-sm hover:underline hover:cursor-pointer">
                Properties in Aspen
              </p>
              <p className="text-white text-sm hover:underline hover:cursor-pointer">
                Properties in The Hamptons
              </p>
              <p className="text-white text-sm hover:underline hover:cursor-pointer">
                Properties in Napa Valley
              </p>
              <p className="text-white text-sm hover:underline hover:cursor-pointer">
                Properties in Malibu
              </p>
              <p className="text-white text-sm v">
                Properties in Fisher Island
              </p>
              <p className="text-white text-sm hover:underline hover:cursor-pointer">
                Properties in Jackson Hole
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-white w-full text-2xl">Find properties</h3>
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-white text-sm hover:underline hover:cursor-pointer">
                Houses for sale
              </p>
              <p className="text-white text-sm hover:underline hover:cursor-pointer">
                Apartments for sale
              </p>
              <p className="text-white text-sm hover:underline hover:cursor-pointer">
                House for rent
              </p>
              <p className="text-white text-sm hover:underline hover:cursor-pointer">
                Apartments for rent
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-white w-full text-2xl">Connect With Us</h3>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-2">
                <FaInstagram className="text-white" />
                <p className="text-white text-sm hover:underline hover:cursor-pointer">
                  Instagram
                </p>
              </div>

              <div className="flex items-center gap-2">
                <FaFacebookF className="text-white" />
                <p className="text-white text-sm hover:underline hover:cursor-pointer">
                  Facebook
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-white w-full text-2xl">Contact</h3>
            <div className="flex flex-col gap-4 mt-4">
              <div className='flex gap-2 items-center'>
                <FaPhone className='text-white'/>
                <p className="text-white text-sm hover:underline hover:cursor-pointer">
                  +1 123 456 7890
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <IoMdMail className='text-white'/>
                <p className="text-white text-sm hover:underline hover:cursor-pointer">
                  company@bricknest.com
                </p>
              </div>
              <p className="text-white text-sm">
                5th Avenue 82nd street Manhattan, NY 07100
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr className="text-white" />
        <div className="w-full flex justify-center items-center gap-6 m-4 ">
          <p className="text-white text-sm hover:underline hover:cursor-pointer">
            BrickNest &copy; {new Date().getFullYear()}
          </p>
          <p className="text-white text-sm hover:underline hover:cursor-pointer">
            Cookies Policy
          </p>
          <p className="text-white text-sm hover:underline hover:cursor-pointer">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
