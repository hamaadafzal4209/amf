"use client";

import * as React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "./testimonial-card";
import Image from "next/image";
import { testimonials } from "@/constants/testimonialData";
import DotPattern from "../ui/dot-pattern";

const options = {
  loop: true,
  align: "start",
  skipSnaps: false,
};

const autoplayOptions = {
  delay: 5000,
  rootNode: (emblaRoot) => emblaRoot.parentElement,
};

export function Testimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-gray-50">
      <div className="absolute top-0 left-0">
        <Image
          src="/assets/top-left-shape.png"
          alt="Top Left Decorative Shape"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src="/assets/bottom-right-shape.png"
          alt="Bottom Right Decorative Shape"
          width={300}
          height={300}
        />
      </div>

      <DotPattern className="absolute inset-0 opacity-40 z-0" />

      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Image
            src={"/assets/energy.png"}
            alt="Bullet"
            width={1000}
            height={1000}
            className="w-8 mb-4 object-contain"
          />
        </div>
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          What Our Customers Say
        </h2>
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-2">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hidden lg:block"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hidden lg:block"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
