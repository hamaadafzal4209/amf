"use client";

import CreateProduct from "@/components/admin/CreateProduct";
import AdminNavbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import React, { useState, useEffect } from "react";

const AllProducts = () => (
  <div>
    <h2>All Products</h2>
    <p>List of all your products...</p>
  </div>
);

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("all-products");
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setSidebarOpen(false);
      } else {
        setIsMobile(false);
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          className={`w-full p-6 transition-all duration-300 ${
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
