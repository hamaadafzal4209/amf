"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Power2, Power3, Power4 } from "gsap";
import Image from "next/image";

const heroContents = [
  {
    title: "Cutting-Edge Electronics",
    description: "Discover the latest in tech innovation",
    background: "/assets/banner-1.jpg",
  },
  {
    title: "Smart Home Solutions",
    description: "Transform your living space with IoT devices",
    background: "/assets/banner-2.jpg",
  },
  {
    title: "Powerful Gadgets",
    description: "Boost your productivity with our range of gadgets",
    background: "/assets/banner-3.jpg",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const currentImageRef = useRef(null);
  const nextImageRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((prevIndex) => (prevIndex + 1) % heroContents.length);
    }, 7000); // Increase interval duration for slower transitions

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (nextIndex !== currentIndex) {
      const tl = gsap.timeline();

      tl.to(
        titleRef.current,
        { opacity: 0, x: -50, duration: 1, ease: Power3.easeIn },
        0
      ).to(
        descriptionRef.current,
        { opacity: 0, x: -50, duration: 1, ease: Power3.easeIn },
        0.2
      );

      tl.to(
        imageWrapperRef.current,
        {
          x: "-100%",
          duration: 1.8,
          ease: Power4.easeInOut,
        },
        0
      );

      tl.to(
        currentImageRef.current,
        { opacity: 0, duration: 1.5, ease: Power2.easeInOut },
        0
      ).to(
        nextImageRef.current,
        { opacity: 1, duration: 1.5, ease: Power2.easeInOut },
        0.6
      );

      tl.add(() => {
        setCurrentIndex(nextIndex);
      }, 1.5);

      tl.fromTo(
        titleRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: Power3.easeOut },
        1.8
      ).fromTo(
        descriptionRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: Power3.easeOut },
        2
      );

      tl.set(imageWrapperRef.current, { x: "0%" })
        .set(currentImageRef.current, { x: "0%", opacity: 1 })
        .set(nextImageRef.current, { x: "100%", opacity: 0 });
    }
  }, [nextIndex, currentIndex]);

  return (
    <section className="w-full min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div ref={imageWrapperRef} className="absolute inset-0 flex">
        <div
          ref={currentImageRef}
          className="w-full h-full flex-shrink-0 opacity-100"
        >
          <Image
            src={heroContents[currentIndex].background}
            alt={heroContents[currentIndex].title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>
        <div
          ref={nextImageRef}
          className="w-full h-full flex-shrink-0 opacity-0"
        >
          <Image
            src={heroContents[nextIndex].background}
            alt={heroContents[nextIndex].title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="lg:w-1/2 text-white mb-8 lg:mb-0 space-y-4">
          <div>
            <h1 ref={titleRef} className="text-4xl lg:text-6xl font-bold mb-4">
              {heroContents[currentIndex].title}
            </h1>
            <p ref={descriptionRef} className="text-xl lg:text-2xl mb-8">
              {heroContents[currentIndex].description}
            </p>
          </div>

          <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 font-bold">
            <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-white opacity-[3%]"></span>
            <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-main opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Contact Now
            </span>
            <span className="absolute inset-0 rounded-full border-2 border-white hover:border-main"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
