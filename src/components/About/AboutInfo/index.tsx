import Image from "next/image";
import React from "react";
import aboutimage from "../../../../public/assets/images/about.png";
import { Para14, Para16, Para18 } from "@/components/Common/Paragraph";
import {
  HeadingH1,
  HeadingH3,
  HeadingH4,
  HeadingH6,
} from "@/components/Common/Heading";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const AboutInfo = ({
  para1,
  para2,
  mid,
  para3,
  para4,
  words,
  title,
  image,
  w1title,
  w2title,
  words1,
  words2,
}: any) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 container mt-10 lg:mt-32 justify-items-center">
        <div className="space-y-4 mb-10 md:mb-0 flex flex-col justify-center">
          <Para18
            className="font-fam text-primary-orange-300 font-bold  "
            title={title}
          />
          <hr className="border-2 border-primary-orange-300 w-20" />
          <div>
            <HeadingH1 title="We are Professional " />
            <br />
            <HeadingH1 title="Planners For your " />
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/12 hidden md:block">
              <hr className="border-2 border-primary-orange-200 w-14 mt-5" />
            </div>
            <div className="w-full md:w-11/12 p-1 md:p-4 space-y-4">
              <Para14 title={para1} />
              <Para14 title={para2} />
              <HeadingH6 className="text-primary-orange-300" title={mid} />
              <Para14 title={para3} />
              <Para14 title={para4} />
            </div>
          </div>
        </div>
        <Image
          className="bg-cover"
          src={image}
          width={500}
          height={500}
          alt="Image"
        />
      </div>

      {words && words.trim().length > 0 ? (
        <div className="rounded-md pt-5 bg-primary-orange-300 shadow container p-2 mt-10 lg:mt-32">
          <div className="lg:p-8 md:p-6 sm:p-4 p-2 space-y-3 text-white">
            <HeadingH3
              className={"border-b-2 text-white"}
              title={"Crown International Travels (Pvt) Ltd."}
            />
            <FaQuoteLeft size={25} />
            <TextGenerateEffect className="text-white" words={words} />
            <FaQuoteRight size={25} />
          </div>
        </div>
      ) : (
        <>
          <div className=" container p-2 mt-10 lg:mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 ">
              <div className="rounded-md pt-5 bg-primary-orange-300 shadow">
                <div className="lg:p-8 md:p-6 sm:p-4 p-2 space-y-3 text-white">
                  <HeadingH3
                    className={"border-b-2 text-white"}
                    title={w1title}
                  />
                  <FaQuoteLeft size={25} />
                  <TextGenerateEffect className="text-white" words={words1} />
                  <FaQuoteRight size={25} />
                </div>
              </div>

              <div className="rounded-md pt-5 bg-primary-orange-300 shadow">
                <div className="lg:p-8 md:p-6 sm:p-4 p-2 space-y-3 text-white">
                  <HeadingH3
                    className={"border-b-2 text-white"}
                    title={w2title}
                  />
                  <FaQuoteLeft size={25} />
                  <TextGenerateEffect className="text-white" words={words2} />
                  <FaQuoteRight size={25} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AboutInfo;
