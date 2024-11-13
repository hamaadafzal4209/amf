import React from "react";
import Image from "next/image";

const HeroBanner = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="relative flex items-center justify-center h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src={backgroundImage}
          alt={`${title} Background`}
          layout="fill"
          objectFit="cover"
          className="opacity-75"
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative text-center px-4 md:px-6 lg:px-8 max-w-3xl mx-auto text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase font-bold leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg uppercase text-gray-200">
            Home / company / {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
