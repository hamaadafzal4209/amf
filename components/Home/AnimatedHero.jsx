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
    "url('/assets/banner-5.jpg')",
    "url('/assets/banner-3.jpg')",
    "url('/assets/banner-4.jpg')",
  ];

  const textContents = [
    "High-Quality Low Voltage Switchgear - Reliable and Efficient Power Distribution Solutions",
    "Cutting-Edge Technology - Industry-Leading Innovations in Electrical Safety and Performance",
    "Tailored Solutions for Every Industry - Customized Panel Designs to Meet Your Needs",
    "Sustainability and Safety Compliance - Committed to Environmental Responsibility",
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

      if (i === 0) {
        gsap.set([textRefs.current[i], descRefs.current[i]], {
          y: "0%",
          opacity: 1,
        });
      } else {
        gsap.set([textRefs.current[i], descRefs.current[i]], {
          y: "100%",
          opacity: 0,
        });
      }
    });

    gsap.delayedCall(0.1, () => {
      gsap.to([textRefs.current[0], descRefs.current[0]], {
        duration: 1,
        y: "0%",
        opacity: 1,
        ease: "power1.out",
        stagger: 0.2,
      });
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

    gsap.set(nextSlide, {
      zIndex: 2,
      clipPath: clipOut,
      x: x || "0%",
      y: y || "0%",
    });
    gsap.set(currentSlide, { zIndex: 1 });

    gsap.to(nextSlide, {
      duration: 1,
      ease: "power1.inOut",
      clipPath: clipIn,
      x: "0%",
      y: "0%",
      onComplete: () => {
        setIsTweening(false);
        gsap.set(currentSlide, { clearProps: "z-index" });
      },
    });

    gsap.to([nextText, nextDesc], {
      duration: 1,
      y: "0%",
      opacity: 1,
      ease: "power1.out",
      stagger: 0.2,
      delay: 0.3,
    });
  };

  useEffect(() => {
    const timer = setInterval(gotoNextSlide, 3000);
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
