"use client";

import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { CheckCircle, Disc2 } from "lucide-react";
import DotPattern from "../ui/dot-pattern";

const ABOUT_LIST = [
  "Certified partner of Schneider Electric, excelling in manufacturing.",
  "Expanding across Saudi cities with LV switchgear solutions.",
  "Committed to global safety standards and quality checks.",
];

export default function AboutUs() {
  return (
    <div className="relative">
      <DotPattern className="absolute inset-0 z-0 fill-neutral-400/80" />

      {/* Content Area */}
      <div className="relative z-10 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-4">
          <Fade triggerOnce direction="up" duration={800} cascade damping={0.2}>
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-12">
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

              <div className="flex-1 flex flex-col justify-center">
                <Image
                  src={"/assets/energy.png"}
                  alt="Bullet"
                  width={1000}
                  height={1000}
                  className="w-6 mb-3 object-contain"
                />
                <h1 className="text-4xl font-semibold mb-4 text-main">
                  About Almaram Alfaneyah ManufacturingCo.
                </h1>
                <p className="max-w-3xl text-base text-gray-400 text-balance leading-relaxed">
                  We specialize in designing and manufacturing high-quality
                  electrical panel boards tailored to meet diverse industrial
                  and commercial needs. Our commitment to precision, safety, and
                  reliability ensures optimal performance and efficiency in
                  every product.
                </p>
                <ul className="list-none space-y-2 mt-4">
                  {ABOUT_LIST.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-main" />
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Fade>

          <Fade triggerOnce direction="up" duration={800} cascade damping={0.2}>
            <section className="flex flex-col md:flex-row items-center justify-between gap-12 mt-16 pb-8">
              <div className="flex-1">
                <Disc2 size={32} className="text-main mb-4" />
                <h2 className="text-3xl font-semibold mb-6 text-main">
                  Our Vision
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
                  To remain committed to our customers by providing complete
                  solutions with an innovative approach, utilizing the latest
                  technology, and building a skilled workforce dedicated to
                  exploring and advancing in the field of power distribution.
                </p>
              </div>
              <div className="flex-1 w-full">
                <figure className="imageSHineEffect">
                  <Image
                    src="/assets/about-2.jpg"
                    alt="Manufacturing"
                    width={800}
                    height={600}
                    className="w-full rounded-lg object-cover"
                  />
                </figure>
              </div>
            </section>
          </Fade>
        </div>
      </div>
    </div>
  );
}
