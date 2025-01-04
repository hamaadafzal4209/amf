"use client";

import React, { useState, useEffect } from "react";
import AllProducts from "@/components/admin/AllProducts";
import CreateProduct from "@/components/admin/CreateProduct";
import AdminNavbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all-products");
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "admin123";

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      localStorage.setItem("adminPassword", password);
      setIsModalOpen(false);
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  useEffect(() => {
    const savedPassword = localStorage.getItem("adminPassword");
    if (savedPassword === correctPassword) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }

    const handleResize = () => {
      if (window.innerWidth < 1024) {
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
      <Dialog open={isModalOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Admin Access</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              onClick={handlePasswordSubmit}
              className="w-full bg-main text-white hover:bg-main"
            >
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {!isModalOpen && (
        <>
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
              {activeTab === "create-product" ? (
                <CreateProduct />
              ) : (
                <AllProducts />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
