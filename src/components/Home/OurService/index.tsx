import { HeadingH3, HeadingH6 } from "@/components/Common/Heading";
import { Para12, Para14 } from "@/components/Common/Paragraph";
import { Services } from "@/components/Constant";
import React from "react";
import { FaPray } from "react-icons/fa";

const OurService: React.FC = () => {
  return (
    <>
      <div className="container mt-10 lg:mt-32">
      <HeadingH3 title={"Our Services"}/>
        <hr className='w-14 border-2 border-primary-orange-300 '/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4">
            {
                Services.map((array, index)=>(
                    <div className="flex flex-col bg-white border border-t-4 group hover:shadow-md border-t-primary-orange-200 shadow-sm rounded-xl hover:scale-95 duration-300 transition" key={index}>
                    <div className="p-4 md:p-5 space-y-4">
                        <div className="w-16 h-16 rounded-full flex justify-center items-center transition duration-300 border-primary-orange-200 group-hover:bg-primary-orange-200 border-2">
                        {array.icon}
                        </div>
                      <div>
                      <HeadingH6 title={array.title}/>
                      <Para14  title={array.dec}/>
                      </div>
                    </div>
                  </div>
                ))
            }
         
        </div>
      </div>
    </>
  );
};

export default OurService;
