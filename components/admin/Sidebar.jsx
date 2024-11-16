import React from "react";
import { PlusCircle, List } from "lucide-react";

const Sidebar = ({ isOpen, activeTab, handleTabClick }) => {
  return (
    <div
      className={`bg-white w-64 border-r-2 border-gray-200 fixed top-16 left-0 h-full transition-transform duration-300 ${
        isOpen ? "transform-none" : "-translate-x-full"
      }`}
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="flex flex-col p-4">
        <div
          onClick={() => handleTabClick("all-products")}
          className={`py-3 px-4 mb-2 rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3 ${
            activeTab === "all-products"
              ? "bg-main text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <List className="w-5 h-5" />
          All Products
        </div>
        <div
          onClick={() => handleTabClick("create-product")}
          className={`py-3 px-4 mb-2 rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3 ${
            activeTab === "create-product"
              ? "bg-main text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <PlusCircle className="w-5 h-5" />
          Create Product
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
