//@ts-nocheck

import React from "react";
import { HeadingH2, HeadingH3, HeadingH4, HeadingH5 } from "../Common/Heading";
import { Para16 } from "../Common/Paragraph";
import Slider from "../Carousel/Slider";
import malaysia from '../../../public/assets/images/malaysia.jpg'
import vietnam from '../../../public/assets/images/vitenam.jpg'
import indonesia from '../../../public/assets/images/indonesia.jpg'
import thailand from '../../../public/assets/images/static/bagg.jpg'
import demo from '../../../public/assets/images/static/demo.jpg'

import dubai from '../../../public/assets/images/static/dubai1.jpg'
import malaysiaflag from '../../../public/assets/images/flag/malaysiaflag.webp'
import vitenamflag from '../../../public/assets/images/flag/vietnamflag.webp'
import indonesiaflag from '../../../public/assets/images/flag/indonesiaflag.webp'
import thailandflag from '../../../public/assets/images/flag/thailandflag.webp'
import dubaiflag from '../../../public/assets/images/flag/dubaiflag.webp'



const Destination = () => {

  return (
    <>
    <div className="container p-2 md:p-4 lg:p-6 mt-32 mb-32">
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 items-center space-y-4 gap-4  ">
        <div className="space-y-3">
          <HeadingH3
            className="leading-tight"
            title="We Have Authorized Embassy Visa Application Centre"
          />
          <div className="border-b-2 border w-72 border-b-primary-orange-200" />
          <Para16 title="Go beyond your imagination" />
        </div>
        <div className="col-span-2">
        <Slider 
           
           destinations={[
            {
               href:"/servicedetail/malaysia" , image:demo, flag:malaysiaflag ,visatype:"Visa Application Centre", title:"Malaysia Visa", description:"Malaysia is a vibrant and diverse country located in Southeast Asia, known for its stunning natural landscapes, rich cultural heritage, and modern cities."
            },
            {
              href:"/servicedetail/vietnam" , image:vietnam, flag:vitenamflag ,visatype:"Visa Application Centre", title:"vietnam Visa", description:"Vietnam, located in Southeast Asia, is bordered by China to the north, Laos to the northwest, Cambodia to the southwest, and the South China Sea to the east."
           },
           {
            href:"/servicedetail/indonesia" , image:indonesia, flag:indonesiaflag ,visatype:"Visa Application Centre", title:"Indonesia Visa", description:"Indonesia is a vast archipelago nation located in Southeast Asia, comprised of thousands of islands, and home to a population of over 270 million people."
          },
          {
            href:"/servicedetail/thailand" , image:thailand, flag:thailandflag ,visatype:"Visa Application Centre", title:"Thailand Visa", description:"Thailand is a stunning country located in Southeast Asia, renowned for its rich cultural heritage, ancient history, and breathtaking natural beauty."
          },
          {
            href:"/servicedetail/dubai" , image:dubai, flag:dubaiflag ,visatype:"Visa Application Centre", title:"Dubai Visa", description:"Dubai is a city and emirate in the United Arab Emirates (UAE) located on the southeastern coast of the Persian Gulf."
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
