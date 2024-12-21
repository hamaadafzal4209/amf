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
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Link href={"/"}>
              <Image
                src="/assets/white-logo.png"
                alt="Almaram Alfaneyah Logo"
                width={200}
                height={60}
                className="mb-6"
              />
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed">
              Almaram Alfaneyah Manufacturing Co. is a certified channel partner
              of Schneider Electric, specializing in the manufacturing of LV
              switchgear panels in the Kingdom of Saudi Arabia. Based in Jeddah,
              we are expanding to major cities in Saudi Arabia, meeting IEC,
              ISO, and ASO standards.
            </p>
            <div className="flex space-x-4">
              <TooltipProvider>
                {[
                  {
                    href: "https://www.facebook.com",
                    label: "Facebook",
                    icon: FaFacebook,
                  },
                  {
                    href: "https://www.instagram.com",
                    label: "Instagram",
                    icon: FaInstagram,
                  },
                  {
                    href: "https://www.linkedin.com",
                    label: "LinkedIn",
                    icon: FaLinkedin,
                  },
                  {
                    href: "https://www.twitter.com",
                    label: "Twitter",
                    icon: FaTwitter,
                  },
                ].map(({ href, label, icon: Icon }) => (
                  <Tooltip key={label} side="top" align="center">
                    <TooltipTrigger>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex items-center justify-center w-12 h-12 bg-main hover:bg-mainHover rounded-full text-white shadow-md transition-colors duration-300"
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
            <div>
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.0160869557562!2d39.18492307388917!3d21.428612673927788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c8e5327c464b%3A0x4143e81285adbd42!2zSkpNQTM3NjDYjCAzNzYwINin2YTYo9iu2LfZhNiMIDc3NjbYjCDYrdmKINin2YTZhdit2KzYsSwgSmVkZGFoIDIyNTExLCBTYXVkaSBBcmFiaWE!5e0!3m2!1sen!2s!4v1734176258791!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="mt-10 rounded-md"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-main mb-4">
              Contact Information
            </h2>
            <div className="space-y-6 text-gray-700">
              <div className="flex gap-4">
                <div className="flex mt-0.5 items-center justify-center w-12 h-12 flex-shrink-0 bg-gray-200 rounded-full text-main">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <span className="text-lg text-gray-400">
                  <p>
                    AL-MARAM AL-FANEYAH <br /> 3760 الأخطل, JJMA3760، 7766, حي
                    المحجر, <br />
                    Jeddah 22511 SAUDI ARABIA
                  </p>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 bg-gray-200 rounded-full text-main">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <span className="text-lg text-gray-400">
                  Call Us:
                  <a
                    href="tel:+966569105621"
                    className="text-lg pl-2 hover:text-main hover:underline"
                  >
                    +966 56 910 5621
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 bg-gray-200 rounded-full text-main">
                  <MessageCircle className="text-xl" />
                </div>
                <span className="text-lg text-gray-400">
                  Whatsapp Us:
                  <a
                    href="https://wa.me/966569105781"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg pl-2 hover:text-main hover:underline"
                  >
                    +966 56 910 5781
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
