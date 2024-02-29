import { HeadingH1, HeadingH3, HeadingH4 } from "@/components/Common/Heading";
import { Para16, Para18 } from "@/components/Common/Paragraph";
import React from "react";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const CeoMessage:React.FC = () => {
  return (
    <>
      <div className=" text-center mt-32 container">
        <HeadingH1
          className={"whitespace-pre-wrap"}
          title={"Our Mission"}
          />
        <Para18
          className={"whitespace-pre-wrap pt-10"}
          
          title={
            "At PF, we consult and lead compliance-based solutions and implement industry best practices for clients across the globe. What started off as a team of two, has now significantly grown and consists of more than 800 dedicated employees, working at 12 locations within Pakistan and 5 locations internationally."
          }
          
          />
      </div>
      <div className=" rounded-md  pt-5  bg-primary-orange-300 shadow container mt-10 lg:mt-32">
        <div className=" lg:p-8 md:p-6 sm:p-4 p-2 space-y-3 text-white">
          <HeadingH3  className={'border-b-2 text-white'} title={'CEO Message'}/>
          <Para18
            className={"pt-3 pb-3  "}
            icon={<FaQuoteLeft size={25} />}
            title={
              "At Crown Travels, we consult and lead compliance-based solutions and implement industry best practices for clients across the globe. What started off as a team of two, has now significantly grown and consists of more than 800 dedicated employees, working at 12 locations within Pakistan and 5 locations internationally."
            }
            endicon={<FaQuoteRight size={25} />}
            />
          <HeadingH4
            
            title={"Mubashir Nazir"}
            />
          <Para16 className={"font-medium "} title={"CEO & FOUNDER"} />
        </div>
      
      </div>
            </>
  );
};

export default CeoMessage;
