"use client";

import { industries } from "@/constants/targetMarketers";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TargetedMarkets() {
  const [angle, setAngle] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [displayedIndustries, setDisplayedIndustries] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 2) % 360);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const itemsToShow = showAll
      ? industries.length
      : window.innerWidth < 768
      ? 6
      : 9;

    setDisplayedIndustries(industries.slice(0, itemsToShow));
  }, [showAll]);

  const handleShowMore = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <div className="bg-slate-900 relative text-gray-100 py-16 mb-12">
      <div className="absolute -top-2 -left-2 rotate-90">
        <Image
          src={"/assets/sqaure-shape.png"}
          alt="shape"
          width={200}
          height={200}
        />
      </div>
      <div className="absolute -bottom-2 right-0 rotate-180">
        <Image
          src={"/assets/sqaure-shape.png"}
          alt="shape"
          width={200}
          height={200}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-main mb-8">
          Our Targeted Markets
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Our solutions cater to a diverse range of industries, providing
          reliable and efficient services tailored to their specific needs.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedIndustries.map((industry, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group border border-transparent transition-transform duration-300"
            style={{
              background: `linear-gradient(45deg, #172033, #172033 50%, #172033) padding-box, 
                          conic-gradient(from ${angle}deg, rgba(31, 41, 55, 0.48) 80%, #E66F3D 86%, rgba(99, 102, 241, 0.4) 90%, #E66F3D 94%, rgba(31, 41, 55, 0.48) 98%) border-box`,
            }}
          >
            <figure className="imageSHineEffect">
              <Image
                src={industry.image}
                alt={industry.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </figure>
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-lg font-bold text-main text-center">
                {industry.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handleShowMore}
          className="bg-main hover:bg-main-dark text-white font-bold py-2 px-4 rounded transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
