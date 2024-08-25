import React from "react";
import { useState } from "react";

const navmobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentClassname = isOpen ? "group peer open" : "group peer";

  const [isSubOpen, setIsSubOpen] = useState(false);
  const classes = "group relative h-full cursor-pointer text-center p-4 text-pink-200 transition-colors hover:text-zinc-200 "
  const subcontentClassname = isSubOpen ? classes + "peer open" : classes+  "peer";

  return (
    <div className="block md:hidden ml-auto my-auto pr-4 cursor-pointer">
      <div
        id="mobile-menu-button"
        className={contentClassname}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="group-open:rotate-45 w-8 h-1 rounded-full bg-zinc-200 transition-all top-0 group-open:top-2 relative"></div>
        <div className="opacity-100 group-open:opacity-0 mt-1 w-8 h-1 rounded-full bg-zinc-200 transition-all"></div>
        <div className="group-open:-rotate-45 mt-1 w-8 h-1 rounded-full bg-zinc-200 transition-all top-0 group-open:-top-2 relative"></div>
      </div>
      <div className="absolute peer-open:block hidden bg-gradient-to-r from-rose-500 to-pink-500 w-full left-0 top-16">
        <div className="relative flex h-full cursor-pointer items-center justify-center p-4 text-pink-200 transition-colors hover:bg-white/10 hover:text-zinc-200">
          <span>Home</span>
        </div>
        <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 transition-colors hover:text-zinc-200">
          <span>Lineup</span>
        </div>
        <div
          id="ticket-menu-item"
          className={subcontentClassname}
          onClick={() => setIsSubOpen(!isSubOpen)}
        >
          <div className="p-4 text-center font-bold">Tickets</div>
          <div className="hidden group-open:block">
            <div className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-color easy-in-out">
              <span>Single Day Ticket</span>
            </div>
            <div className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-color easy-in-out">
              <span>7 Day Ticket</span>
            </div>
          </div>
        </div>
        <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 transition-colors hover:bg-white/10 hover:text-zinc-200">
          <span>Support</span>
        </div>
      </div>
    </div>
  );
};

export default navmobile;
