import React from "react";
import illustrationDesktop from "./assets/illustration-sign-up-desktop.svg";
import illustrationTablet from "./assets/illustration-sign-up-tablet.svg";
import illustrationMobile from "./assets/illustration-sign-up-mobile.svg";
import iconList from "./assets/icon-list.svg";

const App = () => {
  return (
    <main className="mx-auto container flex flex-col justify-center items-center bg-White rounded-xl shadow-md max-w-[1000px]">
      <div className="flex flex-col md:flex-row  gap-4 p-5">
        {/* Main content */}
        <div className="flex flex-col  md:p-16 px-4 md:order-1">
          <h1 className="text-4xl lg:text-5xl font-extrabold my-4 text-Blue800">
            Stay Updated
          </h1>
          <p className="font-medium text-Blue800 w-[85%]">
            Join 60,000+ product managers receiving monthly updates on
          </p>

          <div className="flex flex-col gap-3 my-4 text-Blue800 font-medium">
            <div className="flex items-center gap-3">
              <img src={iconList} alt="List icon" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={iconList} alt="List icon" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={iconList} alt="List icon" />
              <p>And much more!</p>
            </div>
          </div>

          <form className="flex flex-col gap-4 mt-8">
            <label htmlFor="email" className="font-bold text-Blue700 text-sm">
              Email address
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="p-3 border border-Grey rounded-md focus:outline-none focus:text-Blue800 focus:ring-1 focus:ring-Blue800"
            />

            {/* Animated button */}
            <button
              type="submit"
              className="relative group font-bold bg-Blue800 text-White p-4 rounded-md hover:bg-gradient-to-r from-[#ff5279] via-[#ff6155] to-[#ff7c4d] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#ff5279]/50 "
            >
              {/* top blur (pinkish) */}
              <span className="absolute top-0 left-0 w-full h-2 bg-[#ff5279] blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              {/* bottom blur (orangish) */}
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#ff7c4d] blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="md:order-2">
          <img
            src={illustrationMobile}
            alt="Mobile illustration"
            className="block md:hidden"
          />
          <img
            src={illustrationTablet}
            alt="Tablet illustration"
            className="hidden md:block lg:hidden"
          />
          <img
            src={illustrationDesktop}
            alt="Desktop illustration"
            className="hidden lg:block"
          />
        </div>
      </div>
    </main>
  );
};

export default App;
