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
    "url('https://images.unsplash.com/photo-1646330024721-d726c353e519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG93JTIwdm9sdGFnZXxlbnwwfHwwfHx8MA%3D%3D')",
    "url('https://images.unsplash.com/photo-1646330024033-bb43085e2c19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG93JTIwdm9sdGFnZXxlbnwwfHwwfHx8MA%3D%3D')",
    "url('https://images.unsplash.com/photo-1490717550892-b6599dd47aa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvdyUyMHZvbHRhZ2V8ZW58MHx8MHx8fDA%3D')",
    "url('https://images.unsplash.com/photo-1599575654473-4d9a1b766975?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvdyUyMHZvbHRhZ2V8ZW58MHx8MHx8fDA%3D')",
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

  useEffect(() => {
    slidesRef.current.forEach((slide, i) => {
      gsap.set(slide, {
        backgroundImage: images[i],
        backgroundSize: "cover",
        backgroundPosition: "center",
      });
      // Set initial positions for text and description
      gsap.set([textRefs.current[i], descRefs.current[i]], {
        y: "100%",
        opacity: 0,
      });
    });
  }, []);

  const gotoNextSlide = () => {
    if (isTweening) return;

    const currentSlide = slidesRef.current[currentIndex];
    const currentText = textRefs.current[currentIndex];
    const currentDesc = descRefs.current[currentIndex];

    const newIndex = currentIndex < slidesRef.current.length - 1 ? currentIndex + 1 : 0;
    const nextSlide = slidesRef.current[newIndex];
    const nextText = textRefs.current[newIndex];
    const nextDesc = descRefs.current[newIndex];

    setCurrentIndex(newIndex);
    setIsTweening(true);

    // Reset animation states before applying the new animation
    gsap.set([currentText, currentDesc], { y: "100%", opacity: 0 });

    gsap.set(nextSlide, {
      zIndex: 2,
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    });
    gsap.set(currentSlide, { zIndex: 1 });

    // Animate slide transition
    gsap.to(nextSlide, {
      duration: 1,
      ease: "power1.inOut",
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      onComplete: () => {
        setIsTweening(false);
        gsap.set(currentSlide, { clearProps: "z-index" });
      },
    });

    // Animate text and description
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
          <div key={i} className="slide" ref={(el) => (slidesRef.current[i] = el)}>
            <div className="slide-text" ref={(el) => (textRefs.current[i] = el)}>
              {text}
            </div>
            <div className="slide-description" ref={(el) => (descRefs.current[i] = el)}>
              {descriptionContents[i]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
