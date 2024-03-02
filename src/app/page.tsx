

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
    <Faq/>


    </>
  );
}
