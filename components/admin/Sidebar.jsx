import React from "react";

const Sidebar = ({ isOpen, activeTab, handleTabClick }) => {
  return (
    <div
      className={`bg-white w-64 border-r-2 border-gray-200 fixed top-16 left-0 h-full transition-transform duration-300 ${
        isOpen ? 'transform-none' : '-translate-x-full'
      }`}
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="flex flex-col p-4">
        <div
          onClick={() => handleTabClick('create-product')}
          className={`py-3 px-4 mb-2 rounded-lg cursor-pointer transition-all duration-200 ${
            activeTab === 'create-product'
              ? 'bg-main text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Create Product
        </div>
        <div
          onClick={() => handleTabClick('all-products')}
          className={`py-3 px-4 mb-2 rounded-lg cursor-pointer transition-all duration-200 ${
            activeTab === 'all-products'
              ? 'bg-main text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          All Products
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
