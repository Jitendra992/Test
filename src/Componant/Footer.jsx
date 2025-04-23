import React from "react";
import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTimes,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-5 px-6 border border-t-gray-200 shadow-md mt-10 ">
      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10 mb-10 justify-center items-center text-base sm:text-lg font-semibold">
        <div className="flex items-center gap-2 border border-gray-300 p-2 rounded-sm">
          <FaYoutube className="text-red-600" /> <span>CrazzyHub</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-300 p-2 rounded-sm">
          <FaLinkedin className="text-blue-600" /> <span>CrazzyHub</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-300 p-2 rounded-sm">
          <FaInstagram className="text-pink-600" /> <span>CrazzyHub</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-300 p-2 rounded-sm">
          <FaFacebook className="text-blue-700" /> <span>CrazzyHub</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-300 p-2 rounded-sm">
          <FaTimes className="text-black" /> <span>CrazzyHub</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:flex-wrap  gap-x-40 justify-center items-center ">
        <div className="w-full md:w-[45%] lg:w-auto text-gray-700 mb-10">
          <div className="font-bold mb-2 text-black">Support</div>
          <p className="font-semibold">Contact Us</p>
        </div>

        <div className="w-full md:w-[45%] lg:w-auto text-gray-700">
          <div className="font-bold mb-2 text-black">Policies</div>
          <p className="font-semibold">Terms & Conditions</p>
          <p className="font-semibold">Privacy Policy</p>
          <p className="font-semibold">Return, Replacement & Refund</p>
        </div>

        <div className="w-full md:w-[45%] lg:w-auto text-gray-700">
          <div className="font-bold mb-2 text-black">Know More</div>
          <p className="font-semibold">About Us</p>
          <p className="font-semibold">Our Stores</p>
          <p className="font-semibold">Service Center</p>
        </div>

        <div className="w-full md:w-[90%] lg:w-auto text-sm text-gray-500">
          <div className="font-bold mb-2 text-black">Contact Information Head Office</div>
          <p className="font-semibold">Registered Office Address:</p>
          <p className="font-semibold">CRAZZYHUB RETAIL PVT. LTD,</p>
          <p className="font-semibold">SS-1281 Sector-H Ashiyana, LDA Colony,</p>
          <p className="font-semibold">Lucknow, 226012 Uttar Pradesh, India.</p>
          <p className="font-semibold">CIN - U52590UP2021PTC153464</p>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t pt-4 font-semibold">
        ©2023 CRAZZYHUB RETAIL PVT. LTD. All Rights Reserved | Designed by Aara Technologies Pvt. Ltd.
      </div>
    </footer>
  );
}
