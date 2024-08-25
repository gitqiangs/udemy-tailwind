import React from "react";
import Image from "next/image";
import Band1 from "../public/assets/images/band1.jpg";
import Band2 from "../public/assets/images/band2.jpg";
import Band3 from "../public/assets/images/band3.jpg";
import Band4 from "../public/assets/images/band4.jpg";

const headliner = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto mt-20 text-black">
        <h2>headliner</h2>
        <p>
          Tailwind CSS - effortlessly build a tailwind css music festival site.
          Build custom tailwind plugins, components + more!
        </p>

        <div className="flex">
          <div
            id="previous"
            className="text-xl flex justify-center items-center cursor-pointer p-2"
          > left
          <i class="fas fa-angle-left"></i>
            <Image
              src={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              }
            ></Image>
          </div>

          <div>
            <div
              id="carousel"
              className="mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto scroll-smooth flex-1"
            >
              <div className="min-w-[80%] md:min-w-[40%]">
                <div className="">
                  <Image
                    src={Band1}
                    alt="band1 image"
                    width={300}
                    height={300}
                    className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
                  />
                </div>
                <h5 className="mt-2">Gary smity</h5>
                <h6>1st July 9pm - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div className=" rounded-xl">
                  <Image
                    src={Band2}
                    alt="band1 image"
                    width={300}
                    height={300}
                    className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
                  />
                </div>
                <h5 className="mt-2">Gary smity</h5>
                <h6>1st July 9pm - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div className="">
                  <Image
                    src={Band3}
                    alt="band1 image"
                    width={300}
                    height={300}
                    className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
                  />
                </div>
                <h5 className="mt-2">Gary smity</h5>
                <h6>1st July 9pm - Main Stage</h6>
              </div>
              <div className="min-w-[80%] md:min-w-[40%]">
                <div className="">
                  <Image
                    src={Band4}
                    alt="band1 image"
                    width={300}
                    height={300}
                    className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
                  />
                </div>
                <h5 className="mt-2">Gary smity</h5>
                <h6>1st July 9pm - Main Stage</h6>
              </div>
            </div>
          </div>
          <div
            id="next"
            className="text-xl flex justify-center items-center cursor-pointer p-2"
          >
            Right
            <i class="fas fa-angle-right"></i>
            <Image
              src={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              }
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default headliner;
