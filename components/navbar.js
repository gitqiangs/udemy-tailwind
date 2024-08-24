import React from "react";
import Image from "next/image";
import Logo from "../public/assets/images/logo-inverted.png";

const navbar = () => {
  return (
    <nav className="flex sticky top-0 bg-gradient-to-r from-rose-500 to-pink-500">
      <div className="flex items-center gap-2 p-2">
        <Image src={Logo} alt="logo image" className="w-14 h-12"></Image>
        <div className="text-2xl font-bold">
          Tw:<span className="text-sky-900">To</span>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <div className="menu-item">
          <span>Home</span>
        </div>
        <div className="menu-item">
          <span>Schedule</span>
        </div>
        <div className="menu-item group">
          <span>Tickets</span>
          <div className="group-hover:block hidden absolute top-full bg-pink-500 right-0 whitespace-nowrap rounded-b-md text-right">
            <div className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 cursor-pointer transition-colors ease-in-out text-zinc-200">
              <span>Single Day Tickets</span>
            </div>
            <div className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 cursor-pointer transition-colors ease-in-out text-zinc-200">
              <span>7 Days Tickets</span>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <span>Support</span>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
