import React, { useState, useEffect } from 'react';
import { 
  FaMapMarkerAlt, 
  FaSearch, 
  FaHeart, 
  FaUser, 
  FaShoppingCart, 
  FaMobile,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { PiBooksFill } from "react-icons/pi";
import { BsTv } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { GrUserSettings } from "react-icons/gr";
import { HiBuildingStorefront } from "react-icons/hi2";
import { Button, Collapse, Drawer } from '@mui/material';
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../Componant/Modal/Index';
import CartModal from '../Componant/Modal2/Index';
import Wishlist from '../Componant/Wishlist';
import WishModal from '../Componant/WishModal/Index';


const Crazzyhub = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchAction, setSearchAction] = useState(false);
  const navigate = useNavigate();
  const [open,setOpen]=React.useState(false)
  const [cartOpen, setCartOpen] = React. useState(false);
  const[wishOpen,SetWishOpen]=React.useState(false)
  

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  

  const categories = [
    {
      id: 'books',
      name: 'Books & More',
      icon: PiBooksFill,
      subcategories: ['Fiction', 'Non-fiction', 'Children Books', 'Comics & Manga', 'Educational']
    },
    {
      id: 'mobiles',
      name: 'Mobiles & Tablets',
      icon: FaMobile,
      subcategories: ['Smartphones', 'Tablets', 'Feature Phones', 'iPads', 'Android Tablets']
    },
    {
      id: 'tv',
      name: 'TV & Electronics',
      icon: BsTv,
      subcategories: ['Smart TVs', 'LED TVs', 'Home Theater', 'Speakers', 'Media Players']
    },
    {
      id: 'computers',
      name: 'Computer Peripherals',
      icon: FaComputer,
      subcategories: ['Laptops', 'Desktops', 'Monitors', 'Keyboards', 'Mouse', 'Printers']
    },
    {
      id: 'tech',
      name: 'Smart Technology',
      icon: GrTechnology,
      subcategories: ['Smart Home', 'Wearables', 'Fitness Trackers', 'VR Headsets', 'Smart Speakers']
    },
    {
      id: 'accessories',
      name: 'Mobile Accessories',
      icon: GrUserSettings,
      subcategories: ['Cases & Covers', 'Screen Guards', 'Chargers', 'Power Banks', 'Headphones']
    }
  ];

  const menuItems = [
    { label: "Wishlist", icon: FaHeart, count: 0, color: "text-red-500"  },
    { label: "Cart", icon: FaShoppingCart, count: "₹0", color: "text-emerald-400" },
    { label: "My Account", icon: FaUser, count: "Sign In", color: "text-yellow-500" }
  ];
  


  const handleItemClick = (index) => {
     console.log(index,"hii im index")
    if (index === 0) {
      navigate("/signup") 
    }
  };

  const handleItemClick2 = (index) => {
    console.log(index,"hii im index")
   if (index === 0) {
     navigate("/signup") 
   }
 };
 
 
  return (
    <div className={`max-w-[1600px] m-auto sticky top-0 z-50 bg-white text-black transition-all duration-300 ${scrolled ? 'shadow-xl' : 'shadow-sm'}`}>
      <div className="max-w-[1600px] m-auto flex items-center justify-between px-4 md:px-12 py-4 bg-gradient-to-r from-purple-900 to-indigo-700 rounded-b-xl shadow-lg">
        <div className="flex items-center gap-4">
          <div className="absolute top-[-10px] left-12 md:left-1/2 transform -translate-x-1/2 z-20">
            <img
              src={Logo}
              alt="Zynero Logo"
              className="h-16 md:h-28 drop-shadow-2xl rounded-full border-2 border-purple-500 animate-bounce"
            />
          </div>

          <div className="hidden md:flex flex-col ml-4 text-white">
            <span className="text-xs tracking-wide">Deliver to</span>
            <span className="flex items-center gap-1 font-semibold text-cyan-300">
              Location <FaMapMarkerAlt className="text-pink-400 animate-ping" />
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative flex lg:w-auto">
            <Collapse in={searchAction} timeout={{ enter: 700, exit: 500 }} unmountOnExit>
              <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-30 w-[90%] md:w-[60%] lg:w-[40%] bg-white p-4 rounded-xl shadow-xl transition-all duration-500 ease-in-out">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search amazing products..."
                    className="w-full px-6 py-3 rounded-full border border-purple-600 text-black placeholder-gray-400 focus:ring-4 focus:ring-purple-300 outline-none shadow-md transition-all duration-300"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-16 top-1/2 transform -translate-y-1/2 text-purple-600 hover:text-gray-400 transition-colors duration-200"
                    >
                      <FaTimes className='' size={18} />
                    </button>
                  )}
                  <button className="absolute   right-5 top-1/2 transform -translate-y-1/2 text-purple-700 hover:text-purple-400 transition-colors duration-200">
                    <FaSearch className='' size={18} />
                  </button>
                </div>
              </div>
            </Collapse>

            <button 
              onClick={() => setSearchAction(!searchAction)}
              className="text-gray-300 mx-2 lg:mr-10 mr-2"
            >
              <FaSearch size={18} />
            </button>
          </div>

          <div className="flex md:hidden items-center space-x-4 text-white mr-2">
            <button className="text-red-500 relative">
              <FaHeart onClick={()=>navigate("/Wishlist")}  size={18} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
            <button className="text-emerald-400 relative">
              <FaShoppingCart onClick={()=>navigate("/Cart")}  size={18} />
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
            <button className="text-yellow-500">
              <FaUser onClick={()=>navigate("/Signup")} size={18} />
            </button>
          </div>

          <div className="hidden md:flex gap-x-10 text-white font-semibold">
            {menuItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center hover:text-gray-200 cursor-pointer"  onClick={() =>item?.label==="My Account"?setOpen(true):item?.label==="Cart"?setCartOpen(true):SetWishOpen(true)}>
                <span className="text-xs uppercase tracking-wide">{item?.label}</span>   
                <span className={`flex items-center gap-1 text-base ${item.color}`}>
                  {item.count} <item.icon/>
                </span>
              </div>
            ))}
          </div>

          <Button 
            onClick={() => setDrawerOpen(true)} 
            className="md:hidden text-2xl text-white ml-2"
          >
            <FaBars className='md:hidden block text-red-500 lg:text-lg text-xl' />
          </Button>
        </div>
      </div>

      <div className="max-w-[1600px] m-auto hidden lg:flex justify-center gap-10 bg-white py-3 text-sm font-medium shadow-inner border-t">
        {categories.map((category) => (
          <div
            key={category?.id}
            className="relative group"
            onMouseEnter={() => setActiveDropdown(category?.id)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-2 cursor-pointer text-purple-700 hover:text-purple-500">
              <category.icon className='' />
              {category?.name}
            </div>
            {activeDropdown === category?.id && (
              <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl z-40 p-4 border-t-4 border-purple-600">
                <div className="font-bold text-purple-700 mb-3 text-lg">{category?.name}</div>
                <ul className="space-y-3">
                  {category.subcategories.map((subcat, idx) => (
                    <li key={idx} className="hover:text-purple-600 cursor-pointer flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      {subcat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

 
<div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 ">
  <div className="flex justify-around items-center py-2 px-3 ">
    <div className="flex flex-col items-center text-purple-700 ">
      <HiBuildingStorefront className="text-2xl " />
      <span className="text-[11px] font-semibold mt-1">Home</span>
    </div>
    <div className="flex flex-col items-center text-gray-600">
      <BsTv className="text-2xl" />
      <span className="text-[11px] font-semibold mt-1">Categories</span>
    </div>
    <div className="flex flex-col items-center text-emerald-500">
      <FaShoppingCart className="text-2xl" />
      <span className="text-[11px] font-semibold mt-1">Cart</span>
    </div>
    <div className="flex flex-col items-center text-red-500">
      <FaHeart className="text-2xl" />
      <span className="text-[11px] font-semibold mt-1">Wishlist</span>
    </div>
    


    <div className="flex flex-col items-center text-yellow-500">
      <FaUser  className="text-2xl" />
      <span className="text-[11px] font-semibold mt-1">Account</span>
    </div>
  </div>
</div>


      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className="p-4 w-72 h-full bg-gradient-to-b from-purple-200 to-white">
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <p className="flex items-center gap-2 font-bold text-xl text-purple-800">
              <HiBuildingStorefront className="text-2xl" /> Zynero Store
            </p>
            <Button onClick={() => setDrawerOpen(false)}>
              <FaTimes className="text-purple-800" />
            </Button>
          </div>

          <div className="space-y-4">
            {menuItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-md hover:bg-purple-50">
                <item.icon className={`text-xl ${item.color}`} />
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className={`text-sm ${item.color}`}>{item.count}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <p className="font-semibold text-purple-800 mb-2">Categories</p>
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 border border-purple-300 rounded-xl hover:bg-purple-100 cursor-pointer"
              >
                <category.icon className="text-xl text-purple-700" />
                <p className="font-medium">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
      <LoginModal setOpen={setOpen} open={open} />

      <CartModal setOpen={setCartOpen} open={cartOpen}/>
      <WishModal setOpen={SetWishOpen} open={wishOpen}/>
    </div>
  );
};

export default Crazzyhub;