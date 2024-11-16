"use client";

import AdminNavbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import React, { useState } from "react";

const CreateProduct = () => (
  <div>
    <h2>Create Product</h2>
    <p>Here you can create new products...</p>
  </div>
);

const AllProducts = () => (
  <div>
    <h2>All Products</h2>
    <p>List of all your products...</p>
  </div>
);

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("create-product");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <AdminNavbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
        <div
          className={`p-6 transition-all duration-300 ${
            sidebarOpen ? "md:ml-64" : "ml-0"
          }`}
        >
          {activeTab === "create-product" ? <CreateProduct /> : <AllProducts />}
        </div>
      </div>
    </div>
  );
};

export default Page;
