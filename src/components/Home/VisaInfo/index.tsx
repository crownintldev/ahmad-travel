"use client";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import React from "react";
import { HeadingH3, HeadingH6 } from "../../Common/Heading";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import flag from '../../../../public/assets/images/flag/azerbaijanflag.webp'

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

const VisaInfo: React.FC<Visaprops> = ({ heading, visaprocess }) => {
  const truncateText = (
    text: string | null | undefined,
    maxLength: number
  ): string => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text || "";
  };

  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1.3, spacing: 5 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2.3, spacing: 5 },
      },
      "(min-width: 1240px)": {
        slides: { perView: 3.5, spacing: 10 },
      },
      "(min-width: 1440px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <>
      {visaprocess && visaprocess.length > 0 && (
        <div className="container p-2 mt-10 ">
          <HeadingH3 title={heading} />
          <hr className="w-16 border-2 border-primary-orange-400" />
          <div
            ref={ref}
            className="keen-slider flex overflow-hidden mt-10 gap-3"
          >
            {visaprocess.length > 0 &&
              visaprocess.map((array, index) => (
                <Link
                  href={array.link}
                  className="grid keen-slider__slide mt-3 mb-3"
                  key={index}
                >
                  <CardContainer>
                    <CardBody className=" bg-primary-orange-400 relative group/card border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
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
                            <Image height={200} width={200} className="rounded-full" src={array.flag} alt="flag"/>
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
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default VisaInfo;
