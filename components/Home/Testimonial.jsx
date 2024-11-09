"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Engineer",
    content:
      "This product has revolutionized our workflow. It's intuitive, powerful, and a joy to use every day.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&q=80",
  },
  {
    name: "Samantha Lee",
    role: "UX Designer",
    content:
      "The attention to detail in the design is remarkable. It's clear that user experience was a top priority.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&q=80",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content:
      "This tool has significantly improved our team's productivity. The ROI has been incredible.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content:
      "The analytics features have given us invaluable insights. It's changed how we approach our campaigns.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces&q=80",
  },
];

const TestimonialCard = ({ testimonial }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <Card className="h-full">
        <CardContent className="p-6 flex flex-col justify-between h-full">
          <p className="text-gray-600 mb-4">{testimonial.content}</p>
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-4">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function AnimatedTestimonialsComponent() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scroll = () => {
        scrollElement.scrollTo({
          left: scrollElement.scrollLeft + 1,
          behavior: "smooth",
        });
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
          scrollElement.scrollTo({ left: 0, behavior: "auto" });
        }
      };
      const intervalId = setInterval(scroll, 50);
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <section className="pb-12 pt-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-main">
          What Our Clients Say
        </h2>
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden overflow-y-hidden space-x-6 pb-4"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="flex-none w-80">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
