import React, { useState, useEffect } from 'react';
import Style from './style.module.css';
import { BsGlobe, BsCashCoin } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Disable body scroll when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);

  return (
    <>
      {/* Navbar */}
      <div
        className="w-screen fixed z-[1000] shadow-lg px-2 flex justify-between items-center flex-nowrap"
        style={{
          backgroundColor: "#141524",
          height: "80px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6)"
        }}
      >

        <div className="flex items-center gap-2">
          <a href="#" className="block">
            <img src="/logo.png" alt="Logo" className={Style.logo} />
          </a>
          <div className={Style.navmenu}>
            <div className="flex gap-1">
              <FaHandHoldingUsd style={{ color: "#a9a9ca", fontSize: "20px" }} />
              <span style={{ color: "#a9a9ca" }}>Earn</span>
            </div>
            <div className="flex gap-1 mt-1">
              <BsCashCoin style={{ color: "#a9a9ca", fontSize: "20px", marginTop: "5px" }} />
              <span style={{ color: "#a9a9ca" }}>Cashout</span>
            </div>
          </div>
        </div>


        <div className="flex items-center gap-2">
          <button className={`btn ${Style.navmenu}`}>
            <BsGlobe style={{ fontSize: "20px", color: "#a9a9ca" }} />
          </button>
          <div className={Style.info}>
            <button className={Style.custombtn} onClick={() => setIsPopupOpen(true)}>Login</button>
            <button className={Style.custombtn} onClick={() => setIsPopupOpen(true)}>Sign Up</button>
          </div>


          <button
            className={`btn ${Style.togglerBtn}`}
            onClick={() => setIsMenuOpen(true)}
          >
            <CiMenuFries style={{ fontSize: "22px" }} />
          </button>
        </div>
      </div>


      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-[1100] shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >

        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-300">
          <h5 className="text-lg font-semibold text-gray-800">Menu</h5>
          <button onClick={() => setIsMenuOpen(false)}>
            <IoClose className="text-2xl text-gray-600" />
          </button>
        </div>


        <div className="p-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Contact</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Help</a>
        </div>
      </div>


      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-[1000] transition-opacity duration-300 ease-in-out"
        />
      )}


      {isPopupOpen && (
        <>

          <div
            className="fixed inset-0 z-[1200]"
            onClick={() => setIsPopupOpen(false)}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              pointerEvents: 'auto'
            }}

          />


          <div className="fixed top-1/2 left-1/2 z-[1300]  rounded-lg p-6 shadow-xl transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md" >

          {/*  */}
            <div className="relative bg-[#141524] rounded-2xl px-6 py-8" style={{ maxWidth: "435px", margin: "auto",minWidth:"19rem" }}>
              
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-white text-2xl font-bold mb-6 text-center">Sign In</h2>

              <div className="w-full space-y-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-white text-sm font-semibold mb-1 block">
                    Email
                  </label>
                  <div className="flex items-center bg-[#1f2035] px-4 py-3 rounded-md">
                    <svg className="text-gray-400 mr-2" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13 20 4.01V4H4zm0 2.6v13.4h16V6.6l-8 7.6-8-7.6z" />
                    </svg>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email address"
                      className="bg-transparent outline-none text-white w-full"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="text-white text-sm font-semibold mb-1 block">
                    Password
                  </label>
                  <div className="flex items-center bg-[#1f2035] px-4 py-3 rounded-md">
                    <svg className="text-gray-400 mr-2" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1a5 5 0 0 1 5 5v3h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5zm3 8V6a3 3 0 0 0-6 0v3h6z" />
                    </svg>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                      className="bg-transparent outline-none text-white w-full"
                    />
                  </div>
                  <div className="text-right text-[13px] mt-1">
                    <a href="#" className="text-yellow-400 hover:underline">Forget your password?</a>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2 text-xs text-white">
                  <input type="checkbox" id="terms" className="mt-1 accent-yellow-400" />
                  <label htmlFor="terms">
                    By signing up you agree to the <span className="text-yellow-400 font-semibold">Term & Condition</span> and{' '}
                    <span className="text-yellow-400 font-semibold">Privacy Policy</span>
                  </label>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full py-3 text-white font-semibold rounded-md"
                  style={{
                    background: 'linear-gradient(90deg, #ffce3a 0%, #fba207 100%)'
                  }}
                >
                  Sign In
                </button>

                {/* Divider */}
                <div className="my-4 border-t border-gray-600 relative">
                  <span className="absolute left-1/2 -top-3 bg-[#141524] px-2 text-sm text-gray-400 transform -translate-x-1/2">
                    or
                  </span>
                </div>

                {/* Google */}
                <button className="w-full py-3 rounded-md border border-gray-300 bg-white flex items-center justify-center text-black font-semibold hover:bg-gray-100">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2" />
                  Sign In with Google
                </button>

                {/* Facebook */}
                <button className="w-full py-3 rounded-md bg-[#1877f2] text-white font-semibold flex items-center justify-center hover:bg-[#166fe0]">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2V9.7c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.6h2.2l-.3 2.9h-1.9v7A10 10 0 0 0 22 12z" />
                  </svg>
                  Sign In with Facebook
                </button>
              </div>

              {/* Register */}
              <div className="text-sm text-white mt-6 text-center">
                Don’t have an account yet? <a href="#" className="text-yellow-400 font-semibold">Register now</a>
              </div>
            </div>


            {/*  */}
          </div>



        </>
      )}
    </>
  );
};

export default Navbar;
