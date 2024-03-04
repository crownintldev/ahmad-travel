"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import MultiImage from "../Carousel/MultiImage";
import ServiceInfo from "./ServiceInfo";
import ServiecForm from "./serviceForm";

export function TracingBeamDemo() {
  return (
    <TracingBeam>
          <div className=' grid grid-cols-1 md:grid-cols-5  mt-10 lg:mt-32 gap-5'>
         <div className='col-span-4'>
         <MultiImage/>
         <ServiceInfo/>
         </div>
         <div className='col-span-1 '>
         <ServiecForm/>
         </div>
     </div>
    </TracingBeam>
  );
}



