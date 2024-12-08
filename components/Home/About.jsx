"use client";

import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import DotPattern from "../ui/dot-pattern";
import { FaCogs, FaLightbulb, FaUsers } from "react-icons/fa";

const ABOUT_LIST = [
  "Certified partner of Schneider Electric, excelling in manufacturing.",
  "Expanding across Saudi cities with LV switchgear solutions.",
  "Committed to global safety standards and quality checks.",
];

export default function AboutUs() {
  return (
    <>
      <div className="relative">
        <DotPattern className="absolute inset-0 opacity-40 z-0" />

        {/* Content Area */}
        <div className="relative z-10">
          <Image
            src="/assets/about-one-shape-1.png"
            alt="Decorative Shape"
            width={500}
            height={500}
            className="absolute top-0 right-0 w-60 opacity-20"
            style={{
              filter:
                "sepia(1) saturate(3000%) hue-rotate(-10deg) brightness(0.9)",
              mixBlendMode: "multiply",
            }}
          />
          <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-12">
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-12">
              {/* Image Section */}
              <Slide triggerOnce direction="left" duration={800}>
                <div className="flex-1 flex items-center justify-center">
                  <figure className="imageSHineEffect">
                    <Image
                      src="/assets/about-1.jpg"
                      alt="Manufacturing"
                      width={800}
                      height={600}
                      className="w-full rounded-lg object-cover"
                    />
                  </figure>
                </div>
              </Slide>

              {/* Text Section */}
              <Slide triggerOnce direction="right" duration={800}>
                <div className="flex-1 flex flex-col justify-center">
                  <Image
                    src={"/assets/energy.png"}
                    alt="Bullet"
                    width={1000}
                    height={1000}
                    className="w-6 mb-3 object-contain"
                  />
                  <h1 className="text-3xl font-bold mb-4 text-main">
                    About Almaram Alfaneyah ManufacturingCo.
                  </h1>
                  <p className="max-w-3xl text-base text-gray-400 text-balance leading-relaxed">
                    We specialize in designing and manufacturing high-quality
                    electrical panel boards tailored to meet diverse industrial
                    and commercial needs. Our commitment to precision, safety,
                    and reliability ensures optimal performance and efficiency
                    in every product.
                  </p>
                  <ul className="list-none space-y-2 mt-4">
                    {ABOUT_LIST.map((item, index) => (
                      <Fade
                        key={index}
                        triggerOnce
                        direction="up"
                        duration={600}
                      >
                        <li className="flex items-center gap-3">
                          <CheckCircle className="text-main" />
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item}
                          </p>
                        </li>
                      </Fade>
                    ))}
                  </ul>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <Fade triggerOnce direction="up" duration={800} cascade damping={0.2}>
        <section className="pb-16 pt-12 relative bg-slate-100 overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
            <Fade triggerOnce direction="up">
              <h2 className="text-3xl font-bold text-main mb-6">Our Vision</h2>
            </Fade>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {[
                {
                  icon: <FaLightbulb />,
                  title: "Innovation",
                  description:
                    "Utilize the latest technology to provide cutting-edge solutions.",
                },
                {
                  icon: <FaUsers />,
                  title: "Collaboration",
                  description:
                    "Build a skilled workforce dedicated to excellence.",
                },
                {
                  icon: <FaCogs />,
                  title: "Efficiency",
                  description:
                    "Deliver complete and efficient solutions tailored to our clients needs.",
                },
              ].map((item, index) => (
                <Slide
                  key={index}
                  triggerOnce
                  direction="up"
                  duration={800}
                  delay={index * 100}
                >
                  <div className="text-center">
                    <div className="text-main text-5xl mb-4 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Slide>
              ))}
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
}
