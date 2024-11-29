import React from "react";

const TargetedMarkets = () => {
  const markets = [
    "General Contractors",
    "MEP Contractors",
    "Industry",
    "Genset Rental Companies",
    "Large Structure Buildings",
    "Residential Complexes",
    "Residential Compounds",
    "Hospitals",
    "Pump Dealers",
    "Operations & Maintenance Companies",
    "Steel Structure & Steel Construction Companies",
    "Infrastructure Works Companies",
    "Low Current Systems Companies",
    "Building Management Companies",
    "Hatcheries & Food Production Companies",
    "Agriculture & Aqua Groups",
    "System Integrators",
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Our Targeted Markets</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {markets.map((market, index) => (
            <li
              key={index}
              className="bg-white shadow-lg p-4 rounded-lg text-gray-800 text-center"
            >
              {market}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TargetedMarkets;
