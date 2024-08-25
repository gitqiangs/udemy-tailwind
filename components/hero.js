import React from "react";
import Image from "next/image";
import Hero from "../public/assets/images/hero.jpg";
import Logo from "../public/assets/images/logo.png";

const hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[400px] bg-cover bg-center bg-fixed">
      <Image
        src={Hero}
        alt="Hero image"
        //width={500}
        //height={300}
        //layout="responsive"
        fill
      />
      <div className="bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-md">
        <div className="relative">
          <div className="flex items-center justify-center">
            <Image src={Logo} alt="Logo wave image" width={175} className="" />
          </div>
          <div className="flex items-center justify-center mt-[-70px] mb-5">
            <div className="flex bg-pink-500 w-14 h-14 items-center justify-center gap-1 rounded-full">
              <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey animation-delay-[150ms]"></div>
              <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-300"></div>
              <div className="h-4 w-1 bg-pink-100 rounded-full animate-wavey animation-delay-500"></div>
              <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey"></div>
              <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey"></div>
            </div>
          </div>
        </div>
        <div className="text-5xl font-bold">
          tw:<span className="text-sky-900">To</span>
        </div>
        <div className="mt-3 text-sm font-bold">
          Keep me updated with news and promos
        </div>
        <form className="flex mt-3 gap-2">
          <input
            type="email"
            placeholder="Email"
            className="rounded-sm border border-white/40 bg-white/30 backdrop-blur-md p-2 text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500 focus:outline"
          />
          <button
            type="submit"
            className="cursor-pointer rounded-sm bg-pink-500 py-2 px-4 transition-colors hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default hero;
