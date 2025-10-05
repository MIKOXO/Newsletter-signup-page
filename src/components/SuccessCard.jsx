import React from "react";
import iconList from "../assets/icon-list.svg";

const SuccessCard = ({ email, onDismiss }) => {
  return (
    <div className="px-10 py-4 flex flex-col gap-3 items-start bg-White rounded-3xl shadow-md max-w-[450px]">
      <img src={iconList} alt="Success icon" className="w-[60px] mt-8" />
      <h1 className="text-4xl lg:text-5xl font-bold my-4 text-Blue800 lg:w-[70%]">
        Thanks for subscribing!
      </h1>
      <p className="font-medium text-Blue800 lg:w-[90%]">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please click the link in the
        email to confirm your subscription.
      </p>

      {/* Animated button */}
      <button
        onClick={onDismiss}
        className="mb-8 mt-4 relative w-full group font-bold bg-Blue800 text-White p-4 rounded-lg hover:bg-gradient-to-r from-[#ff5279] via-[#ff6155] to-[#ff7c4d] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#ff5279]/50 "
      >
        {/* top blur (pinkish) */}
        <span className="absolute top-0 left-0 w-full h-2 bg-[#ff5279] blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        {/* bottom blur (orangish) */}
        <span className="absolute bottom-1 left-0 w-full h-2 bg-[#ff7c4d] blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessCard;
