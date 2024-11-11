"use client";

import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";

export default function ContactSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side */}
          <div className="md:w-1/2 space-y-8">
            <Image
              src="https://www.amf-sa.com/frontend/images/logo.jpg"
              alt="Almaram Alfaneyah Logo"
              width={200}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-800 leading-relaxed">
              Almaram Alfaneyah Manufacturing Co. is a certified channel partner
              of Schneider Electric, specializing in the manufacturing of LV
              switchgear panels in the Kingdom of Saudi Arabia. With its Head
              Office in Jeddah, the company aims to establish a network of
              branches in major cities across Saudi Arabia, operating in
              accordance with the highly acclaimed IEC, ISO, and ASO standards.
            </p>
            <div className="flex space-x-4">
              <TooltipProvider>
                {/* Social Media Icons with Tooltips */}
                <Tooltip side="top" align="center">
                  <TooltipTrigger>
                    <div className="gradient-icon-border">
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-blue-500 to-blue-400 rounded-full text-white hover:text-blue-600 transition-colors duration-300"
                        aria-label="Facebook"
                      >
                        <FaFacebook className="text-2xl" />
                      </a>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>Facebook</TooltipContent>
                </Tooltip>
                <Tooltip side="top" align="center">
                  <TooltipTrigger>
                    <div className="gradient-icon-border">
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-pink-500 to-pink-400 rounded-full text-white hover:text-pink-600 transition-colors duration-300"
                        aria-label="Instagram"
                      >
                        <FaInstagram className="text-2xl" />
                      </a>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>Instagram</TooltipContent>
                </Tooltip>
                <Tooltip side="top" align="center">
                  <TooltipTrigger>
                    <div className="gradient-icon-border">
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-blue-700 to-blue-600 rounded-full text-white hover:text-blue-500 transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="text-2xl" />
                      </a>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
                <Tooltip side="top" align="center">
                  <TooltipTrigger>
                    <div className="gradient-icon-border">
                      <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-blue-400 to-blue-300 rounded-full text-white hover:text-blue-400 transition-colors duration-300"
                        aria-label="Twitter"
                      >
                        <FaTwitter className="text-2xl" />
                      </a>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>Twitter</TooltipContent>
                </Tooltip>
                <Tooltip side="top" align="center">
                  <TooltipTrigger>
                    <div className="gradient-icon-border">
                      <a
                        href="https://www.whatsapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-green-500 to-green-400 rounded-full text-white hover:text-green-500 transition-colors duration-300"
                        aria-label="WhatsApp"
                      >
                        <FaWhatsapp className="text-2xl" />
                      </a>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>WhatsApp</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Right side */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-semibold text-main mb-4">
              Office Address
            </h2>
            <div className="flex flex-col gap-4 text-gray-700">
              <div className="flex items-center gap-4">
                <div className="gradient-icon-border">
                  <span className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-full text-white">
                    <FaMapMarkerAlt className="text-xl" />
                  </span>
                </div>
                <span>Location: 108930, Jeddah 21351, K.S.A</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="gradient-icon-border">
                  <span className="flex items-center justify-center w-[44px] h-[44px] bg-gradient-to-br from-green-500 to-green-400 rounded-full text-white">
                    <FaPhoneAlt className="text-xl" />
                  </span>
                </div>
                <span>Call Us: +966 56 910 5617</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
