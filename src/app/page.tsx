

import MainSlider from "@/components/Carousel/MainSlider";
import Booking from "@/components/DataDisplay/Booking";
import Destination from "@/components/Destination";
import Brand from "@/components/Carousel/Brand"
import React from "react";
import ChooseUs from "@/components/ChooseUs";
import Faq from "@/components/Home/Faq";
import VisaInfo from "@/components/Home/VisaInfo";
import { OurService } from "@/components/Home/OurService";
import Testimonial from "@/components/Carousel/Testimonial";
import { fileprocess, visacard } from "@/components/Constant";
import { CanvasRevealEffectDemo2 } from "@/components/Home/Glitch";

export default function Home()
 {
  return (
    <>
    <MainSlider/>
    {/* <Booking/> */}
    <Brand/>
    <Destination/>
    <VisaInfo
      heading="Visa Consultancy"
      visaprocess={visacard}
    />
    <VisaInfo
      heading="Visa Processing"
      visaprocess={fileprocess}
    />
    {/* <OurService/> */}
    <CanvasRevealEffectDemo2/>
    <ChooseUs/>
    
    <Testimonial/>
    <Faq
      faqs={
        [
            { title: "What services does Crown Travels offer?", content: "Crown Travels specializes in personalized travel planning and booking services, including flights, accommodations, guided tours, cruise bookings, travel insurance, and special event travel packages." },
            { title: "How can I book a trip with Crown Travels?", content: "You can book a trip with Crown Travels by visiting our website, calling our customer service number, or by visiting our office in person. Our travel experts will assist you in finding the best travel options to suit your needs." },
            { title: "Does Crown Travels offer international travel packages?", content: "Yes, Crown Travels offers a wide range of international travel packages. Whether you're looking for a beach getaway, a cultural excursion, or an adventure tour, we can arrange trips to destinations around the globe." },
            { title: "Can Crown Travels accommodate special travel requests or needs?", content: "Absolutely. We pride ourselves on creating customized travel experiences. Whether you have dietary restrictions, mobility concerns, or special requests, we work to accommodate your needs for a comfortable and enjoyable trip." },
            { title: "What is the cancellation policy at Crown Travels?", content: "Our cancellation policy varies depending on the type of booking and the suppliers' terms. We advise customers to review the terms and conditions at the time of booking, and for added protection, consider purchasing travel insurance through us." },
        ]
      }
    />
    </>
  );
}
