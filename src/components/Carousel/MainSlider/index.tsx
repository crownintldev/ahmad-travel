"use client";
import { HeadingH5 } from "@/components/Common/Heading";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import tra1 from "../../../../public/assets/images/tra1.jpg";
import tra2 from "../../../../public/assets/images/tra2.jpg";
import tra3 from "../../../../public/assets/images/tra3.jpg";

const MainSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      id: 1,
      src: tra1,
      title: "UAE",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      id: 2,
      src: tra2,
      title: "Canada",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      id: 3,
      src: tra3,
      title: "Germany",
      description: "Lorem ipsum dolor sit amet...",
    },

    // Add more slides as needed
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="slider">
        <div className="list">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`item ${index === activeSlide ? "active" : ""}`}
            >
              <Image
                src={slide.src}
                alt={`Slide ${slide.id}`}
                layout="fill"
                
              />
              <div className="content pt-20 md:pt-10">
                <HeadingH5 className={"text-yellow100"} title={"TRAVELS"} />
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button onClick={prevSlide}>{"<"}</button>
          <button onClick={nextSlide}>{">"}</button>
        </div>
        {/* <div className="thumbnail">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`item ${index === activeSlide ? "active" : ""}`}
              onClick={() => setActiveSlide(index)}
            >
              <Image
                className="rounded-md"
                src={slide.src}
                alt={`Slide ${slide.id}`}
                
              />
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default MainSlider;
