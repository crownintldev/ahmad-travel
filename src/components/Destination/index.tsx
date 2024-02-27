
import React from "react";
import { HeadingH2 } from "../Common/Heading";
import { Para16 } from "../Common/Paragraph";
import Slider from "../Carousel/Slider";
import tra1 from '../../../public/assets/images/tra1.jpg'

const Destination = () => {

  return (
    <>
    <div className="container p-2 md:p-4 lg:p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 items-center space-y-4 gap-4  mt-32 mb-20">
        <div className="space-y-3">
          <HeadingH2
            className="leading-tight"
            title="Go beyond your imagination"
          />
          <div className="border-b-2 border w-72 border-b-primary-orange-200" />
          <Para16 title="Discover your ideal experience with us" />
        </div>
        <div className="col-span-2">
        <Slider 
           
           destinations={[
            {
               href:"/" , image:tra1 , title:"Air Tickets", description:"We are a leading online ticketing agency that specializes in both domestic and international flights."
            },
            {
              href:"/" , image:tra1 , title:"Air Tickets", description:"We are a leading online ticketing agency that specializes in both domestic and international flights."
           },
           {
            href:"/" , image:tra1 , title:"Air Tickets", description:"We are a leading online ticketing agency that specializes in both domestic and international flights."
          },
          {
          href:"/" , image:tra1 , title:"Air Tickets", description:"We are a leading online ticketing agency that specializes in both domestic and international flights."
          },
          {
          href:"/" , image:tra1 , title:"Air Tickets", description:"We are a leading online ticketing agency that specializes in both domestic and international flights."
          },
          ]}
        />

          
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Destination;
