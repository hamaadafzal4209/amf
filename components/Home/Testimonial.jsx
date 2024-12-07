"use client";

import * as React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "./testimonial-card";
import Image from "next/image";

const testimonials = [
  {
    content:
      "This product has completely transformed our workflow. It's intuitive, powerful, and a joy to use every day.",
    author: "Alex Johnson",
    role: "Product Manager",
    avatarSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    backgroundImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
  },
  {
    content:
      "I can't imagine running my business without this tool. It's been a game-changer for our team's productivity.",
    author: "Samantha Lee",
    role: "CEO, TechStart",
    avatarSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    backgroundImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  },
  {
    content:
      "The customer support is outstanding. They've gone above and beyond to ensure our success with the platform.",
    author: "Michael Chen",
    role: "IT Director",
    avatarSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    backgroundImage:
      "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=800&h=600&fit=crop",
  },
  {
    content:
      "We've seen a 40% increase in efficiency since implementing this solution. It's been worth every penny.",
    author: "Emily Rodriguez",
    role: "Operations Manager",
    avatarSrc:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces",
    backgroundImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  },
  {
    content:
      "The level of customization available is impressive. It feels like the software was built specifically for our needs.",
    author: "David Patel",
    role: "Software Engineer",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    backgroundImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
  },
];

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
    <section
      className="relative py-12 md:py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/why-choose-one-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
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
