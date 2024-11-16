"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Slider.css";

const Slider = () => {
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);
  const textRefs = useRef([]);
  const descRefs = useRef([]);

  const images = [
    "url('/assets/banner-1.jpg')",
    "url('/assets/banner-2.jpg')",
    "url('/assets/banner-3.jpg')",
    "url('/assets/banner-4.jpg')",
  ];

  const textContents = [
    "High-Quality Low Voltage Switchgear",
    "Cutting-Edge Technology",
    "Tailored Solutions for Every Industry",
    "Sustainability and Safety Compliance",
  ];

  const descriptionContents = [
    "Our switchgear ensures smooth power flow, reliability, and long-lasting performance.",
    "Stay ahead with advanced technology that prioritizes safety and functionality.",
    "Solutions specifically crafted to cater to the unique requirements of various industries.",
    "We prioritize sustainable solutions that align with industry safety standards.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTweening, setIsTweening] = useState(false);

  // Define fixed directions for each slide
  const slideDirections = ["left", "right", "top", "bottom"];

  useEffect(() => {
    slidesRef.current.forEach((slide, i) => {
      gsap.set(slide, {
        backgroundImage: images[i],
        backgroundSize: "cover",
        backgroundPosition: "center",
      });

      // Set initial state of text and descriptions off-screen
      if (i === 0) {
        gsap.set([textRefs.current[i], descRefs.current[i]], {
          y: "100%",
          opacity: 0,
        });
      } else {
        gsap.set([textRefs.current[i], descRefs.current[i]], {
          y: "100%",
          opacity: 0,
        });
      }
    });

    // Initial animation for the first slide and its text and description
    gsap.to(slidesRef.current[0], {
      duration: 1.5,
      x: "0%",
      opacity: 1,
      ease: "power2.out",
    });

    gsap.to([textRefs.current[0], descRefs.current[0]], {
      duration: 1.2,
      y: "0%",
      opacity: 1,
      ease: "power2.out",
      stagger: 0.3,
      delay: 0.3, // Slight delay to sync with slide movement
    });
  }, []);

  const gotoNextSlide = () => {
    if (isTweening) return;

    const currentSlide = slidesRef.current[currentIndex];
    const currentText = textRefs.current[currentIndex];
    const currentDesc = descRefs.current[currentIndex];

    const newIndex =
      currentIndex < slidesRef.current.length - 1 ? currentIndex + 1 : 0;
    const nextSlide = slidesRef.current[newIndex];
    const nextText = textRefs.current[newIndex];
    const nextDesc = descRefs.current[newIndex];

    setCurrentIndex(newIndex);
    setIsTweening(true);

    // Animate the current slide content off-screen
    gsap.set([currentText, currentDesc], { y: "100%", opacity: 0 });

    const direction = slideDirections[currentIndex];
    const directionStyles = {
      left: {
        clipIn: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        clipOut: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        x: "-100%",
      },
      right: {
        clipIn: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        clipOut: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        x: "100%",
      },
      top: {
        clipIn: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        clipOut: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        y: "-100%",
      },
      bottom: {
        clipIn: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        clipOut: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        y: "100%",
      },
    };

    const { clipIn, clipOut, x, y } = directionStyles[direction];

    // Set next slide to be off-screen in the specified direction
    gsap.set(nextSlide, {
      zIndex: 2,
      clipPath: clipOut,
      x: x || "0%",
      y: y || "0%",
    });

    gsap.set(currentSlide, { zIndex: 1 });

    // Animate the next slide to come in
    gsap.to(nextSlide, {
      duration: 1.5,
      ease: "power2.inOut",
      clipPath: clipIn,
      x: "0%",
      y: "0%",
      onComplete: () => {
        setIsTweening(false);
        gsap.set(currentSlide, { clearProps: "z-index" });
      },
    });

    // Animate text and description with a slight delay
    gsap.to([nextText, nextDesc], {
      duration: 1.5,
      y: "0%",
      opacity: 1,
      ease: "power2.out",
      stagger: 0.3,
      delay: 0.4, // Delay to sync with slide movement
    });
  };

  useEffect(() => {
    const timer = setInterval(gotoNextSlide, 4000); // Set interval to 4 seconds for a smoother transition
    return () => clearInterval(timer);
  }, [currentIndex, isTweening]);

  return (
    <div className="wrapper">
      <div className="slider" ref={sliderRef}>
        {textContents.map((text, i) => (
          <div
            key={i}
            className="slide"
            ref={(el) => (slidesRef.current[i] = el)}
          >
            <div
              className="slide-text"
              ref={(el) => (textRefs.current[i] = el)}
            >
              {text}
            </div>
            <div
              className="slide-description"
              ref={(el) => (descRefs.current[i] = el)}
            >
              {descriptionContents[i]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
