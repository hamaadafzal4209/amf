"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const isActiveLink = (href) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    setIsLoaded(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 
        ${isScrolled ? 'shadow-md py-3 px-4 lg:px-8 bg-gradient-to-r from-gray-100 to-white' : 'py-4 px-4 lg:px-12 bg-gradient-to-r from-gray-100 to-white '}  ${
          isLoaded ? "animate-navbar" : "opacity-0"
        }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
        <Image
              src="https://www.amf-sa.com/frontend/images/logo.jpg"
              alt="Almaram Alfaneyah Logo"
              width={200}
              height={60}
              className={`${isScrolled ? "w-24" : "w-32" }`}
            />
        </Link>

        <div className="hidden md:flex md:items-center gap-6 font-semibold text-gray-700">
          <Link
            href="/"
            className={`hover:text-main transition-colors duration-200 ${isActiveLink("/") ? "text-main" : ""}`}
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center py-2 hover:text-main transition-colors duration-200">
              Company
              <ChevronDown className="ml-1 h-4 w-4 text-gray-700" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200">
              <DropdownMenuItem>
                <Link href="/" className="w-full text-sm hover:text-main transition-colors duration-200">
                  Quality Control
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="w-full text-sm hover:text-main transition-colors duration-200">
                  Certification
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/" className={`hover:text-main transition-colors duration-200 ${isActiveLink("/projects") ? "text-main" : ""}`}>
            Projects
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center py-2 hover:text-main transition-colors duration-200">
              Products
              <ChevronDown className="ml-1 h-4 w-4 text-gray-700" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200">
              <div className="max-h-[70vh] w-[200px] no-scrollbar overflow-y-auto">
                {[
                  "Low Voltage Switchgear",
                  "Motor Control Centers",
                  "HVAC Control Panels",
                  "Synchronizing Panels",
                  "Automatic/Manual Transfer Switch Panels",
                  "Power Factor Improvement Panels",
                  "Cables and Bus Bar Trunking",
                ].map((product, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href="/" className="w-full text-sm hover:text-main transition-colors duration-200">
                      {product}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/services" className={`hover:text-main transition-colors duration-200 ${isActiveLink("/services") ? "text-main" : ""}`}>
            Services
          </Link>
          <Link href="/" className={`hover:text-main transition-colors duration-200 ${isActiveLink("/about") ? "text-main" : ""}`}>
            About Us
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet>
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
                <Link href="/" className="block text-base font-semibold hover:text-main transition-colors duration-200">
                  Home
                </Link>
                <Accordion className="border-none p-0 m-0" type="single" collapsible>
                  <AccordionItem className="border-none p-0 m-0" value="company">
                    <AccordionTrigger className="text-base font-semibold hover:text-main transition-colors duration-200">
                      Company
                    </AccordionTrigger>
                    <AccordionContent className="p-0 m-0">
                      <div className="flex flex-col">
                        <Link href="/" className="block px-3 py-1.5 hover:text-main transition-colors duration-200">
                          Quality Control
                        </Link>
                        <Link href="/" className="block px-3 py-1.5 hover:text-main transition-colors duration-200">
                          Certification
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link href="/" className="block text-base font-semibold hover:text-main transition-colors duration-200">
                  Projects
                </Link>
                <Accordion type="single" collapsible>
                  <AccordionItem className="border-none" value="products">
                    <AccordionTrigger className="text-base font-semibold hover:text-main transition-colors duration-200 border-none">
                      Products
                    </AccordionTrigger>
                    <AccordionContent className="p-0">
                      <div className="flex flex-col">
                        {[
                          "Low Voltage Switchgear",
                          "Motor Control Centers",
                          "HVAC Control Panels",
                          "Synchronizing Panels",
                          "Automatic/Manual Transfer Switch Panels",
                          "Power Factor Improvement Panels",
                          "Cables and Bus Bar Trunking",
                        ].map((product, index) => (
                          <Link key={index} href="/" className="block px-3 py-2 hover:text-main transition-colors duration-200">
                            {product}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link href="/services" className="block text-base font-semibold hover:text-main transition-colors duration-200">
                  Services
                </Link>
                <Link href="/" className="block text-base font-semibold hover:text-main transition-colors duration-200">
                  About Us
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
