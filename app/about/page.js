"use client";

import HeroBanner from "@/components/HeroBanner";
import MainLayout from "@/components/Layout/MainLayout";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { FaLightbulb, FaUsers, FaCogs } from "react-icons/fa";
import { Sponser } from "@/components/Home/Sponsers";
import DotPattern from "@/components/ui/dot-pattern";

const AboutPage = () => {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <HeroBanner
        title="About Us"
        subtitle="Who We Are"
        backgroundImage="/assets/about-banner.jpg"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <Fade triggerOnce direction="up" duration={800} cascade damping={0.2}>
          <header className="text-center mb-12 px-4">
            <h1 className="text-4xl font-extrabold mb-6 text-main">
              About Almaram Alfaneyah Manufacturing Co.
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              We specialize in designing and manufacturing high-quality
              electrical panel boards tailored to meet diverse industrial and
              commercial needs. Our commitment to precision, safety, and
              reliability ensures optimal performance and efficiency in every
              product.
            </p>
          </header>
        </Fade>
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/assets/mission-bg.jpg')" }}
        ></div>
      </section>

      {/* Manufacturing Excellence Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <Fade triggerOnce direction="up" cascade damping={0.3}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src={"/assets/energy.png"}
                  alt="Bullet"
                  width={1000}
                  height={1000}
                  className="w-6 mb-6 object-contain"
                />
                <h2 className="text-3xl font-bold text-main mb-6">
                  Manufacturing Excellence
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Almaram Alfaneyah Manufacturing Co. is a certified channel
                  partner of Schneider Electric, specializing in the
                  manufacturing of LV switchgear panels in the Kingdom of Saudi
                  Arabia. Adhering to IEC and ISO 9001 standards, we maintain
                  the highest quality in all operations.
                </p>
              </div>
              <Image
                src="/assets/about-1.jpg"
                alt="Manufacturing Excellence"
                width={800}
                height={600}
                className="rounded-lg shadow-md object-cover w-full"
              />
            </div>
          </Fade>
        </div>
      </section>

      {/* Expanding Reach Section */}
      <section className="py-16 bg-gray-50 relative">
        <Fade triggerOnce direction="up" cascade damping={0.3}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Image
                src="/assets/about-2.jpg"
                alt="Expanding Reach"
                width={800}
                height={600}
                className="rounded-lg shadow-md object-cover w-full"
              />
              <div>
                <Image
                  src={"/assets/energy.png"}
                  alt="Bullet"
                  width={1000}
                  height={1000}
                  className="w-6 mb-6 object-contain"
                />
                <h2 className="text-3xl font-bold text-main mb-6">
                  Expanding Reach
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With our head office in Jeddah, Almaram Alfaneyah envisions a
                  network of branches across major Saudi cities, ensuring
                  widespread access to our innovative LV switchgear solutions.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* Global Standards Section */}
      <div className="relative">
        <DotPattern className="absolute inset-0 opacity-50 z-0" />
        <section className="py-16 bg-gradient-to-b from-gray-200 to-gray-300">
          <Fade triggerOnce direction="up" cascade damping={0.3}>
            <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
              <h2 className="text-3xl font-bold text-main mb-6">
                Global Standards
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                All products are designed and manufactured in state-of-the-art
                facilities and undergo stringent quality checks, reflecting our
                dedication to quality, safety, and performance.
              </p>
            </div>
          </Fade>
        </section>
      </div>

      {/* Vision Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <Fade triggerOnce direction="up" cascade damping={0.3}>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl font-bold text-main mb-6">Our Vision</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-main text-5xl mb-4 flex justify-center">
                  <FaLightbulb />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Utilize the latest technology to provide cutting-edge
                  solutions.
                </p>
              </div>
              <div className="text-center">
                <div className="text-main text-5xl mb-4 flex justify-center">
                  <FaUsers />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build a skilled workforce dedicated to excellence.
                </p>
              </div>
              <div className="text-center">
                <div className="text-main text-5xl mb-4 flex justify-center">
                  <FaCogs />
                </div>
                <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deliver complete and efficient solutions tailored to our
                  clients needs.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <div className="bg-gray-50">
        <Sponser />
      </div>
    </MainLayout>
  );
};

export default AboutPage;
