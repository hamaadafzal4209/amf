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
    <section className="bg-gray-50 py-12 mb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
          Our Targeted Markets
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <li
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-main hover:shadow-lg hover:bg-main hover:text-white transition ease-in-out duration-300 text-center border border-gray-200"
            >
              <p className="font-medium text-lg">{market}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TargetedMarkets;
