

import MainSlider from "@/components/Carousel/MainSlider";
import Booking from "@/components/DataDisplay/Booking";
import Destination from "@/components/Destination";
import Brand from "@/components/Carousel/Brand"
import React from "react";


export default function Home()
 {
  return (
    <>
    <MainSlider/>
    <Booking/>
    <Brand/>
    <Destination/>
    </>
  );
}
