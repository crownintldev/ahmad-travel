//@ts-nocheck
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { HeadingH3 } from "@/components/Common/Heading";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface Visaprops {
  heading: string;
  visaprocess?: Array<{
    link?: any;
    image?: any;
    title?: any;
    para?: string;
    location?: string;
    flag?: any;
  }>;
}

const VisaDetail: React.FC<Visaprops> = ({ heading, visaprocess }) => {
  const truncateText = (
    text: string | null | undefined,
    maxLength: number
  ): string => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text || "";
  };
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="max-w-screen-xl p-2 md:p-2 mx-auto mt-10 md:mt-32">
        <div className="flex justify-between">
            <div>
            <HeadingH3 title={heading} />
      <hr className="w-16 border-2 border-primary-orange-400" />
            </div>
            <div className="space-x-4 flex justify-center items-center">
            <div className="border-2 text-primary-orange-300 bg-gray-200 flex justify-center items-center  rounded-md p-2 hover:border-primary-orange-200 hover:bg-primary-orange-200 hover:text-white"
            onClick={() => swiperRef && swiperRef.slidePrev()}
            >
            <MdArrowBackIos  size={25} />
            </div>
            <div className="border-2 text-primary-orange-300 bg-gray-200 flex justify-center items-center  rounded-md p-2 hover:border-primary-orange-200 hover:bg-primary-orange-200 hover:text-white"
            onClick={() => swiperRef && swiperRef.slideNext()}>
            <MdArrowForwardIos  size={25} />
            </div>
            </div>
        </div>
      
      
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[ Navigation, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {visaprocess.length > 0 &&
          visaprocess.map((array, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() => {
                if (swiperRef && swiperRef.autoplay) {
                  swiperRef.autoplay.stop();
                }
              }}
              onMouseLeave={() => {
                if (swiperRef && swiperRef.autoplay) {
                  swiperRef.autoplay.start();
                }
              }}
            >
              <Link href={array.link} className="grid  mt-10 mb-3" key={index}>
                <CardContainer>
                  <CardBody className=" bg-gradient-to-r from-[#FFEF5E] via-[#EBBD45] to-[#D69A00] relative w-auto h-auto rounded-xl p-6 border  ">
                    <CardItem translateZ="100" className="w-full">
                      <div className="bg-white p-2 rounded-xl relative">
                        <Image
                          src={array.image}
                          height="1000"
                          width="1000"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                        <div className="absolute top-4 right-4 py-2 px-4 bg-white font-semibold rounded-lg">
                          <span className="sm:text-md text-[12px]">
                            {array.location}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4 w-16 h-16  bg-white rounded-full">
                          <Image
                            height={200}
                            width={200}
                            className="rounded-full"
                            src={array.flag}
                            alt="flag"
                          />
                        </div>
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-black  px-2 pt-2"
                    >
                      {array.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-black text-sm max-w-sm mt-2  px-2"
                    >
                      {truncateText(array.para, 80)}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
     
    </div>
  );
};

export default VisaDetail;
