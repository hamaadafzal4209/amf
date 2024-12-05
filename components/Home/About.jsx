"use client";

import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const ABOUT_LIST = [
  "Certified partner of Schneider Electric, excelling in manufacturing.",
  "Expanding across Saudi cities with LV switchgear solutions.",
  "Committed to global safety standards and quality checks.",
];

export default function AboutUs() {
  return (
    <>
      <Image
        src="/assets/about-one-shape-1.png"
        alt="Circles"
        width={500}
        height={500}
        className="absolute w-80"
        style={{
          filter: "sepia(1) saturate(3000%) hue-rotate(-10deg) brightness(0.9)",
          mixBlendMode: "multiply",
        }}
      />
      <div className="relative">
        {/* Decorative Shape */}
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
        <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-4">
          <Fade triggerOnce direction="up" duration={800} cascade damping={0.2}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1">
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
              <div className="flex-1">
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
                <p className="max-w-3xl text-base text-balance leading-relaxed">
                  We specialize in designing and manufacturing high-quality
                  electrical panel boards tailored to meet diverse industrial
                  and commercial needs. Our commitment to precision, safety, and
                  reliability ensures optimal performance and efficiency in
                  every product.
                </p>
                <Fade triggerOnce direction="up" cascade damping={0.3}>
                  <ul className="list-none space-y-2 mt-4">
                    {ABOUT_LIST.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <Image
                          src={"/assets/bullet.png"}
                          alt="Bullet"
                          width={1000}
                          height={1000}
                          className="w-4 object-contain"
                        />
                        <p className="text-sm text-gray-800"> {item}</p>
                      </li>
                    ))}
                  </ul>
                </Fade>
              </div>
            </div>
          </Fade>

          {/* Vision Section */}
          <Fade triggerOnce direction="up" duration={800} cascade damping={0.2}>
            <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-16 pb-8">
              <div className="flex-1">
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
              <div className="flex-1">
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
    </>
  );
}
