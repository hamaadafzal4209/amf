"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActiveLink = (href) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    setIsLoaded(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 
        ${
          isScrolled
            ? "shadow-md py-3 px-4 lg:px-8 bg-gradient-to-r from-gray-100 to-white"
            : "shadow py-3 px-4 lg:px-12 bg-gradient-to-r from-gray-100 to-white"
        }  ${isLoaded ? "animate-navbar" : "opacity-0"}`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Almaram Alfaneyah Logo"
            width={500}
            height={500}
            className={`${
              isScrolled
                ? "w-40 transition duration-300"
                : "w-44 sm:w-48 transition duration-300"
            }`}
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex md:items-center gap-6 font-semibold text-gray-700">
          <Link
            href="/"
            className={`relative group hover:text-main transition-colors duration-200 ${
              isActiveLink("/") ? "text-main" : ""
            }`}
          >
            Home
            <span
              className={`absolute left-0 -bottom-1 h-1 rounded-md bg-main block w-0 group-hover:w-3/4 transition-all duration-300 ${
                isActiveLink("/") ? "w-3/4" : ""
              }`}
            ></span>
          </Link>
          <Link
            href="/about"
            className={`relative group hover:text-main transition-colors duration-200 ${
              isActiveLink("/about") ? "text-main" : ""
            }`}
          >
            About Us
            <span
              className={`absolute left-0 -bottom-1 h-1 rounded-md bg-main block w-0 group-hover:w-3/4 transition-all duration-300 ${
                isActiveLink("/about") ? "w-3/4" : ""
              }`}
            ></span>
          </Link>
          <Link
            href="/certification"
            className={`relative group hover:text-main transition-colors duration-200 ${
              isActiveLink("/certification") ? "text-main" : ""
            }`}
          >
            Certification
            <span
              className={`absolute left-0 -bottom-1 h-1 rounded-md bg-main block w-0 group-hover:w-3/4 transition-all duration-300 ${
                isActiveLink("/certification") ? "w-3/4" : ""
              }`}
            ></span>
          </Link>
          <Link
            href="/products"
            className={`relative group hover:text-main transition-colors duration-200 ${
              isActiveLink("/products") ? "text-main" : ""
            }`}
          >
            Products
            <span
              className={`absolute left-0 -bottom-1 h-1 rounded-md bg-main block w-0 group-hover:w-3/4 transition-all duration-300 ${
                isActiveLink("/products") ? "w-3/4" : ""
              }`}
            ></span>
          </Link>
          <Link
            href="/services"
            className={`relative group hover:text-main transition-colors duration-200 ${
              isActiveLink("/services") ? "text-main" : ""
            }`}
          >
            Services
            <span
              className={`absolute left-0 -bottom-1 h-1 rounded-md bg-main block w-0 group-hover:w-3/4 transition-all duration-300 ${
                isActiveLink("/services") ? "w-3/4" : ""
              }`}
            ></span>
          </Link>
          <Link
            href="/projects"
            className={`relative group hover:text-main transition-colors duration-200 ${
              isActiveLink("/projects") ? "text-main" : ""
            }`}
          >
            Projects
            <span
              className={`absolute left-0 -bottom-1 h-1 rounded-md bg-main block w-0 group-hover:w-3/4 transition-all duration-300 ${
                isActiveLink("/projects") ? "w-3/4" : ""
              }`}
            ></span>
          </Link>
          <Link
            href="/contact"
            className={`relative group hover:text-main transition-colors duration-200 ${
              isActiveLink("/contact") ? "text-main" : ""
            }`}
          >
            Contact Us
            <span
              className={`absolute left-0 -bottom-1 h-1 rounded-md bg-main block w-0 group-hover:w-3/4 transition-all duration-300 ${
                isActiveLink("/contact") ? "w-3/4" : ""
              }`}
            ></span>
          </Link>
        </div>

        <div className="hidden lg:flex flex-col md:items-start gap-1 text-gray-600 font-medium">
          <a
            href="tel:+966569105621"
            className="flex items-center hover:text-main text-sm transition-colors gap-2"
          >
            <Image
              src="/assets/phone-call.png"
              alt="Phone Icon"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            +966 569 105 621
          </a>
          <a
            href="https://wa.me/966569105781"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-main text-sm transition-colors gap-2"
          >
            <Image
              src="/assets/whatsapp.png"
              alt="WhatsApp Icon"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            +966 569 105 781
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <a href="tel:+966569105621">
            <Image
              className="w-6"
              src="/assets/phone-call.png"
              alt="image"
              width={500}
              height={500}
            />
          </a>
          <a
            href="https://wa.me/966569105781"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="w-6"
              src="/assets/whatsapp.png"
              alt="image"
              width={500}
              height={500}
            />
          </a>
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6 text-gray-700" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] min-h-screen overflow-y-auto no-scrollbar bg-white text-gray-800"
            >
              <nav className="flex flex-col mt-6 gap-2">
                <Link
                  href="/"
                  className={`block text-base font-semibold hover:text-main transition-colors duration-200 ${
                    isActiveLink("/") ? "text-main" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`block text-base font-semibold hover:text-main transition-colors duration-200 ${
                    isActiveLink("/about") ? "text-main" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
                <Link
                  href="/certification"
                  className={`block text-base font-semibold hover:text-main transition-colors duration-200 ${
                    isActiveLink("/certification") ? "text-main" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Certification
                </Link>
                <Link
                  href="/projects"
                  className={`block text-base font-semibold hover:text-main transition-colors duration-200 ${
                    isActiveLink("/projects") ? "text-main" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Projects
                </Link>
                <Link
                  href="/products"
                  className={`block text-base font-semibold hover:text-main transition-colors duration-200 ${
                    isActiveLink("/products") ? "text-main" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Products
                </Link>
                <Link
                  href="/services"
                  className={`block text-base font-semibold hover:text-main transition-colors duration-200 ${
                    isActiveLink("/services") ? "text-main" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className={`block text-base font-semibold hover:text-main transition-colors duration-200 ${
                    isActiveLink("/contact") ? "text-main" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
