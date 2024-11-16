import HeroBanner from "@/components/HeroBanner";
import MainLayout from "@/components/Layout/MainLayout";
import Image from "next/image";
import React from "react";

const certificates = [
  { src: "/assets/certificates/c1.jpg", alt: "Certificate 1" },
  { src: "/assets/certificates/c2.png", alt: "Certificate 2" },
  { src: "/assets/certificates/c3.png", alt: "Certificate 3" },
  { src: "/assets/certificates/c4.png", alt: "Certificate 4" },
  { src: "/assets/certificates/c5.png", alt: "Certificate 5" },
  { src: "/assets/certificates/c6.png", alt: "Certificate 6" },
  { src: "/assets/certificates/c7.png", alt: "Certificate 7" },
  { src: "/assets/certificates/c8.png", alt: "Certificate 8" },
  { src: "/assets/certificates/c9.png", alt: "Certificate 9" },
  { src: "/assets/certificates/c10.jpg", alt: "Certificate 10" },
];

const Page = () => {
  return (
    <MainLayout>
      <HeroBanner
        title={"Certification"}
        backgroundImage={"/assets/certification-banner.jpg"}
        subtitle={"certification"}
      />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16">
        <h2
          className="text-4xl font-semibold text-center uppercase tracking-tight text-gray-800 mb-4
      "
        >
          Our Certifications
        </h2>
        <p className="max-w-3xl mx-auto text-gray-7900 text-center text-balance mb-12">
          Almaram Alfaneyah has been certified from Schneider Electric, ABB,
          Rittal, Rolaco, L&T, EPLAN.
        </p>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300"
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
