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
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Image
              src="/assets/logo.png"
              alt="Almaram Alfaneyah Logo"
              width={200}
              height={60}
              className="mb-6"
            />
            <p className="text-gray-600 text-lg leading-relaxed">
              Almaram Alfaneyah Manufacturing Co. is a certified channel partner
              of Schneider Electric, specializing in the manufacturing of LV
              switchgear panels in the Kingdom of Saudi Arabia. Based in Jeddah,
              we are expanding to major cities in Saudi Arabia, meeting IEC, ISO,
              and ASO standards.
            </p>
            <div className="flex space-x-4">
              <TooltipProvider>
                {[
                  { href: "https://www.facebook.com", label: "Facebook", icon: FaFacebook },
                  { href: "https://www.instagram.com", label: "Instagram", icon: FaInstagram },
                  { href: "https://www.linkedin.com", label: "LinkedIn", icon: FaLinkedin },
                  { href: "https://www.twitter.com", label: "Twitter", icon: FaTwitter },
                  { href: "https://www.whatsapp.com", label: "WhatsApp", icon: FaWhatsapp },
                ].map(({ href, label, icon: Icon }) => (
                  <Tooltip key={label} side="top" align="center">
                    <TooltipTrigger>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex items-center justify-center w-12 h-12 bg-main hover:bg-[#da3a16] rounded-full text-white shadow-md transition-colors duration-300"
                      >
                        <Icon className="text-2xl" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-700 text-white p-2 rounded-md">
                      {label}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-main mb-4">Contact Information</h2>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 bg-gray-200 rounded-full text-main">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <span className="text-lg">Location: 108930, Jeddah 21351, K.S.A</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 bg-gray-200 rounded-full text-main">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <span className="text-lg">Call Us: +966 56 910 5617</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
