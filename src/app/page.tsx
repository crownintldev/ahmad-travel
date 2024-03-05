

import MainSlider from "@/components/Carousel/MainSlider";
import Booking from "@/components/DataDisplay/Booking";
import Destination from "@/components/Destination";
import Brand from "@/components/Carousel/Brand"
import React from "react";
import tra1 from '../../public/assets/images/tra1.jpg'
import tra2 from '../../public/assets/images/tra2.jpg'
import tra3 from '../../public/assets/images/tra3.jpg'
import ChooseUs from "@/components/ChooseUs";
import Faq from "@/components/Home/Faq";
import VisaInfo from "@/components/Home/VisaInfo";
import { OurService } from "@/components/Home/OurService";
import Testimonial from "@/components/Carousel/Testimonial";
import Theme from "@/components/Theme";



export default function Home()
 {
  return (
    <>
    <MainSlider/>
    <Booking/>
    <Brand/>
    <Destination/>
    <VisaInfo
      heading="Visa Processing"
      visaprocess={[
        {title:"Kantua hotel, Thailand",link:"/", image:tra1,  location:" New beach, Thailand", para:"Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit amet."},
        {title:"Kantua hotel, Thailand",link:"/", image:tra2,  location:" New beach, Thailand", para:"Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit amet."},
        {title:"Kantua hotel, Thailand",link:"/", image:tra3,  location:" New beach, Thailand", para:"Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit amet."},
        {title:"Kantua hotel, Thailand",link:"/", image:tra1,  location:" New beach, Thailand", para:"Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit amet."},
        {title:"Kantua hotel, Thailand",link:"/", image:tra2,  location:" New beach, Thailand", para:"Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit amet."},
      ]}
    />
    <OurService/>
    <ChooseUs/>
    <VisaInfo
      heading="Visa"
      visaprocess={[
        {title:"Kantua hotel, Thailand",link:"/", image:tra1,  location:" New beach, Thailand", para:"Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit amet."},
        {title:"Kantua hotel, Thailand",link:"/", image:tra2,  location:" New beach, Thailand", para:"Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit amet."},
        {title:"Kantua hotel, Thailand",link:"/", image:tra3,  location:" New beach, Thailand", para:"Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit amet."},
        {title:"Kantua hotel, Thailand",link:"/", image:tra1,  location:" New beach, Thailand", para:"Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit amet."},
        {title:"Kantua hotel, Thailand",link:"/", image:tra2,  location:" New beach, Thailand", para:"Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit amet."},
      ]}
    />
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
