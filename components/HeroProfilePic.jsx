import React from "react";
import Image from "next/image";

const HeroProfilePic = () => {
  return (
    <div className="w-full relative">
      <Image
        src={"/images/Headshot.png"}
        alt="Developer"
        width={200}
        height={200}
        priority
        className="w-full rounded-2xl"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm rounded-b-2xl">
        {/* Banner content with responsive padding and typography */}
        <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
          <h2 className="text-white font-light tracking-wide m-0
            text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Incoming Software Engineer @ Intradiem
          </h2>
          
          <div className="flex items-center justify-between mt-1 sm:mt-2">
            <p className="text-gray-300 text-xs sm:text-sm md:text-base m-0">
              May 2, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProfilePic;